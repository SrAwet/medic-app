import { CarouselClinic } from "../components/CarouselClinic"
import { Navbar } from "../components/Navbar"
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <Navbar />
        
      <div className="flex items-center justify-center h-screen -translate-y-8">
        <div className="container mx-auto px-4 md:flex">
          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to our Clinic!</h1>
            <p className="text-gray-700 text-xl">
              At our clinic, we are committed to providing you with the best medical care possible.
              Our team of professionals is here to take care of your health and well-being.
            </p>
            <br />
            <Link
              to="/create"
              className="mt-6 text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600"
            >
              Schedule an appointment
            </Link>
          </div>
          <div className="md:w-2/3">
            <CarouselClinic />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage