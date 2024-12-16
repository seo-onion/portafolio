const Me = () => {
  return (
    <>
      <div
        className="w-full h-full 
      [@media_(min-height:360px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:p-[10px]

      [@media_(min-height:776px)_and_(max-height:876px)_and_(min-width:1200px)_and_(max-width:1280px)]:p-[20px]
      
      [@media_(min-height:900px)_and_(max-height:1200px)_and_(min-width:1366px)_and_(max-width:1920px)]:p-[40px]
      "
      >
        <h1
          className="font-extrabold text-dark_primary_color

                [@media_(min-height:360px)_and_(max-height:361px)]:text-[.8rem]


                [@media_(min-height:394px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:text-[.8rem]
                [@media_(min-height:394px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:leading-[2]


                [@media_(min-height:776px)_and_(max-height:876px)_and_(min-width:1200px)_and_(max-width:1280px)]:text-[2.4rem]
                

        "
        >
          Hola, soy Sebastián
          {/* <li className="cursor">█</li> */}
        </h1>
        <p
          className="

          [@media_(min-height:360px)_and_(max-height:361px)]:text-[.5rem]
          [@media_(min-height:360px)_and_(max-height:361px)]:mb-[6px]


        [@media_(min-height:394px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:text-[.7rem]
        [@media_(min-height:394px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:leading-[1.1]

        [@media_(min-height:776px)_and_(max-height:876px)_and_(min-width:1200px)_and_(max-width:1280px)]:leading-[1.6]
        "
        >
          Soy estudiante de la carrera de{" "}
          <strong>Ciencias de la Computación</strong> en la{" "}
          <strong>UTEC</strong> y un apasionado por el{" "}
          <strong>desarrollo web</strong>. A lo largo de mi formación, he
          adquirido conocimientos en tecnologías de <strong>front-end</strong>,{" "}
          <strong>back-end</strong> y <strong>bases de datos</strong>, lo que me
          permite abordar proyectos con una perspectiva integral. Siempre estoy
          buscando aprender, mejorar mis habilidades y enfrentar nuevos desafíos
          tecnológicos.
        </p>
        <p
          className="font-extrabold text-dark_primary_color 
          [@media_(min-height:360px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:text-[.65rem]
          [@media_(min-height:360px)_and_(max-height:432px)_and_(min-width:734px)_and_(max-width:915px)]:leading-[1.1]"
        >
          ¡Bienvenido a mi portafolio!
        </p>
      </div>
    </>
  );
};

export default Me;
