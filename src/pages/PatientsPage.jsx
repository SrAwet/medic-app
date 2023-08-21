import React from 'react'
import { Navbar } from '../components/Navbar'

const PatientsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto rounded-xl shadow-xl overflow-hidden md:max-w-2xl translate-y-6 ">
            <div className="md:flex ">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-sky-500 font-semibold">Patient</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Patient Name</a>
                <p className="mt-2 text-gray-500">Patient Description</p>
            </div>
            </div>
    </div>
    </>
  )
}

export default PatientsPage