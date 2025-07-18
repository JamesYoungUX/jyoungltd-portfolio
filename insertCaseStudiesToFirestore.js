/* eslint-disable */
// insertCaseStudiesToFirestore.js
// Script to insert normalized case studies into Firestore
// Usage: node insertCaseStudiesToFirestore.js

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Use the actual service account key file
const serviceAccount = require('./casestudys-9f4d0-firebase-adminsdk-fbsvc-e71746f00f.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Load the normalized case studies JSON
const caseStudies = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/caseStudies.json'), 'utf8'));

async function insertCaseStudies() {
  for (const study of caseStudies) {
    const { id, ...data } = study;
    try {
      await db.collection('caseStudies').doc(id).set(data);
      console.log(`Inserted case study: ${id}`);
    } catch (error) {
      console.error(`Error inserting ${id}:`, error);
    }
  }
  console.log('All case studies inserted.');
  process.exit(0);
}

insertCaseStudies();

/*
Instructions:
1. Download your Firebase service account key from the Firebase Console and save it in your project directory.
2. Make sure you have 'firebase-admin' installed: npm install firebase-admin
3. Run the script: node insertCaseStudiesToFirestore.js
*/ 