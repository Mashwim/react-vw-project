import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
import History from "../Components/History.js";
import Carousel from "../Components/Carousel.js";
import Formulario from "../Components/YourHistory.js";
import Footer from "../Components/Footer.js";
import useFirebase from "../hooks/useFirebase.jsx";

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
      <Formulario comments={comments} onChange={handleOnChange} />
      <Footer />
    </>
  );
}

export default Home;
