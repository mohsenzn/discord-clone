import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import SideBar from "./Components/Sidebar/SideBar";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
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
        <Login />
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
