import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen h-screen bg-violet-200 flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="w-9/12 flex flex-col gap-20 items-center justify-center h-full">
        <div className="relative w-60 h-60 lg:w-90 lg:h-90 mx-auto">
          <Image
            src="/imgs/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-cyan-500 lg:w-1/2 lg:order-first">
          <h2 className="text-3xl pb-6">About</h2>
          <h3 className="text-xl pb-6">
            Frontend Developer & Visual Communicator
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
