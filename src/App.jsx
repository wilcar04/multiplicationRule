import { useState } from "react";
import portal from "./assets/portal.png";
import Result from "./Result";

function App() {
  const [form, setForm] = useState("");
  const [calculate, setCalculate] = useState(null);

  function handleChange(event) {
    const { value } = event.target;
    setForm(value);
  }

  function startCalculating() {
    const number = parseFloat(form);

    if (!isNaN(number) && Number.isInteger(number)) {
      if (number > 7000) {
        alert("El valor ingresado no puede superar 7000");
      } else {
        setCalculate(number);
      }
    } else {
      alert("El valor ingresado debe ser un entero positivo");
    }
  }

  return (
    <main className="relative flex justify-center bg-fixed bg-cover min-h-svh bg-waves-background">
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
            En esta página podrás visualizar el espacio muestral de un
            lanzamiento de N dados. Podrás ver los resultados posibles para una
            mejor comprensión estadísitca.
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
          <div className="flex flex-col justify-center w-[14rem] mx-auto">
            <div className="w-full">
              <input
                type="number"
                value={form}
                placeholder="Valor máximo"
                onChange={handleChange}
                name="slots"
                className="w-full px-3 py-2 border rounded-md bg-n-3 border-stroke/20 focus:outline focus:outline-primary/80"
              />
            </div>
            <button
              onClick={startCalculating}
              className="py-2 mt-8 font-medium text-center text-white shadow-lg bg-primary rounded-xl shadow-primary/50 hover:shadow-xl hover:shadow-primary/60"
            >
              Calcular
            </button>
          </div>

          <div className="flex justify-center mt-8"></div>
        </div>

        {calculate && <Result key={calculate} quantity={calculate} />}
      </section>
    </main>
  );
}

export default App;
