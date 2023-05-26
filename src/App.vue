<template>
<div>
    <router-view class="min-h-full"></router-view>  
   
</div>

</template>

<script setup>

import {useDepStore} from './stores/user'
const depStore = useDepStore()












// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;

//   console.log(uid)
//   console.log(email) 
  
// }


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(uid)
//     console.log("user is signed in") 
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("user is signed out")
//   }
// });

</script>