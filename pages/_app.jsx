import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import "../styles/navbar.css";
import "../styles/404.css";
import react, { useState } from "react";


export default function App({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [logout , setLogout] = useState(false)

  return (
    <div>
      <Component username={username} setUsername={setUsername} secret={secret} setSecret={setSecret} logout={logout} setLogout={setLogout} />
    </div>
  );
}
