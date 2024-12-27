"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import loginImage from "../../../public/assets/images/login.jpeg";

const LoginComponent = () => {
  const route = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    route.push("/dashboard");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-section-wrapper">
            <h2>Login</h2>

            <input
              type="text"
              value={username}
              onChange={(e) => onUsernameChange(e)}
              placeholder="Username"
            />

            <input
              type="text"
              value={password}
              onChange={(e) => onPasswordChange(e)}
              placeholder="Password"
            />

            <button onClick={() => onLoginClick()}>Login</button>
          </div>
        </div>

        <div className="image-wrapper">
          <Image src={loginImage} alt="test" />
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
