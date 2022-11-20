const { S3 } = require("aws-sdk");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const uuid = require("uuid").v4;

exports.s3Uploadv2 = async (files) => {
  const s3 = new S3();

  const params = files.map((file) => {
    return {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${uuid()}-${file.originalname}`,
      Body: file.buffer,
    };
  });

  return await Promise.all(params.map((param) => s3.upload(param).promise()));
};

exports.s3Uploadv3 = async (files) => {
  const s3client = new S3Client();
  const fileNames = []

  const params = files.map((file) => {
    const key = `${uuid()}-${file.originalname}`
    fileNames.push(`https://filmo.s3.us-west-2.amazonaws.com/uploads/${key}`)
    return {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'uploads/'+key,
      Body: file.buffer,
      ContentType: 'image/jpeg'
    };
  });

  return await Promise.all(
    params.map((param) => s3client.send(new PutObjectCommand(param)))
  ), fileNames
};
