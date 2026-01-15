import Image from "next/image";

const Home = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-sky-200 flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="w-9/12 flex flex-col lg:flex-row gap-20 items-center justify-center h-full">
        <div className="relative w-60 h-60 lg:w-90 lg:h-90 rounded-full overflow-hidden mx-auto">
          <Image
            src="/imgs/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-cyan-500 lg:w-1/2 lg:order-first">
          <h1 className="text-3xl pb-6">I&apos;m Elisa</h1>
          <h2 className="text-xl pb-6">
            Frontend Developer & Visual Communicator
          </h2>
          <p className="text-sm text-gray-800">
            I work at the intersection of design and development, creating
            thoughtful, user-centered digital experiences. With a background in
            visual communication and graphic design, I approach frontend
            development with a strong eye for detail, structure, and clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
