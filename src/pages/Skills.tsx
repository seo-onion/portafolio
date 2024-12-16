const skillsData = {
  technical: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PostgreSQL",
    "Springboot",
    "GIT",
    "GitHub",
    "Python",
    "C++",
    "Tailwind",
  ],
  social: [
    "Comunicación efectiva",
    "Trabajo en equipo y liderazgo",
    "Resolución de problemas",
    "Adaptabilidad",
    "Capacidad para recibir y dar feedback",
    "Curiosidad y aprendizaje continuo",
    "Iniciativa y proactividad",
  ],
  education: [
    "Estudiante graduado del IB",
    "Estudiante de Ciencias de la Computación en la Universidad de Ingeniería y Tecnología",
  ],
};

const Skills = () => {
  return (
    <>
      <div className=" w-full h-full p-[40px] flex ">
        <div className="flex flex-col items-center mx-4 ">
          <h2 className="text-[#eec399] font-bold text-lg mb-4 text-center">
            HABILIDADES TÉCNICAS
          </h2>
          {skillsData.technical.map((skill, index) => (
            <div
              key={index}
              className="bg-[#3a3a58] text-white px-4 py-2 mb-2 rounded-md text-sm text-center shadow-md w-full"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-[#eec399] font-bold text-lg mb-4 text-center">
            HABILIDADES SOCIALES
          </h2>
          {skillsData.social.map((skill, index) => (
            <div
              key={index}
              className=" bg-[#3a3a58] text-white px-4 py-2 mb-2 rounded-md text-sm text-center shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mx-4">
          <h2 className="text-[#eec399] font-bold text-lg mb-4 text-center">
            NIVEL EDUCATIVO
          </h2>
          {skillsData.education.map((education, index) => (
            <div
              key={index}
              className="bg-[#3a3a58] text-white px-4 py-2 mb-2 rounded-md text-sm text-center shadow-md"
            >
              {education}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
