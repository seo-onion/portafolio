import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/proyects/image.png";
import image2 from "../assets/proyects/image.png";
import image3 from "../assets/proyects/image.png";

const projects = [
  {
    descripcion: "Proyecto 1 que hace cualquier cosa",
    lenguajes: ["python", "php", "js"],
    img: image1,
  },
  {
    descripcion: "Proyecto 2 orientado a la visualización de datos",
    lenguajes: ["python", "R", "Tableau"],
    img: image2,
  },
  {
    descripcion: "Proyecto 3 enfocado en la creación de interfaces web",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    img: image3,
  },
];


interface ProyectsProps {
  width: number;
  height: number;
}

const Proyects = (props: ProyectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width, height } = props;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Botón Anterior */}
      <button
        style={{
          marginLeft: `${width * 0.6867}px`,
          marginTop: `${height * 0.4}px`,
          width: `${width * 0.074}px`,
          height: `${height * 0.04}px`,
        }}
        id="prev"
        className="bg-none"
        onClick={handlePrev}
      ></button>

      {/* Botón Siguiente */}
      <button
        style={{
          marginLeft: `${width * 0.801}px`,
          marginTop: `${height * 0.4}px`,
          width: `${width * 0.074}px`,
          height: `${height * 0.04}px`,
        }}
        id="next"
        className="bg-none"
        onClick={handleNext}
      ></button>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="relative w-3/4 h-[400px] flex justify-center items-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={projects[currentIndex].img}
                alt={projects[currentIndex].descripcion}
                className="w-full h-3/4 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center mt-4">
                <p className="text-lg text-[#eec399] font-bold">
                  {projects[currentIndex].descripcion}
                </p>
                <p className="text-sm text-white mt-2">
                  <strong>Lenguajes:</strong>{" "}
                  {projects[currentIndex].lenguajes.join(", ")}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Proyects;
