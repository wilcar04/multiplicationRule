import { useState } from "react";
import portal from "./assets/portal.png";
import background from "./assets/background.png";
import Result from "./Result";

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
      <div className="fixed inset-0 -z-10">
        <img src={background} alt="background" className="object-cover " />
      </div>
      <section className="relative w-[50rem] mx-auto bg-white px-16 overflow-hidden">
        <div className="absolute -translate-x-1/2 top-2 left-1/2 w-[120%] scale-110 opacity-10 rotate-90">
          <img
            src={portal}
            className="w-full"
            alt="portal"
            width={500}
            height={500}
          />
        </div>
        <div className="relative flex flex-col justify-center gap-4 mt-16">
          <h3 className="text-5xl font-bold leading-relaxed text-transparent font-kanit bg-gradient-to-b from-primary to-n-1 bg-clip-text">
            Regla de la multiplicación
          </h3>
          <p className="mt-4 text-n-4">
            En esta página podrás visualizar el espacio muestral de una
            combinación determinada de elementos. Podrás ver los resultados
            posibles para una mejor comprensión estadísitca.
          </p>
        </div>

        {/* <div>
          <img src={dados_hero} />
        </div> */}

        <div className="relative px-8 py-8 mt-20 bg-white border rounded-xl border-n-3">
          {/* short explanation */}
          <div className="mb-12">
            <h4 className="mb-6 text-3xl font-medium font-kanit text-n-1">
              Comienza a calcular
            </h4>
            <p className="text-n-4">
              Ingresa la cantidad de veces que se tirará el dado
            </p>
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <div className="mx-auto">
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

          <div className="flex justify-center mt-8">
            <button className="py-2 font-medium text-white shadow-lg px-14 bg-primary rounded-xl shadow-primary/50 hover:shadow-xl hover:shadow-primary/60">
              Calcular
            </button>
          </div>
        </div>
        <Result />
      </section>
    </main>
  );
}

export default App;
