import { useState } from "react";
import "./App.css";
import MyPicture from "./assets/My Picture.jpg";
import { contact, educationdData } from "./data";
function App() {
  const [about, setAbout] = useState(true);

  return (
    <div className="max-w-[1080px] w-full mx-auto bg-gray-50 flex flex-wrap md:flex-nowrap gap-4 px-4 mt-3">
      <div className="bg-blue-300 w-full md:w-[30rem] p-4 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <div className="style">
            <img
              className="w-40 h-[11rem] rounded-[50%]"
              src={MyPicture}
              alt="MY PICTURE"
            />
          </div>
          <h2 className="text-xl font-rowdies mt-2">Youran SENG</h2>
          <p className="text-sm font-medium">Web developer Intern</p>
        </div>
        {/*Contact*/}
        <div className="mt-4 w-full">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-center font-rowdies text-2xl text-white">
              Contact me
            </h2>
          </div>
          {/* separator line */}
          <div className="border-t-2 border-white w-full mt-2"></div>

          <div className="flex flex-col gap-1 my-2 ml-4">
            {contact.map((render) => (
              <a
                href={render?.id === 3 ? "https://t.me/seng_youran" : ""}
                className="flex items-center gap-2 mt-2"
                key={render?.id}
              >
                <i className={`${render?.icon} text-xl`}></i>
                <div className="flex flex-col">
                  <h2 className="text-[17px] font-medium">{render?.name}</h2>
                  <p className="text-sm text-gray-700">{render?.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Education*/}
        <div className="mt-6 w-full">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-center font-rowdies text-2xl text-white">
              Education
            </h2>
          </div>
          {/* separator line */}
          <div className="border-t-2 border-white w-full mt-2"></div>
          <div className="ml-4">
            {educationdData.map((render) => (
              <div className="flex flex-col my-4">
                <h2 className="text-[14px] font-bold">
                  {render?.school.toUpperCase()}
                </h2>
                <h2 className="text-sm text-gray-700">
                  {render?.txtY} {render?.year}
                </h2>
                <h2 className="text-sm text-gray-700"> {render?.major}</h2>
                <h2 className="text-sm text-gray-700">
                  {render?.txtT} {render?.teacher}
                </h2>
              </div>
            ))}
          </div>
        </div>
        {/* Language*/}
        <div className="mt-6 w-full">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-center font-rowdies text-2xl text-white">
              Language
            </h2>
          </div>
          {/* separator line */}
          <div className="border-t-2 border-white w-full mt-2"></div>
          <ul className="ml-8 my-4 list-disc">
            <li>Khmer</li>
            <li>English</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-4">
        <div className="flex flex-col">
          <div
            className="flex justify-between items-center mr-4 cursor-pointer"
            onClick={() => setAbout(!about)}
          >
            <div className="flex items-center gap-1">
              <h2 className="font-rowdies text-2xl text-blue-500 ">About me</h2>
            </div>
            <i
              className={`fa-solid fa-chevron-down transition-all duration-700 ease-in-out 
              ${about ? "transform -rotate-0" : "rotate-[180deg]"}`}
            ></i>
          </div>
          <div className="border w-full"></div>
          <div
            className={`overflow-hidden transition-[max-height] duration-900 ease-in-out my-4 ${
              about ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="mt-1 text-[16px]">
              Hello! My name is <span className="font-bold">SENG Youran</span> ,
              and I’m an aspiring web developer with a strong passion for
              building websites and learning new technologies. I have hands-on
              experience creating personal projects using{" "}
              <span className="text-red-500 font-bold">
                HTML, CSS, and JavaScript
              </span>{" "}
              , and I’m currently learning{" "}
              <span className="text-red-500 font-bold">
                React.js and Tailwind CSS
              </span>{" "}
              to further improve my frontend development skills. In addition,
              I’ve recently started learning
              <span className="text-red-500 font-bold"> PHP and MySQL</span> to
              build a solid foundation in backend development and working with
              databases. While I’m still at the beginning of my journey with
              these technologies, I’m eager to apply what I learn through
              real-world practice and hands-on experience. I’m highly motivated,
              open to feedback, and committed to growing as a developer. I’m
              currently looking for an internship opportunity where I can
              contribute, collaborate with a team, and continue developing both
              my technical and problem-solving skills in a professional
              environment.
            </h2>
          </div>
        </div>

        {/*Projects*/}
        <div className="flex flex-col relative">
          <div className="">
            <h2 className="font-rowdies text-2xl text-blue-500">
              Small Projects
            </h2>
            <div className="border w-full"></div>
            <div className="my-4">
              <div className="mt-4">
                <ul className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-[50%] border-2 bg-white -ml-[5px]"></div>
                  <li>
                    <h2 className="text-[15px] font-medium">MY FASTMART</h2>
                  </li>
                </ul>
                <h2 className="ml-6 text-sm">Built using React.js and CSS,</h2>
                <a
                  href="https://myfastmart.vercel.app/"
                  className="text-red-600 text-xs font-bold ml-6"
                >
                  Check me
                </a>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-2">
                  <div className="relative z-10 w-3 h-3 rounded-[50%] border-2 bg-white -ml-[5px]"></div>
                  <li>
                    <h2 className="text-[15px] font-medium">
                      PHKA BLUSH CLONE
                    </h2>
                  </li>
                </ul>
                <h2 className="ml-6 text-sm">
                  Built using TAILWINDCSS, and React.js
                </h2>
                <a
                  href="https://phka-plush.vercel.app/"
                  className="text-red-600 text-xs font-bold ml-6"
                >
                  Check me
                </a>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-2">
                  <div className="relative z-10 w-3 h-3 rounded-[50%] border-2 bg-white -ml-[5px]"></div>
                  <li>
                    <h2 className="text-[15px] font-medium">
                      COOLORS.CO CLONE
                    </h2>
                  </li>
                </ul>
                <h2 className="ml-6 text-sm">
                  Built using HTML, TAILWINDCSS, and JAVASCRIPT
                </h2>
                <a
                  href="https://clone-coolors.vercel.app/"
                  className="text-red-600 text-xs font-bold ml-6"
                >
                  Check me
                </a>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-2">
                  <div className="relative z-10 w-3 h-3 rounded-[50%] border-2 bg-white -ml-[5px]"></div>
                  <li>
                    <h2 className="text-[15px] font-medium">SONIC 4 MOVIE</h2>
                  </li>
                </ul>
                <h2 className="ml-6 text-sm">
                  Built using HTML, CSS, and JAVASCRIPT
                </h2>
                <h2 className="text-red-600 text-xs font-bold ml-6 mt-1.5">
                  Still in development – not hosted yet.
                </h2>
              </div>
            </div>
          </div>
          <div className="border w-[1px] h-73 bg-black absolute left-0 top-16.5"></div>
        </div>
        {/*TECHNICAL SKILL*/}
        <div className="flex flex-col relative">
          <div className="">
            <h2 className="font-rowdies text-2xl text-blue-500">
              TECHNICAL SKILLS
            </h2>
            <div className="border w-full"></div>
            <div className="my-4 ml-10">
              <ul className="list-disc">
                <li className="text-sm font-medium">HTML</li>
                <li className="text-sm font-medium">CSS, TAILWINDCSS</li>
                <li className="text-sm font-medium">JAVASCRIPT, React.js</li>
                <li className="text-sm font-medium">PHP</li>
                <li className="text-sm font-medium">Database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
