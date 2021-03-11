import React from "react";
import { useSelector } from "react-redux";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import SideBar from "./Components/Sidebar/SideBar";
import { selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          {/* sideBar */}
          <SideBar />
          {/* Chat */}
          <Chat />
        </>
      ) : (
        <Login/>
      )}
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
