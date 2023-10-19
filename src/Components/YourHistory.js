import React, { useState, useEffect } from "react";
import useFirebase from "../hooks/useFirebase.jsx";
import { BsFillTrashFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { Link, redirect } from "react-router-dom";
import Logout from "./Logout.jsx";

function Formulario({ comments, onChange }) {
  const { fetchPosts, postComment, deleteComment, auth, likeComment  } = useFirebase();
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [publicaciones, setPublicaciones] = useState(comments);
  const [user, setUser] = useState(null);

  // const { auth } = useFirebase();

  useEffect(() => {
    // Configura un listener para verificar el estado de autenticación
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const canEditOrDelete = (post) => {
    // Verifica si el usuario actual es el autor de la publicación
    return user && post.authorId === user.uid;
  }


  const handleLike = async (id) => {
    if (user) {
      // Encuentra la publicación por su ID
      const postToLike = publicaciones.find((post) => post.id === id);
  
      if (postToLike) {
        // Verifica si el usuario ya ha dado "like" en esta publicación
        if (!postToLike.likedBy.includes(user.uid)) {
          // Agrega el ID del usuario al array de "likedBy"
          postToLike.likedBy.push(user.uid);
  
          // Actualiza la publicación en tu base de datos o servicio
          await likeComment(id, postToLike.likedBy);
  
          // Actualiza las publicaciones en tu estado local para reflejar el cambio
          const updatedPosts = publicaciones.map((post) => (post.id === id ? postToLike : post));
          setPublicaciones(updatedPosts);
        } else {
          console.log("Ya le diste 'like' a esta publicación.");
        }
      } else {
        console.log("Publicación no encontrada.");
      }
    } else {
      console.log("Debes iniciar sesión para dar 'like'.");
    }
  };
  
  

  const handleSubmit = async (e) => {
    // e.preventDefault();

    if (user) {
    const nuevaPublicacion = {
      nombre: nombre,
      comentario: mensaje,
      authorId: user.uid,
    };

    // Agrega la nueva publicación a la lista de publicaciones

    await postComment(nuevaPublicacion);
    await onChange()
    // onChange(nuevaPublicacion);
    // setPublicaciones([...publicaciones, nuevaPublicacion]);
  
    // Limpia los campos del formulario
    setNombre("");
    setMensaje("");
    } else {
    console.log("Debes iniciar sesión para publicar.");
    }
  };

  const handleDelete = async (id) => {
    const postToDelete = publicaciones.find((post) => post.id === id);
  
    if (canEditOrDelete(postToDelete)) {
      try {
        await deleteComment(id);
        // Actualiza las publicaciones con los datos más recientes
        const updatedPosts = await fetchPosts();
        setPublicaciones(updatedPosts);
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  return (
    <>
      <h2 id='comments' className="text-center font-serif text-white pb-4 text-3xl underline underline-offset-8 decoration-white">
        Nuestra Historia
      </h2>
      <div className="flex flex-wrap m-8 font-serif text-white md:justify-center lg:flex-nowrap lg:space-x-10">
        <div className="w-full">
          {comments.map((publicacion, index) => (
            <div
              className="bg-white mb-7 border-1 border-black rounded-lg p-3 max-w-fit"
              key={index}
            >
              <strong className="text-blue-950 capitalize">
                {publicacion.nombre}:
              </strong>{" "}
              <p className="normal-case break-word text-black indent-5">
                {publicacion.comentario}
              </p>
              {/* <div className="flex items-center">
                <span className="mr-1 text-black">{publicacion.likedBy ? publicacion.likedBy.length : 0} </span>
                {user ? (
                  <BiLike
                    className={
                      publicacion.likedBy && Array.isArray(publicacion.likedBy) && publicacion.likedBy.includes(user.uid)
                        ? "text-red-800"
                        : "text-black"
                    }
                    onClick={() => handleLike(publicacion.id)}
                  />
                ) : (
                  <BiLike
                    className="text-black cursor-pointer"
                    onClick={() => handleLike(publicacion.id)}
                  />
                )}
              </div> */}
              {user && canEditOrDelete(publicacion) && (
                <BsFillTrashFill
                  className="text-black mt-3 hover:text-red-800 cursor-pointer"
                  onClick={() => handleDelete(publicacion.id)}
                />
              )}
            </div>
          ))}
        </div>
        {user ? (<div className="bg-neutral-950 rounded-lg w-full h-min">
          <h2 className="text-center py-4 text-xl">Tu Historia</h2>
          <form className="flex flex-col md:flex-wrap" onSubmit={handleSubmit}>
            <label className="m-4" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="text-black border-4 w-44 border-black rounded-lg py-1 px-3 mx-4"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label className="m-4" htmlFor="mensaje">
              Escriba su Historia:
            </label>
            <textarea
              className="text-black border-4 border-black rounded-lg p-3 mx-4"
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="5"
              cols="50"
              required
            ></textarea>
            <button
              type="submit"
              className="text-black w-20 m-4 bg-white border-4 border-black rounded-lg"
            >
              Enviar
            </button>
            <Logout />
          </form>
        </div>
        ) : (
          <div className="flex justify-center items-center flex-col bg-neutral-950 rounded-lg w-full h-min md:w-80 lg:w-full">
          <p className="text-center p-5 text-xl">Si deseas publicar tu historia puedes ingresar aquí:</p>
            <button className="bg-white text-black text-xl p-2 m-7 w-40 rounded-lg"><Link to="/login">Login</Link></button>
        </div>
        )}
        
      </div>
    </>
  );
}


export default Formulario;
