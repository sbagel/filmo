const dotenv = require('dotenv').config()
const router = require('express').Router();
const db = require('./db');
const multer = require("multer");
const { s3Uploadv2, s3Uploadv3 } = require("./s3Service");
const uuid = require("uuid").v4;

router.get('/', (req, res) => {
  console.log('made it to index')

  res.status(200).json('hello!')
})

router.post('/users/new', (req, res) => {
  const {token, username, name, email, meta, avatar, header, follows, followers} = req.body

  if (token) {
    const query = 'INSERT INTO users (token, username, name, email, avatar, header, follows, followers) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'

    db.query(query, [token, username, name, email, avatar, header, follows, followers])
      .then(data=> res.status(201).send([{'CREATED': req.body}]))
      .catch(e => {console.log('post /users/new error', e); res.status(500).send(e)})
  }
})

router.get('/users/current', (req, res) => {

  const query = 'SELECT * FROM users WHERE email = $1'

  db.query(query, [req.query.email])
  .then(data => {res.status(200).send(data.rows[0])})
  .catch(e => {console.log('get /users error', e); res.status(500).send(e)})
})

// photos

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 30 },
});

router.post("/upload", upload.array("file"), async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj)
  try {
    const results = await s3Uploadv3(req.files);
    console.log('heyy uploaded', results);
    return res.json({ status: "success", results: results});
  } catch (err) {
    console.log(err);
  }
});

router.post('/user/current/photos', (req, res) => {
  const {username, result} = req.body

  console.log(req.body)
  if (result) {

    const query = 'INSERT INTO photos (username, url, pinned, title, description) VALUES ($1, $2, $3, $4, $5)'

    db.query(query, [username, result, false, '', ''])
      .then(data=> res.status(201).send([{'CREATED': req.body}]))
      .catch(e => {console.log('post user photo error', e); res.status(500).send(e)})
    }
})

router.get('/users/current/photos', (req, res) => {
  const query = "SELECT * FROM photos WHERE username=$1 ORDER BY id asc"

  db.query(query, [req.query.username])
  .then(data => {res.status(200).send(data.rows)})
  .catch(e => {console.log('get /users error', e); res.status(500).send(e)})
})

router.get('/users/current/pinnedphotos', (req, res) => {
  const query = "SELECT * FROM photos WHERE username=$1 AND pinned=$2"

  db.query(query, [req.query.username, true])
  .then(data => {res.status(200).send(data.rows)})
  .catch(e => {console.log('get /users error', e); res.status(500).send(e)})
})

router.put('/photos/pin', (req, res) => {

  console.log('put!!!!', req.query)
  const query = `
    UPDATE photos
    SET pinned = NOT pinned
    WHERE url = $1
  `
  db.query(query, [req.query.url])
  .then(data => {res.status(204).send()})
  .catch(e => {console.log('put /photos/pin error', e); res.status(500).send(e)})
})

module.exports = router;