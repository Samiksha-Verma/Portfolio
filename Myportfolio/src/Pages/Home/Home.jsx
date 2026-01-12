import photo from "../../assets/photos/photo3.png";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <section
      className="
        bg-black relative
      "
    >
      <div className="min-h-screen
        flex flex-col lg:flex-row
        items-center
        justify-center lg:justify-between
        gap-16
        px-6 md:px-16 lg:px-24">
      {/* LEFT SIDE */}
      <div className="text-white w-full lg:w-1/2 text-center lg:text-left ml-15 ">
        <h1 className="text-4xl font-bold">Hi, I'm</h1>

        <h1 className="text-6xl font-bold mt-2">
          Samiksha Verma
        </h1>

        <h2 className="text-2xl mt-4">
          I am a{" "}
          <span className="text-[#8245ec] text-3xl font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "React Developer",
                "MERN Developer",
              ]}
              loop
              cursor
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-gray-300 leading-relaxed">
          I am a full-stack developer with over 1 year of experience in building
          scalable web applications. Skilled in both front-end and back-end
          development. Specialized in MERN stack and modern technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
          <a
            href="/Samiksha_Verma_Resume.pdf"
            download
            className="border border-white px-6 py-2 rounded-full flex  gap-2 hover:bg-white hover:text-black transition"
          >
            DOWNLOAD RESUME
            <FaArrowCircleDown className="mt-1 ml-2"/>
          </a>

          <a
            href="mailto:samiksha3ks@gmail.com?subject=Contact from Portfolio"
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            CONTACT ME
          </a>
        </div>
      </div>
        
      {/* RIGHT SIDE (IMAGE) */}
      {/* Image only for desktop */}
      <div className="hidden lg:flex w-1/2 justify-center">
        <img
          src={photo}
          alt="hero"
          className="w-[420px] h-[420px] object-contain"
        />
      </div>
     </div>
     <div className=" absolute bottom-20 left-1/2 translate-x-1/2">
        <FaAngleDown className="text-white anumated animate-bounce font-bold text-2xl "/>
     </div>
     
    </section>
     
    </>
  );
};

export default Hero;
