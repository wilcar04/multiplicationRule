import { useState } from "react";
import portal from "./assets/portal.png";
import background from "./assets/background.png";

function App() {
  const [form, setForm] = useState({
    slots: null,
    maxValue: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  return (
    <main className="relative flex justify-center min-h-svh">
      <img src={background} alt="background" className="fixed inset-0 -z-10" />
      <section className="relative w-[50rem] mx-auto bg-white px-4 overflow-hidden">
        <div className="absolute -translate-x-1/2 -top-[65%] left-1/2 w-[120%] scale-125 opacity-15 rotate-90">
          <img
            src={portal}
            className="w-full"
            alt="portal"
            width={500}
            height={500}
          />
        </div>
        <div className="relative flex flex-col justify-center gap-4 mx-10 mt-28">
          <h3 className="text-5xl font-bold leading-relaxed text-center text-transparent font-kanit bg-gradient-to-b from-primary to-n-1 bg-clip-text">
            Regla de la multiplicación
          </h3>
          <p className="mt-4 text-center text-n-2">
            En esta página podrás visualizar el espacio muestral de una
            combinación determinada de elementos. Podrás ver los resultados
            posibles para una mejor comprensión estadísitca.
          </p>
        </div>

        <div className="relative px-12 mt-32">
          {/* short explanation */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-primary">
              Comienza a calcular
            </h4>
            <p>
              Ingresa los parámetros necesarios para poder visualizar tu espacio
            </p>
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <div className="mx-auto">
              <label className="block mb-2 font-medium">
                Cantidad de espacios
              </label>
              <input
                type="text"
                value={form.slots}
                placeholder="Celdas"
                onChange={handleChange}
                name="slots"
                className="px-3 py-2 border rounded-md bg-n-3 border-stroke/20 focus:outline focus:outline-primary/80"
              />
            </div>
            <div className="mx-auto">
              <label className="block mb-2 font-medium">Valor máximo</label>
              <input
                type="text"
                value={form.maxValue}
                placeholder="Valor máximo"
                onChange={handleChange}
                name="slots"
                className="px-3 py-2 border rounded-md bg-n-3 border-stroke/20 focus:outline focus:outline-primary/80"
              />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="py-2 font-medium text-white shadow-lg px-14 bg-primary rounded-xl shadow-primary/50 hover:shadow-xl hover:shadow-primary/60">
              Calcular
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
