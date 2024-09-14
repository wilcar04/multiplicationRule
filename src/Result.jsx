import { useEffect, useState } from "react";
import { dados } from "./constants/index";
import { useInView } from "react-intersection-observer";
import { juanfer } from "./juanfer";

const Result = ({ quantity }) => {
  const [data, setData] = useState([
    [1, 5, 3, 2],
    [1, 5, 3, 2],
  ]);

  const [counter, setCounter] = useState(0);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const newData = juanfer(quantity, counter);
      setData((oldData) => oldData.concat(newData));
      setCounter((oldCounter) => oldCounter + 1);
    }
  }, [inView]);

  return (
    <div className="relative my-20">
      <div className="flex flex-col justify-center">
        <h4 className="mb-6 text-3xl font-medium text-n-21 font-kanit">
          Resultado
        </h4>
        <div className="py-4 bg-primary/20 rounded-xl backdrop-blur-sm">
          <h3 className="text-6xl font-semibold text-center font-kanit">113</h3>
          <p className="text-center">posibles combinaciones</p>
        </div>

        {/* Resultado */}
        <div className="flex flex-col px-3 mt-8 border divide-y border-n-3 rounded-xl backdrop-blur-sm">
          {data.map((combination, index) => (
            <div key={index} className="flex justify-center gap-2 py-2">
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
        </div>

        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default Result;
