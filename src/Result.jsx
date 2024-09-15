import { useEffect, useState } from "react";
import { dados } from "./constants/index";
import { useInView } from "react-intersection-observer";
import { cartesianProductDices } from "./algorithms/cartesian_product";
import { totalPossibilities } from "./algorithms/total_possibilites";

const Result = ({ quantity }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [counter, setCounter] = useState(0);
  const totalCombinations = totalPossibilities(quantity);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const newData = cartesianProductDices(quantity, counter);
      setData((oldData) => oldData.concat(newData));
      setCounter((oldCounter) => oldCounter + 1);
      setIsLoading(false);
    }
  }, [inView]);

  // useEffect(() => {
  //   setCounter(0);
  //   setData([]);
  //   setTotalCombinations(totalPossibilities())
  // }, [quantity]);

  return (
    <div className="relative my-20">
      <div className="flex flex-col justify-center">
        <h4 className="mb-6 text-3xl font-medium text-n-21 font-kanit">
          Resultado
        </h4>
        <div className="py-4 bg-primary/30 rounded-xl">
          <h3 className="text-6xl font-semibold text-center font-kanit">
            {totalCombinations}
          </h3>
          <p className="text-center">posibles combinaciones</p>
        </div>

        {/* Resultado */}
        <div className="flex flex-col mt-8 overflow-hidden border divide-y border-n-3 rounded-xl backdrop-blur-sm">
          {data.map((combination, index) => (
            <div
              key={index}
              className={`px-3 flex flex-wrap justify-center gap-2 py-3 even:bg-primary/30`}
            >
              {combination.map((value, index) => {
                const dado = dados.find((dado) => dado.id === value);

                return (
                  <div key={index}>
                    <img src={dado.img} alt={dado.id} width={30} height={30} />
                  </div>
                );
              })}
            </div>
          ))}
          <div className="flex items-center justify-center h-10" ref={ref}>
            {isLoading && <p className="font-medium">Cargando...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
