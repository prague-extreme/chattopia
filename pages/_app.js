import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import "../styles/navbar.css";

import react, { useState } from "react";
import Navbar from "../components/Navbar";


export default function App({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  return (
    <div>
      <Component username={username} setUsername={setUsername} secret={secret} setSecret={setSecret} />
    </div>
  );
}
