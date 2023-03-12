import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 //import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKNpw9uTI3DfV5NthBobevl44W8cWiD0w",
  authDomain: "task-manager-24dad.firebaseapp.com",
  databaseURL: "https://task-manager-24dad-default-rtdb.firebaseio.com",
  projectId: "task-manager-24dad",
  storageBucket: "task-manager-24dad.appspot.com",
  messagingSenderId: "305992977301",
  appId: "1:305992977301:web:d0a2e46b66af477643849c"
};
 
//Initialize Firebase 
const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
const auth = getAuth();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signUpEmailInput = document.getElementById("signUp-email");
const confirmSignUpEmailInput = document.getElementById("confirm-signUp-email");
const signUpPasswordInput = document.getElementById("signUp-password");
const confirmSignUpPasswordInput = document.getElementById("confirm-signUp-password");

const loginBtn = document.getElementById("login");
const submitBtn = document.getElementById("submit");

var email,password,signUpEmail,confirmSignUpEmail,signUpPassword,confirmSignUpPassword;

submitBtn.addEventListener("click", function () {
  var isVerified = true;
  
  signUpEmail = signUpEmailInput.value;
  confirmSignUpEmail = confirmSignUpEmailInput.value;

  if(signUpEmail != confirmSignUpEmail){
    window.alert("Email fields do not match. Try again");
    isVerified = false;
  }

  signUpPassword = signUpPasswordInput.value;
  confirmSignUpPassword = confirmSignUpPasswordInput.value;
  
  if (signUpPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again");
    isVerified = false;
  }

  if(signUpEmail == null ||
     confirmSignUpEmail == null ||
     signUpPassword == null ||
     confirmSignUpPassword == null)
     {
      window.alert("Fill out all the required fields to Sign Up");
      isVerified = false;
     }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then(
      (userCredential) => {
        const user = userCredential.user;
        window.alert("You have successfully created an account");
        window.location = "./createTask.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error occurred, try again");
        window.alert(errorMessage);
      })
  }
})

loginBtn.addEventListener("click", function (){
  email = emailInput.value;
  password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      window.alert("Login Successful");
      window.location = "./createTask.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("Error occurred, try again")
  })
})