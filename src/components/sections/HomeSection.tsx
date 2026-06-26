import Image from "next/image";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen lg:py-20 text-sky-500 flex flex-col md:flex-row items-center justify-center bg-linear-to-b from-sky-100 via-sky-100 via-75% to-emerald-100"
    >
      <div className="w-9/12 flex flex-col md:flex-row gap-10 lgm:gap-20 items-center justify-center h-full mt-14 py-10 md:mt-0">
        <div className="relative w-60 h-60 md:w-90 md:h-90 rounded-full overflow-hidden mx-auto">
          <Image
            src="/img/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sky-500 md:w-1/2 md:order-first flex flex-col gap-4">
          <h1 className="text-4xl pb-5">I&apos;m Elisa Lange</h1>
          <h2 className="text-2xl">Frontend Developer & Visual Communicator</h2>
          <p className="text-sky-900 font-light">
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
          <button className="mt-5 h-10 w-40 px-4 rounded-lg text-sky-500 btn-primary shadow-(--little-shadow) hover:shadow-(--down-shadow)">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
