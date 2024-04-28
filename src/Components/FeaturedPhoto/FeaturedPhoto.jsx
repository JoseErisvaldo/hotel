export default function FeaturedPhoto() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <img
        alt="Hotel"
        className="w-full h-full object-cover object-center"
        height="500"
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/412821862.jpg?k=b9fc77c83f95b725dff4c672401eb45bed644f33df396f65d4d51284d365472f&o=&hp=1"
        style={{
          aspectRatio: '1200/500',
          objectFit: 'cover'
        }}
        width="1200"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Retiro de Bem-Estar: Serviços de Luxo em um Refúgio Tranquilo
        </h1>
        <p className="max-w-[600px] mt-4 text-lg md:text-xl">
          Bem-vindo ao nosso retiro de bem-estar, onde a paz e o conforto se
          encontram. Desfrute de uma estadia relaxante com wifi e estacionamento
          gratuitos, momentos de rejuvenescimento no nosso spa, exercícios
          revigorantes na academia e muito mais. Descubra o equilíbrio perfeito
          entre comodidades modernas e a serenidade da natureza em nosso hotel.
        </p>
      </div>
    </section>
  )
}
