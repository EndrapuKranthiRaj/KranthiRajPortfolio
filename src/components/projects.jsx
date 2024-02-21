import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get("https://portfolio-server-pearl.vercel.app/all_projects")
      .then(response => {
        setProjects(response.data); // Assuming your backend returns an array of projects
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-8">
      {loading ? (
        <p className="m-24 text-3xl text-white ml-[45%] mb-[90%]">Loading...</p>
      ) : (
        <div className="flex flex-row justify-between">
          <BrowserView className=" hidden md:block mt-1">
            <img className="fixed w-80 mt-4" src="/assets/works.svg" alt="an_svg" />
          </BrowserView>
          <div></div>
          <div className="flex flex-col justify-between mt-10">
            {projects.map((project) => (
              <div key={project._id}>
                <Link
                  to={`/projects/${project._id}/view/`}
                  className="flex flex-col pl-2 m-3 items-center border  rounded-lg shadow md:flex-row md:h-60 md:max-w-4xl border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <img
                    className=" object-cover w-full rounded-t-lg h-2/3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={project.Thumbnail_link}
                    alt={project.title}
                  />
                  <div className="font-sans flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h5>
                    <p className="mb-3 font-serif text-gray-400">
                      {project.description.slice(0, 350)}. . .
                    </p>
                    <p className="mb-3 font-serif text-blue-400">
                      read more
                    </p>
                    <p className="font-normal text-gray-400 mb-3">
                      {" "}
                      Date: {project.date}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
