Header.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import { login } from '../store/authSlice'

function Header() {

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login(userData))
        }
      } catch (error) {
        console.log("Header.jsx :: no user found")
      }
    }

    checkUser()
  }, [])

  const loggedIn = useSelector(state => state.auth.active)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await authService.logout()
      dispatch(logout({}))
      // console.log("Logout Successful")
    } catch (error) {
      console.log("Header.jsx :: logout :: error :: ", error)
    }
  }

  return (
    <nav className='text-white bg-black p-5'>
      <ul className='flex text-black p-2'>
        <li className='mx-auto my-auto'><Link to='/' className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Home</Link><Link to='/shop' className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Shop</Link>{loggedIn ? (<Link to='/cart' className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Go to Cart</Link>) : ''}</li>
        <li className=' my-auto'>
          <div>
            {
            loggedIn ? (<button onClick={handleLogout} className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Logout</button>) : (<><Link to='/login' className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Login</Link>
              <Link to='/register' className='bg-yellow-100 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-200'>Register</Link></>)
            }
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header