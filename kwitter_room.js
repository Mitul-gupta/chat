
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC9SIL117JFWpQWgGM8Cfp7V3cX-sG00xc",
      authDomain: "quitter-a91b8.firebaseapp.com",
      databaseURL: "https://quitter-a91b8-default-rtdb.firebaseio.com",
      projectId: "quitter-a91b8",
      storageBucket: "quitter-a91b8.appspot.com",
      messagingSenderId: "233925105986",
      appId: "1:233925105986:web:a892eb1a4c90e4b4b350db",
      measurementId: "G-5L8H0P3D64"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name= localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML="Welcome, " + user_name + " !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name)
      window.location="kwitter_page.html"
} 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names)
      row= "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>"

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}