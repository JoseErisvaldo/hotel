import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Galeria</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Explore nosso deslumbrante hotel e arredores.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-lg overflow-hidden"
              href="#"
            >
              <img
                alt="Gallery Image"
                className="aspect-[4/3] object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
