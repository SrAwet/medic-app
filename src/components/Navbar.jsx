import { Link } from 'react-router-dom'

export const Navbar = () => {
return (
    <nav className="bg-blue-500">
        <div className="flex justify-between items-center px-4 py-6">
            <div className="flex items-center">
                <img
                    src="/src/imgs/logo.png"
                    alt="Logo"
                    className="w-8 h-8 mr-2"
                />
                <h1 className="text-white font-bold text-xl tracking-wide">Clinic</h1>
            </div>
        <ul className="flex">
            <li>
                <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-white hover:text-gray-400 px-4 py-2">About</Link>
            </li>
            <li>
                <Link to="/patients" className="text-white hover:text-gray-400 px-4 py-2">Patients</Link>
            </li>
            <li>
                <Link to="/create" className="text-white hover:text-gray-400 px-4 py-2">New</Link>
            </li>
        </ul>
        </div>
    </nav>
)
}
