
import CheckinCheckout from '../../Components/CheckinCheckout/CheckinCheckout'
import FeaturedPhoto from '../../Components/FeaturedPhoto/FeaturedPhoto'
import Room from '../../Components/Room/Room'
import ServicesHotel from '../../Components/ServicesHotel/ServicesHotel'
import Gallery from '../../Components/Gallery/Gallery'
import Contact from '../../Components/Contact/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <FeaturedPhoto />
      <ServicesHotel />
      <CheckinCheckout />
      <Room />
      <Gallery />
      <Contact />
    </div>
  )
}
