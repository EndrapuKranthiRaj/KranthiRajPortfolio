import React from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = import.meta.env.VITE_BASE_URL;


export default function Specific_project_edit() {
    const {id} = useParams();
  return (
    <div className='mt-16 ml-1'>
    <h1 className='text-2xl font-bold text-white'>Specific_project_edit {id}</h1>
  </div>
  )
}
