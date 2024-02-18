import React from "react";
import HeroVela from "../../assets/herovela.png";
import HeroBg from "../../assets/heroBg.png";
const BgStyle ={
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  with: "100%",
  height: "100%"
}
const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="min-h-[550px] sm:min-h-[600px] relative z-[-1] flex justify-center items-center mb-2">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-7xl"
              >
                Aromatiza tu {" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-transparent bg-gradient-to-b from-secondary to-secondary/90 font-cursive"
                >
                  Hogar y Espiritu
                </span>{" "}
                y Relajate
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
               
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={HeroVela}
                alt="biryani img"
                className="w-[300px] sm:w-[710px] sm:scale-120 mx-auto shadow-xs"
              />
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
