const functions = require('firebase-functions');
const {log} = require('firebase-functions/lib/logger');

const vision = require('@google-cloud/vision');
const admin = require('firebase-admin');
admin.initializeApp();

const client = new vision.ImageAnnotatorClient();

exports.processImage = functions.storage.object().onFinalize(async (object) => {
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;

  // check the file type is image or not
  if (!contentType.startsWith('image/')) {
    return console.log('This is not an image.');
  }

  console.log('Starting image processing . . .');

  // start analyse the image
  const [result] = await client.labelDetection(
    `gs://${bucket}/${filePath}`
  );

  // extract the labels fields to review`
  const labels = result.labelAnnotations;
  log('Labels:', labels);
  return;
});
