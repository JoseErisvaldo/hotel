import { FaBath, FaDumbbell, FaWallet, FaWifi } from 'react-icons/fa'
import { GiMountains } from 'react-icons/gi'
import { IoIosFlame } from 'react-icons/io'
import { MdLocalParking } from 'react-icons/md'
import { RiRestaurantLine } from 'react-icons/ri'

export default function ServicesHotel() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Explore a Tranquilidade: Wifi, Estacionamento Grátis, Spa,
              Academia e Mais!
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Aproveite nossa variedade de comodidades premium durante sua
              estadia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <FaWifi className="w-6 h-6 text-primary" />
              <span>Wifi grátis</span>
            </div>
            <div className="flex items-center gap-4">
              <MdLocalParking className="w-6 h-6 text-primary" />
              <span>Estacionamento grátis</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWallet className="w-6 h-6 text-primary" />
              <span>Piscina exterior</span>
            </div>
            <div className="flex items-center gap-4">
              <FaBath className="w-6 h-6 text-primary" />
              <span>Serviços de Spa</span>
            </div>
            <div className="flex items-center gap-4">
              <FaDumbbell className="w-6 h-6 text-primary" />
              <span>Academia</span>
            </div>
            <div className="flex items-center gap-4">
              <RiRestaurantLine className="w-6 h-6 text-primary" />
              <span>Restaurante no local</span>
            </div>
            <div className="flex items-center gap-4">
              <GiMountains className="w-6 h-6 text-primary" />
              <span>Vista para a montanha</span>
            </div>
            <div className="flex items-center gap-4">
              <IoIosFlame className="w-6 h-6 text-primary" />
              <span>Lareira no quarto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
