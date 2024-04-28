export default function Contact() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Entrar em contato.
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Preencha o formulário abaixo e retornaremos o mais breve possível
              possível.
            </p>
          </div>
          <div>
            <div>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Nome</label>
                  <input id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" placeholder="How can we help you?" />
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
