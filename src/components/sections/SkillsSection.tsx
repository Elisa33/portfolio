import { LuPencil, LuStar, LuCodeXml } from "react-icons/lu";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-screen flex flex-col gap-14 items-center justify-center"
    >
      <h2 className="text-cyan-500 text-2xl">Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-[var(--little-down-shadow)] p-5 rounded-sm">
          <div className="flex items-center gap-5">
            <LuCodeXml className="text-cyan-500" />
            <h3 className="font-light text-gray-600 text-sm">Developer</h3>
          </div>
          <ul className="pt-6 uppercase text-cyan-500 flex flex-col gap-3 items-center  justify-center text-sm">
            <li>
              <h3>typescript</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>react/nextjs</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>tailwind/styled components</h3>
            </li>
          </ul>
        </div>
        <div className="shadow-[var(--little-down-shadow)] p-5 rounded-sm">
          <div className="flex items-center gap-5">
            <LuPencil className="text-cyan-500" />
            <h3 className="font-light text-gray-600 text-sm">Designer</h3>
          </div>
          <ul className="pt-6 uppercase text-cyan-500 flex flex-col gap-3 items-center  justify-center text-sm">
            <li>
              <h3>figma</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>indesign</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>photoshop/illustrator</h3>
            </li>
          </ul>
        </div>
        <div className="shadow-[var(--little-down-shadow)] p-5 rounded-sm">
          <div className="flex items-center gap-5">
            <LuStar className="text-cyan-500" />
            <h2 className="font-light text-gray-600 text-sm">Others</h2>
          </div>
          <ul className="pt-6 uppercase text-cyan-500 flex flex-col gap-3 items-center  justify-center text-sm">
            <li>
              <h3>english b1</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>french a2</h3>
            </li>
            <li className="text-xs text-gray-500">+</li>
            <li>
              <h3>git/github</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
