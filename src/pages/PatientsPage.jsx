import React, {useEffect, useState} from 'react'
import { Navbar } from '../components/Navbar'

const PatientsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllPatients = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/patients');
        const patients = await response.json();
        setData(patients);
      } catch (error) {
        console.log("Error al obtener pacientes desde la API:", error);
      }
    };

    getAllPatients(); // Llamamos a la función para obtener los pacientes al montar el componente
  }, []); // El segundo argumento es un arreglo vacío, esto asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto md:max-w-2xl translate-y-6 ">
      {data.map(patient => (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-4" key={patient.id}>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-sky-500 font-semibold">Patient</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{patient.name}</a>
                <p className="mt-2 text-gray-800">Patient Description</p>
                <p className='italic text-gray-600'>Age: {patient.age}</p>
                <p className='italic text-gray-600'>Affiliation number: {patient.num_afi}</p>
                <p className='italic text-gray-600'>Address: {patient.address}</p>
            </div>
            </div>
      ))}
    </div>
    </>
  )
}

export default PatientsPage