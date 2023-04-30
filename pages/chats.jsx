import React, { useState, useEffect, useContext } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home({ username, setUsername, secret, setSecret, logout, setLogout }) {
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
      setLogout(true)
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <Navbar setUsername={setUsername} setSecret={setSecret} logout={logout} setLogout={setLogout}/>
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="9d4bb301-ea43-4d1c-8c68-976ba5a6ea1a"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
