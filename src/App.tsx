import { Routes, Route } from "react-router-dom";
import Me from "./pages/Me";
import Proyects from "./pages/Proyects";
import Skills from "./pages/Skills";
import Background from "./assets/background/background.png";
import "./styles/BackgroundStyle.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  let navigate = useNavigate();

  const [number, setNumber] = useState(0);

  const pages=["/me", "/proyects", "/skills"];


  const changePage = ()=> {
    console.log("hola")
    navigate(pages[number])
    if(number > 1){
      setNumber(0)
    } else {
      setNumber(number+1)
    }

  }

  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  if (isPortrait) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Por favor, gire su dispositivo</h1>
        <p>Este contenido se ve mejor en orientación horizontal.</p>
      </div>
    );
  }

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget as HTMLImageElement;
    setImageSize({ width: img.offsetWidth, height: img.offsetHeight });
  };
  console.log(imageSize.width);
  console.log(imageSize.height);
  return (
    <div>
      <div className="background-container">
        <img
          src={Background}
          alt="background"
          className="background-img"
          onLoad={handleImageLoad}
        />
        <button
          style={{
            marginLeft: `${imageSize.width * 0.72}px`,
            marginBottom: `${imageSize.height * 0.538}px`,
            width: `${imageSize.width * 0.143}px`,
            height: `${imageSize.height * 0.19}px`,
          }}
          id="nav"
          className="bg-none py-2 px-4"
          onClick={changePage}
        ></button>
      </div>

      <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-background_tv">
        <div
          className="absolute"
          style={{
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        >
          <div
            style={{
              width: `${imageSize.width * 0.628}px`,
              height: `${imageSize.height * 0.667}px`,
              marginLeft: `${imageSize.width * 0.072}px`,
              marginTop: `${imageSize.width * 0.125}px`,
            }}
            className="bg-background text-soft_primary_color"
          >
            <Routes>
              <Route path="/me" element={<Me />} />
              <Route path="/proyects" element={<Proyects width={imageSize.width} height={imageSize.height} />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
