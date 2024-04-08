import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="topcard">
            <p>Hi book your vehicle here</p>
            <p>Some more </p>
        </div>
        <div className="userform">
            <div className="info border-2 border-spacing-1">
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Require</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Place</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Timing</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Return timing</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>No of persons</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Purpose</p>
                <p className='border-2 border-sky-200 roundedx p-4 m-3 w-50'>Type of vehicle needed</p>


            </div>
        </div>
    </div>
  )
}

export default Sidebar