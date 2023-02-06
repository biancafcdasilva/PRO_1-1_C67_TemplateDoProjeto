import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvn6FvT9KH2bfC1CUZbN4ZUfFcSF2HRHY",
  authDomain: "projeto-58-7b6fa.firebaseapp.com",
  databaseURL: "https://projeto-58-7b6fa-default-rtdb.firebaseio.com",
  projectId: "projeto-58-7b6fa",
  storageBucket: "projeto-58-7b6fa.appspot.com",
  messagingSenderId: "793627184275",
  appId: "1:793627184275:web:4e4a2422885bb4f4cfd166"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
