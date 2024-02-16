import React, { useState, useEffect } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export default function Admin_view() {

    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch the JSON file when the component mounts
      fetch("/allprojects.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className='mt-16 mb-96'>
        {data?(
      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project title
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
            {data.map((project)=>(
            <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >{project.title}
              </th>
            <td><button className='bg-sky-800 rounded-md ml-2 py-1 px-4'><MdEdit color='orange' size={25}/></button></td>
            <td><button className='bg-sky-800 rounded-md ml-4 py-1 px-4'><MdDelete color='rgb(239 68 68 / var(--tw-bg-opacity))' size={25}/></button></td>
          </tr>
        ))}
        </tbody>
        </table>
        </div>
        )
        : 'Loding'}
        </div>
        )
}
