import React from 'react';
import { getAuth,signOut } from 'firebase/auth'; // Importa la función de cierre de sesión de Firebase Auth
// Importa la configuración de Firebase

function Logout() {
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // El usuario ha cerrado sesión con éxito
      })
      .catch((error) => {
        // Manejar errores, si los hay
      });
  };


  return (
    <div className='flex justify-center items-center'>
      {/* Otras partes de tu interfaz de usuario */}
      <button className="text-black w-40 m-4 bg-white border-4 border-black rounded-lg" onClick={handleSignOut}>Cerrar sesión</button>
    </div>
  );
}

export default Logout;

