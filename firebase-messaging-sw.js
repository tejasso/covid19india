// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAt9EX7_A8LHgism0eKnkZNsUdsTFh-OIk",
  authDomain: "pushnotification-8f71c.firebaseapp.com",
  databaseURL: "https://pushnotification-8f71c.firebaseio.com",
  projectId: "pushnotification-8f71c",
  storageBucket: "pushnotification-8f71c.appspot.com",
  messagingSenderId: "727698141084",
  appId: "1:727698141084:web:0ef8253106c0a90f9de259",
  measurementId: "G-L9JXWLDF4V",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
