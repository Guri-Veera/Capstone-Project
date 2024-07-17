import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center p-16'>
      <h1 className='text-6xl text-black font-bold p-5'>Welcome to our Camera Shop!</h1>
      <Link to='/shop' className='bg-[rgb(100,100,100)] p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700 shadow-lg  m-16 py-2 px-4'>Go Straight to Shopping</Link>
    </div>
  )
}

export default Home
