import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import axios from  'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL;


export default function projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL)
    .then(result => setData(result.data))
    .catch(err => console.log(err))

  }, []);

  return (
    <div className="mt-8">
      {data ? (
        <div className="flex flex-row justify-between">

          {/* works svg ***************************/}
          <BrowserView className=" hidden md:block">
          <img className="fixed w-80 mt-4" src="/assets/works.svg" alt="an_svg" />
          </BrowserView>

          <div></div>
          <div className="flex flex-col justify-between mt-10">

            { data.map((project) => (
              <div key={project.id}>
                {/* Displaying projects start ***************************/}
                <Link
                  to={`/projects/${project._id}/view/`}
                  className="flex flex-col pl-2 m-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:h-60 md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className=" object-cover w-full rounded-t-lg h-2/3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={project.Thumbnail_link}
                    alt={project.title}
                  />
                  <div className="font-sans flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h5>
                    <p className="mb-3 font-serif text-gray-700 dark:text-gray-400">
                      {project.description.slice(0, 350)}. . .
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
                      {" "}
                      Date: {project.date}
                    </p>
                  </div>
                </Link>
                {/* Displaying cards end*********************************/}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="m-24 text-3xl text-white">Loading...</p>
      )}
    </div>
  );
}
