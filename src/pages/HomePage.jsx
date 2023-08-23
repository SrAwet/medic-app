import { CarouselClinic } from "../components/CarouselClinic"
import { Navbar } from "../components/Navbar"
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Navbar />
        
      <div className="flex items-center justify-center h-screen -translate-y-10">
        <div className="container mx-auto px-4 md:flex">
          <div className="md:w-2/3 p-8 -translate-y-6">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to our online Clinic!</h1>
            <p className="text-gray-800 text-xl ">
                Here you can schedule and manage your medical appointments
                conveniently and efficiently. Our team of professionals is 
                ready to provide you with the best medical care.
            </p>
            <br />
            <h1 className="text-4xl font-bold mb-4">What can you do?</h1>
            <p className="text-gray-800 text-xl">
              With our online clinic platform, you can easily manage your
              medical appointments and access your patient information. 
              Whether you want to view your medical history or schedule 
              a new appointment, our platform has you covered. 
            </p>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/patients" className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center">
                    View Patients
                  </Link>
                  <Link to="/create" className="block bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md text-center">
                    Add New Patient
                  </Link>
              </div>
          </div>
          <div className="md:w-2/3">
            <CarouselClinic />
          </div>
        </div>
      </div>
    </>
  )
}

{/* <Link
              to="/create"
              className="mt-6 text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600"
            >
              Schedule an appointment
            </Link> */}
            
export default HomePage