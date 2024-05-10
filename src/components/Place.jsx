import { Button } from '@mui/material'
import React from 'react'

function Place() {

  const places = [
    { id: 1, image: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Place Name", description: "des...." },
    { id: 2, image: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Place Name", description: "des...." },
    { id: 3, image: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Place Name", description: "des...." },
    { id: 4, image: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Place Name", description: "des...." },
  ];

  return (
    <div className='lg:px-36 lg:py-10 p-5'>
      <div className='py-5'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>Most famous places</h1>
        <p className='text-xl lg:text-2xl text-center p-2'>recommendation</p>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-8'>
        {
          places.map((place) => (
            <div key={place.id} className='bg-neutral-100 shadow-xl hover:shadow-neutral-500 hover:bg-white rounded'>
              <div>
                <img src={place.image} className='w-96 h-80 rounded' alt="place" />
              </div>

              <div className='flex flex-col items-center pt-3 pb-5 gap-3'>
                <h1 className='text-2xl lg:text-3xl font-bold'>{place.name}</h1>
                <p className='text-left font-normal text-base px-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum iure ratione et officia! Autem delectus consequatur assumenda corporis provident dolor, nemo, quisquam</p>
                <Button variant='contained' >Find out more...</Button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Place
