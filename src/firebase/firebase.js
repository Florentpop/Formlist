import firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc2SJR6JxVHGbnL4CQ-RF-ZFfASnvXI3A",
  authDomain: "formlist-3561b.firebaseapp.com",
  projectId: "formlist-3561b",
  storageBucket: "formlist-3561b.appspot.com",
  messagingSenderId: "934388288036",
  appId: "1:934388288036:web:4eab6c2b4d666eb6c126b1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
