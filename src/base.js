import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDi1VEiafWtR8fn5JJ_a1LJJeh4tsu9a7U",
  authDomain: "chatbox-ff5e4.firebaseapp.com",
  databaseURL: "https://chatbox-ff5e4.firebaseio.com"
});

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base