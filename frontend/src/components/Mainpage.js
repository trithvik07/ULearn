import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Mainpage = () => {
  const [details, setdetails] = useState()
  const [videos,setvideos] = useState()
  const getnofusers = async()=>{
      const {data} = await axios.get('https://minip-seven.vercel.app/api/auth/getallusers');
      setdetails(data)
  }
  const getVideos = async()=>{
    const {data} = await axios.get('https://minip-seven.vercel.app/api/auth/getallvideos')
    setvideos(data)
  }
  useEffect(() => {
    getnofusers()
    getVideos()
  }, [])
  console.log(videos);
  return (
    
    <>
        <div >
            
          <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                  <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We bring out the genius in you</h1>
                  <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{videos?.noOfVideos} courses</p>
                  <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{details?.users} students registered</p>
                  <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{details?.teachers} teacher/s registered</p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                      <Link to="/createuser" className=" inline-flex justify-center items-center py-4 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                          Get started
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  </div>
              </div>
          </section>
        </div>
    </>
  )
}

export default Mainpage