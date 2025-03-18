import React from 'react'
import leaf from '../assets/leaf-solid.svg'


function Header() {
  const title = 'PlantHouse'
  return (
    <div className='flex items-center justify-center space-x-10'>
    <img src={leaf} alt="icône de l'app" className='w-14' />
    <h1 className='text-3xl font-bold'>{title.toUpperCase()}</h1>
    </div>
  )
}

export default Header