import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNQ0GQofMu8UTYYnoB7iJfy4YVq-xqTZ4",
  authDomain: "chatbot-seiagi.firebaseapp.com",
  databaseURL: "https://chatbot-seiagi.firebaseio.com",
  projectId: "chatbot-seiagi",
  storageBucket: "chatbot-seiagi.appspot.com",
  messagingSenderId: "667638293142",
  appId: "1:667638293142:web:6ff43f69b6a25679a018b7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
