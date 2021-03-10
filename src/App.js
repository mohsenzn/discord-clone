import React from 'react';
import Chat from './Components/Chat/Chat';
import SideBar from './Components/Sidebar/SideBar';

function App() {
  return (
    <div className="app">
      {/* sideBar */}
      <SideBar/>
      {/* Chat */}
      <Chat/>
    </div>
  );
}

export default App;
// const firebaseConfig = {
//   apiKey: "AIzaSyAgj6zpPNewKcamfQcBi4q8zRirKYRYJvw",
//   authDomain: "discord-clone-9e22e.firebaseapp.com",
//   projectId: "discord-clone-9e22e",
//   storageBucket: "discord-clone-9e22e.appspot.com",
//   messagingSenderId: "744061788644",
//   appId: "1:744061788644:web:07cb8e2308fa94fdf9e7f1",
//   measurementId: "G-739QWPDFF1"
// };