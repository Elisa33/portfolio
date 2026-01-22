import Image from "next/image";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div className="w-9/12 flex flex-col md:flex-row gap-20 items-center justify-center h-full mt-14 pt-14 md:mt-0">
        <div className="relative w-60 h-60 md:w-90 md:h-90 rounded-full overflow-hidden mx-auto">
          <Image
            src="/imgs/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-cyan-600 md:w-1/2 md:order-first flex flex-col gap-4">
          <h1 className="text-3xl pb-5">I&apos;m Elisa Lange</h1>
          <h2 className="text-xl">Frontend Developer & Visual Communicator</h2>
          <p className="text-sm text-gray-800 font-light">
            I work at the intersection of design and development, creating
            thoughtful, user-centered digital experiences. With a background in
            visual communication and graphic design, I approach frontend
            development with a strong eye for detail, structure, and clarity.
          </p>
          <div className="flex gap-4 pt-5">
            <div className="flex items-center gap-1">
              <FaTelegramPlane />
              <span>@elisa_lange</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope />
              <span>elisablange.tdf@gmail.com</span>
            </div>
          </div>
          <button className="mt-5 h-10 w-40 px-4 rounded-lg text-sky-500 shadow-[var(--little-shadow)] hover:shadow-[var(--little-down-shadow)]">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
