import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbqyipUfqute_E3-hNVPbz49KDamlsgrs",
    authDomain: "task-manager-501c2.firebaseapp.com",
    projectId: "task-manager-501c2",
    storageBucket: "task-manager-501c2.appspot.com",
    messagingSenderId: "324193010501",
    appId: "1:324193010501:web:f17f01828cc796b2ddf42c",
    measurementId: "G-C5M2NSLX9D"
  };

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
const auth = getAuth();

const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const signUpEmailInput = document.getElementById("signUp-email")
const confirmSignUpEmailInput = document.getElementById("confirm-signUp-email")
const signUpPasswordInput = document.getElementById("signUp-password")
const confirmSignUpPasswordInput = document.getElementById("confirm-signUp-password")

const loginBtn = document.getElementById("login")
const submitBtn = document.getElementById("submit")

var email,password,signUpEmail,confirmSignUpEmail,signUpPassword,confirmSignUpPassword

submitBtn.addEventListener("click", function (){
  let isVerified = true
  
  signUpEmail = signUpEmailInput.value;
  confirmSignUpEmail = confirmSignUpEmailInput.value

  if(signUpEmail != confirmSignUpEmail){
    window.alert("Email fields do not match. Try again")
    isVerified = false
  }

  signUpPassword = signUpPasswordInput.value;
  confirmSignUpPassword = confirmSignUpPasswordInput.value;
  
  if (signUpPassword != confirmSignUpPassword) {
    window.alert("Password field do not match. Try again");
    isVerified = false;
  }

  if(signUpEmail == null ||
     confirmSignUpEmail == null ||
     signUpPassword == null ||
     confirmSignUpPassword == null)
     {
      window.alert("Fill out all the required fields to Sign Up")
      isVerified = false;
     }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then(
      (userCredentials) => {
        const user = userCredentials.user
        window.alert("You have successfully created an account")
        //window.locatio = ""
      }).catch((error) => {
        const errorMessage = error.message 
        window.alert("Error occurred, try again")
        window.alert(errorMessage);
      })
  }
})

loginBtn.addEventListener("click", function (){
  email = emailInput.value;
  password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const user = userCredentials.user;
      window.alert("Login Successful")
      //window.location = ""
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("Error occurred, try again")
  })
})