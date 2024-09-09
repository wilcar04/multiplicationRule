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
      <section className="relative w-[50rem] mx-auto bg-white px-4">
        <div className="flex gap-4 mt-8 align-center">
          <img
            src={portal}
            className="mb-auto"
            alt="portal"
            width={80}
            height={80}
          />
          <div className="">
            <h3 className="text-5xl font-bold leading-relaxed text-transparent font-kanit bg-gradient-to-b from-primary to-n-1 bg-clip-text">
              Regla de la multiplicación
            </h3>
            <p className="mt-4 text-n-2">
              En esta página podrás visualizar el espacio muestral de una
              combinación determinada de elementos. Podrás ver los resultados
              posibles para una mejor comprensión estadísitca.
            </p>
          </div>
        </div>

        <div className="px-12 mt-16">
          {/* short explanation */}
          <div></div>

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
        </div>
      </section>
    </main>
  );
}

export default App;
