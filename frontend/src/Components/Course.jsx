import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
import { Link } from 'react-router'
function Course() {
  const [card,setcard]=useState([]);
  useEffect(()=>{
    const getcard=async ()=>{
      try {
       const res=await axios.get("http://localhost:4001/Card")
       setcard(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getcard();
  },[])
  return (
    <>
         <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-gray-900 text-gray-100 py-12 min-h-screen">
        {/* Header Section */}
      <div className='mt-10 items-center justify-center text-center'>
        <h1 className='font-bold text-2xl md:text-4xl'>Thrilled to see you! Explore journeys of people who faced challenges and grew stronger:</h1>
          <p className='mt-10 text-1xl'>Dive deeper into exclusive stories of resilience, innovation, and transformation. These in-depth narratives reveal the real struggles, lessons, and breakthroughs of individuals who turned adversity into success — available only in our premium collection.</p>
          <Link to="/"><button className='mt-6 bg-gray-800 text-white px-4 py-2 rounded-md'>Back</button></Link>
      </div>
    <div>
    <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {card.map((item) => (
      <Card key={item.number} {...item} />
    ))}
  </div>
    </div>
    </div>
    </>
  )
}

export default Course
