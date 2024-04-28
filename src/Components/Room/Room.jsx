export default function Room() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tipos de quartos</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Explore nossa variedade de opções de quartos luxuosos.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div>
                <div>Quarto padrão</div>
                <div>Acolhedor e confortável com vista para a montanha.</div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">R$ 200</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      por noite
                    </div>
                  </div>
                  <button variant="outline">Agende agora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
