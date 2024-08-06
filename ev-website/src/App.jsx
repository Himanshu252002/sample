import Background from "./Components/Background/Background";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Page from "./Components/MainPage/Page";

function App() {
  let picData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give in to", text2: "Your Passions" },
  ];

  const [picCount, setPicCount] = useState(0);
  const [play, setPlay] = useState(false);

 
  useEffect(() => {
    setInterval(() => {
      setPicCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
      clearInterval()

    }, 3000);
  }, []);

  
 
  return (
    <>
      <Background play={play} picCount={picCount} />
      <Navbar />
      <Page
        setPlay={setPlay}
        picCount={picCount}
        setPicCount={setPicCount}
        picData={picData[picCount]}
        play={play}
      />
    </>
  );
}

export default App;
