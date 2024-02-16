import React from 'react'
import { useParams } from 'react-router-dom'

export default function Specific_project_delete() {
    const {id} = useParams();
  return (
    <div className='mt-16 ml-1'>
    <h1 className='text-2xl font-bold text-white'>Specific_project_delete {id}</h1>
  </div>
  )
}
