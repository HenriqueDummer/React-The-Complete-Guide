import React from 'react'

const NoProjectSelectPage = ({setIsAddingProject}) => {
  return (
    <section className='flex flex-col justify-center mt-[12rem] items-center'>
        <img className='w-36' src="https://www.saudeocupacional.org/v2/wp-content/uploads/2015/09/Prancheta-253x288.png" alt="" />
        <h2 className='text-3xl font-bold'>No Project Selected</h2>
        <p className='text-lg font-semibold my-6'>Selecte a project or get started with a new one</p>
        <button onClick={() => setIsAddingProject(true)} className='bg-stone-800 font-semibold text-white px-6 py-3 rounded-lg'>Create new project</button>
    </section>
  )
}

export default NoProjectSelectPage