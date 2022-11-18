const dotenv = require('dotenv').config()
const router = require('express').Router();
const db = require('./db');
const multer = require("multer");
const { s3Uploadv2, s3Uploadv3 } = require("./s3Service");
const uuid = require("uuid").v4;

router.get('/', (req, res) => {
  res.status(200).json('hello!')
})

router.post('/users/new', (req, res) => {

  const {token, username, name, email, meta} = req.body

  if (token) {
    const query = 'INSERT INTO users (token, username, name, email) VALUES ($1, $2, $3, $4)'

    db.query(query, [token, username, name, email])
      .then(data=> res.status(201).send('CREATED', req.body))
      .catch(e => {console.log('post /users/new error'); res.status(500).send(e)})
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
  limits: { fileSize: 1000000000, files: 2 },
});


router.post("/upload", upload.array("file"), async (req, res) => {
  try {
    const results = await s3Uploadv3(req.files);
    console.log(results);
    return res.json({ status: "success" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
















// router.get('/test', (req, res) => {
//   console.log('get')
//   res.status(200).json('hi!!!!')
// })

// router.post('/test', (req, res) => {
//   console.log('post', req.body)
// })