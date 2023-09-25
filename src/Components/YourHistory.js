import React, { useState } from "react";
import useFirebase  from "../hooks/useFirebase.jsx";
import { BsFillTrashFill } from "react-icons/bs";


function Formulario({ comments, onChange }) {
  const { fetchPosts, postComment } = useFirebase();
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [publicaciones, setPublicaciones] = useState(comments);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea una nueva publicación
    const nuevaPublicacion = {
      nombre: nombre,
      comentario: mensaje,
    };

    // Agrega la nueva publicación a la lista de publicaciones

    await postComment(nuevaPublicacion);
    await onChange()
    // onChange(nuevaPublicacion);
    // setPublicaciones([...publicaciones, nuevaPublicacion]);
  
    // Limpia los campos del formulario
    setNombre("");
    setMensaje("");
    
  };
    

  return (
    <>
      <h2 id='comments' className="text-center font-serif text-white pb-4 text-3xl">
        Nuestra Historia
      </h2>
      <div className="flex flex-wrap m-8 font-serif text-white lg:flex-nowrap lg:space-x-10">
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
              <BsFillTrashFill 
              className="text-black mt-3 hover:text-red-800 cursor-pointer"
              onClick={handleDelete}
              />
            </div>
          ))}
        </div>
        <div className="bg-neutral-950 rounded-lg w-full h-min">
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
