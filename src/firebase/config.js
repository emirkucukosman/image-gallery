import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCt1RqoTe5HvD6Ltq1Ny92b_MqWE-9y5uI",
  authDomain: "image-gallery-46eef.firebaseapp.com",
  databaseURL: "https://image-gallery-46eef.firebaseio.com",
  projectId: "image-gallery-46eef",
  storageBucket: "image-gallery-46eef.appspot.com",
  messagingSenderId: "845460723041",
  appId: "1:845460723041:web:020a84c6ef76482c1e2120"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };