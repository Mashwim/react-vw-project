import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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
const db = getFirestore(firebaseApp);

function useFirebase() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const query = await getDocs(collection(db, "posts"));

      const arrayOfPosts = [];
      query.forEach((el) => {
        arrayOfPosts.push(el.data());
      });

      return arrayOfPosts;
    } catch (error) {
      console.log("EL SUSODICHO", error);
    }
  };

  const postComment = async ({ comentario, nombre }) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        comentario,
        nombre,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { posts, fetchPosts, postComment };
}

export default useFirebase;
