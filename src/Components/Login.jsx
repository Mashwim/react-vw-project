import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // El inicio de sesión fue exitoso
      navigate('/')
    } catch (error) {
      // El inicio de sesión falló, maneja el error aquí
      console.error(error);
    }
  }

  

  return (
    <div className="bg-neutral-950 m-7 md:mx-44 lg:mx-72 rounded-lg h-min text-white font-serif text-center text-xl flex flex-col justify-center items-center md:flex-wrap">
      <h1 className="mt-7">Iniciar sesión</h1>
      <form className="">
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="m-4 rounded-lg text-black w-5/6 md:w-72"
        />
        <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="m-4 rounded-lg text-black w-5/6 md:w-72"
        />
        <div>
          <button type="submit" className="bg-white text-black text-xl p-2 m-7 rounded-lg" onClick={handleLogin}>Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
