import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyBSjxDYFW4aYg-9p7z1n68WauWXPFkwjk8",
    authDomain: "portalnoticias-6da0f.firebaseapp.com",
    projectId: "portalnoticias-6da0f",
    storageBucket: "portalnoticias-6da0f.appspot.com",
    messagingSenderId: "257627878749",
    appId: "1:257627878749:web:71a1b91c2f8ecf4d3664b4"
});

const db = firebase.firestore();

export {db};