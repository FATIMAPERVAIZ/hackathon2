
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

// Firebase configuration (replace with your actual Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCBj61ozUOQYwyOeDrYitLElAzUaK3Kzfk",
    authDomain: "myfirst-webapp.firebaseapp.com",
    projectId: "myfirst-webapp",
    storageBucket: "myfirst-webapp.firebasestorage.app",
    messagingSenderId: "862813763911",
    appId: "1:862813763911:web:08072b25920d1bd921b462",
    measurementId: "G-LFC2EYVYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// // Event listener for form submission
// document.getElementById("login-form")?.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Get email and password from form inputs
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Sign in with Firebase authentication
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Login successful
//       const user = userCredential.user;
//       alert("Login successful!");
//       console.log("Logged in user:", user);

//       // Redirect to the dashboard page
//       window.location.href = "./index.html";
//     })
//     .catch((error) => {
//       // Handle login errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`Error: ${errorMessage}`);
//       console.error("Login error:", errorCode, errorMessage);
//     });
// });

document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get email and password from form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Sign in with Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        alert("Login successful!");
        console.log("Logged in user:", user);
  
        // Set sessionStorage to remember user login
        sessionStorage.setItem("userLoggedIn", "true");
  
        // Redirect to the index page
        window.location.href = "./index.html";
      })
      .catch((error) => {
        // Handle login errors
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
        console.error("Login error:", errorMessage);
      });
  });
  



// Sign-up function
document.addEventListener("DOMContentLoaded", () => {
    // Ab yeh code us waqt chalega jab HTML poori tarah load ho chuki ho
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Form ke input values ko read karna
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Firebase sign-up process
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Sign-up successful!");
                window.location.href = "login.html"; // Ya jis page pe jaana ho
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
                console.error("Sign-up error:", errorMessage);
            });
    });
});
