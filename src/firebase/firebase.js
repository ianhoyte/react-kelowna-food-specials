import * as firebase from 'firebase';

let apiKey = process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      databaseURL = process.env.REACT_APP_FIREBASE_DATABASEURL,
      projectId = process.env.REACT_APP_FIREBASE_PROJECTID,
      storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
      messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;

const prodConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId
};

const devConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage
};
