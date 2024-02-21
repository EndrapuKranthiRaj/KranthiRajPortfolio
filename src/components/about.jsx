import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from "react-device-detect";

export default function about() {
  return (
  <div  className="flex justify-center items-center my-16 mt-24">
    <div className="relative flex bg-clip-border rounded-xl bg-[#111827] text-gray-700 shadow-md  w-5/6 flex-row">
  <BrowserView className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-[#111827] rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src="/assets/mypic.jpg"
      alt="card-image"
      className="object-cover w-full h-full"
      />
  </BrowserView>

  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-400 uppercase">
      About me
    </h6>
    <MobileView>
    <img
      src="/assets/mypic.jpg"
      alt="card-image"
      className="object-cover h-[15rem] w-96 rounded-md"
      />
    </MobileView>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
    "Passionate Technologist | Innovator & Problem Solver"
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
    Hello, I'm Kranthi Raj Endrapu, a highly motivated technologist based in Hyderabad, Telangana, India. With a Bachelor of Technology degree from Gokaraju Rangaraju Institute of Engineering and Technology, where I maintained an exceptional CGPA of 9.07, I've earned recognition for my academic excellence, securing a full scholarship for four years.
    <br />
    <br />
    My passion lies in leveraging technology to solve real-world problems and drive innovation. I've led numerous projects that showcase my proficiency in coding, design, and problem-solving. Noteworthy among these is the development of a Smart Locker system incorporating fingerprint recognition and automated photo upload capabilities, and a groundbreaking Women and Child Safety Application that ensures security without relying on internet connectivity.
    <br />
    My technical toolkit includes expertise in languages like C++, Python, and frameworks such as Flask. I excel in both frontend and backend development, crafting intuitive user interfaces using HTML5, CSS3, JavaScript, Tailwind, ReactJS ,MongoDB, Express.js and Node.js (MERN) . Data-driven insights inform my decision-making process, allowing me to create effective solutions tailored to specific needs.
    <br />
    <br />
    In the professional arena, I've contributed as a Full-Stack Developer at Uma's Authentic Kitchen, where my efforts led to a notable 35% increase in user engagement. Currently, I serve as the Technical Head at GRIET's Advanced Academic Center, guiding a team in executing impactful projects and fostering innovation.
    <br />
    Beyond my technical skills, I actively engage in extracurricular activities such as web development, application development, and marketing, demonstrating my versatility and collaborative spirit.
    </p>
      <Link to="/contact" className="inline-block">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-blue-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-800 bg-gray-900"
        type="button"
      >
        Conatct ME
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
          </Link>
  </div>
</div>

  </div>  
  )
}
