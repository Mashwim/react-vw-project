import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
import History from "../Components/History.js";
import Carousel from "../Components/Carousel.js";
import Formulario from "../Components/YourHistory.js";
import Footer from "../Components/Footer.js";
import useFirebase from "../hooks/useFirebase.jsx";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { fetchPosts } = useFirebase();

  const [comments, setComments] = useState([]);

  const handleOnChange = () =>
    fetchPosts().then((posts) => {
      setComments(posts);
    });

  useEffect(() => {
    handleOnChange()
  }, []);

  return (
    <>
      <Navbar />
      <History />
      <Carousel />
      <Formulario
      comments={comments}
      onChange={handleOnChange} />
      <Footer />
      <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </>
  );
}

export default Home;
