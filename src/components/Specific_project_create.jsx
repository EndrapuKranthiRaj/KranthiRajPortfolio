import React,{useState,useEffect} from "react";
import axios from  'axios'
import {useParams} from "react-router-dom";



export default function Specific_project_create() {
  const [displayForm, setDisplayForm] = useState();
  const {str1} = useParams()

  useEffect(() => {

    if (String(str1).includes("vebroyba")) {
      setDisplayForm(true);
    }
  }, [str1]);



  const [id,setId] = useState();
  const [title,setTitle] = useState();
  const [Thumbnail_link,setThumbnail_link] = useState();
  const [description,setDescription] = useState();
  const [date,setDate] = useState();
  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://kranthi-raj-portfolio.vercel.app/projects/newproject",{id,title,Thumbnail_link,description,date})
    .then(result=>{
      console.log(result)
      location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="m-20">
      <div className="text-3xl font-bold text-white m-6 flex items-center justify-center">Create and Push new project: </div>
      { displayForm?
      <form className="max-w-sm mx-auto" onSubmit={Submit} id="ppp">
        <div className="mb-5">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project ID
          </label>
          <input
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1 or 2 or 3..."
            required=""
            onChange={(e)=>setId(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Title
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Drive thumbnail Link
          </label>
          <input
            type="text"
            id="t1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onChange={(e)=>setThumbnail_link(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            type="text"
            id="t2"
            className="resize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Date of completion
          </label>
          <input
            type="text"
            id="t3"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onChange={(e)=>setDate(e.target.value)}
          />
        </div>





        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>:"Caught you Red Handed" }
    </div>
  );

}
