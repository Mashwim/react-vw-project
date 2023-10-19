import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc  } from "firebase/firestore";
import { toast } from 'react-toastify';
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuT-R8n_oOyDaBiA9ZWWraoBL10ei5TGE",
  authDomain: "publicaciones-1f147.firebaseapp.com",
  projectId: "publicaciones-1f147",
  storageBucket: "publicaciones-1f147.appspot.com",
  messagingSenderId: "138680141497",
  appId: "1:138680141497:web:d182da20caec77a27bbd68",
  measurementId: "G-1DEDF0DDT8",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);
const collectionName = 'posts';

function useFirebase() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const query = await getDocs(collection(db, collectionName));
console.log(query)
      const arrayOfPosts = [];
      query.forEach((el) => {
        arrayOfPosts.push({...el.data(), id: el.id});
      });
      return arrayOfPosts;
    } catch (error) {
      console.log("EL SUSODICHO", error);
    }
  };

  const postComment = async ({ comentario, nombre }) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        comentario,
        nombre,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteComment = async (id) => {
    try {
      const response = await deleteDoc(doc(db, collectionName, id))
      console.log(response)
      toast.success("Publicación eliminada exitosamente");
    } catch (error) {
      toast.error("Error al eliminar la publicación: " + error.message);
    }
  }

  return { posts, auth, fetchPosts, postComment, setPosts, deleteComment };
};

export default useFirebase ;
