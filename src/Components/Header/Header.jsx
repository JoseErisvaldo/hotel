import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=" bg-blue-600 text-white py-4 px-4 md:px-6">
      <div className="w-full flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <span className="text-lg font-medium">Hotel</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Quartos
          </Link>
          <Link className="hover:underline" href="#">
            Facilidades
          </Link>
          <Link className="hover:underline" href="#">
            Galeria
          </Link>
          <Link className="hover:underline" href="#">
            Contato
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button></button>
          <button>Logar</button>
        </div>
      </div>
    </div>
  )
}
