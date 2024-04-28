import { FaCalendarAlt } from 'react-icons/fa'

export default function CheckinCheckout() {
  return (
    <div className="container px-4 md:px-6">
      <form className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 md:p-6 grid gap-4 md:grid-cols-4 items-end">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="check-in">
            Check-in
          </label>
          <div>
            <div asChild>
              <button
                className="w-full flex-col h-auto items-start"
                variant="outline"
              >
                <span className="font-semibold uppercase text-[0.65rem]">
                  Check in
                </span>
                <span className="font-normal">4/2/2024</span>
              </button>
            </div>
            <div className="p-0 max-w-[276px]">
              <FaCalendarAlt />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="check-out">
            Check-out
          </label>
          <div>
            <div asChild>
              <button
                className="w-full flex-col h-auto items-start"
                variant="outline"
              >
                <span className="font-semibold uppercase text-[0.65rem]">
                  Check out
                </span>
                <span className="font-normal">10/2/2024</span>
              </button>
            </div>
            <div className="p-0 max-w-[276px]">
              <FaCalendarAlt />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="guests">
            Pessoas
          </label>
          <select>
            <div className="h-auto">
              <div className="flex flex-col items-start">
                <span className="font-semibold uppercase text-[0.65rem]">
                  Pessoas
                </span>
                <span className="font-normal">2 Adulto</span>
              </div>
            </div>
            <div>
              <option value="1">1 Adulto</option>
              <option value="3">1 Adulto + 1 Criança</option>
              <option value="2">2 Adulto</option>
              <option value="3">2 Adulto + 1 Criança</option>
              <option value="3">2 Adulto + 2 Criança</option>
              <option value="other">Outros</option>
            </div>
          </select>
        </div>
        <button className="w-full h-12" size="lg">
          Procurar
        </button>
      </form>
    </div>
  )
}
