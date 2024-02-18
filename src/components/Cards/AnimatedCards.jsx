import React from "react";
import Photo1 from "../../assets/website/ali.jpeg";
import Photo2 from "../../assets/website/velas.jpg.webp";
import Photo3 from "../../assets/website/foto3.jpeg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Felicidad:",
    desc: "crea el ambiente para una cita romántica eligiendo velas con aromas de pachulí, naranja o Ylang Ylang. ¿Necesitas un impulso de coraje para enfrentarte a la persona que te gusta? Intente agregar una vela con aroma de clavo a la mezcla.",
  },
  {
    id: 2,
    img: Photo2,
    title: "Paz:",
    desc: "enciende una vela que combine hojas de violeta y limoncillo durante tu sesión de yoga, por ejemplo, o cuando meditas, para promover sentimientos de paz y tranquilidad."
  },
  {
    id: 3,
    img: Photo3,
    title: "Concentracion:",
    desc: "¿Tiene un gran proyecto que debe completarse? Enciende una vela de canela para promover el pensamiento creativo o elige productos con aroma a eucalipto para mejorar la concentración mental.",
  },
];
const AnimatedCard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center  text-2xl font-semibold tracking-wider  mb-10 mt-0 sm:mt-0">
       Conoce Diferentes Olores
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[400px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      <a className="text-secondary">{desc}</a>
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        Descubre Mas
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;