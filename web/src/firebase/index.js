import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCN_R3FZHFU7bF56pDfq-XY8f-QrhCtVkw",
    authDomain: "react-app-48a35.firebaseapp.com",
    projectId: "react-app-48a35",
    storageBucket: "react-app-48a35.appspot.com",
    messagingSenderId: "778779999177",
    appId: "1:778779999177:web:d873e6b967580fa5504618"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };