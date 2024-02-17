import React,{useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function specific_project_view() {
    const [project, setProject] = useState(null);
    const {id} = useParams()

    useEffect(() => {
      axios.get(`https://portfolio-server-pearl.vercel.app/projects/${id}`)
      .then(result => setProject(result.data))
      .catch(err => console.log(err))
  
    }, []);
  

  return (
    <div className='mt-16 ml-1'>
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
  
  {project ? 
  <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
    <img
      className="mb-3  rounded-3xl shadow-lg mx-auto"
      src={project.Thumbnail_link}
      alt="my_project_pic"
    />
    <h1 className="text-lg text-gray-700"> {project.title} </h1>
    <h3 className="text-sm text-gray-400 "> ~ {project.date} </h3>
    <p className="text-xs text-gray-400 my-6">
      {" "}
      {project.description}{" "}
    </p>
    <Link to="/contact" className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase ">
      Contact Me
    </Link>
  </div>
  : "Loading"
}


</div>

  </div>
  )
}
