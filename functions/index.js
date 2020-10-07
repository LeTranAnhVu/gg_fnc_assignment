const functions = require('firebase-functions');
const { v4: uuidv4 } = require('uuid');

const path = require('path');
const os = require('os');
const fs = require('fs');


const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(async (object) => {
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;
  const fileName = path.basename(filePath);
  const destBucket = admin.storage().bucket(bucket);
  const prefix = 'Renamed-';

  if (!contentType.startsWith('image/')) {
    return console.log('This is not an image.');
  }


  if (fileName.startsWith(prefix)) {
    // Get the Signed URLs for the thumbnail and original image.
    // const config = {
    //   action: 'read',
    //   expires: '03-01-2500',
    // };

    // const renamedFile = destBucket.file(fileName);

    // const responses = await renamedFile.getSignedUrl(config);


    return console.log('skip this file');
  }

  console.log('File change detected, function execution started');

  const tmpFilePath = path.join(os.tmpdir(), filePath);


  await destBucket.file(filePath).download({destination: tmpFilePath});

  const uuid = uuidv4();
  const metadata = {
    contentType: contentType,
    metadata: {
      firebaseStorageDownloadTokens: uuid
    }

  };
  await destBucket.upload(tmpFilePath, {
    destination: prefix + fileName,
    metadata: metadata,
    predefinedAcl: 'publicRead'
  });

  // remove the temporary file
  fs.unlinkSync(tmpFilePath);

  return console.log('done');
});
