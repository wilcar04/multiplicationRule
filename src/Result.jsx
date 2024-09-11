import { dados } from "./constants/index";

const Result = () => {
  const firstPart = [
    [1, 5, 3, 2],
    [1, 5, 3, 2],
  ];
  const lastPart = [[6, 6, 3, 2]];

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
          {firstPart.map((combination, index) => (
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
          {lastPart && (
            <>
              <div className="flex flex-col justify-center w-full divide-y">
                <h6 className="pb-6 text-4xl font-medium text-center text-n-2">
                  ...
                </h6>
                <h6 className="py-3 text-lg font-medium text-center font-kanit text-n-2">
                  50 elementos más
                </h6>
                <h6 className="pb-6 text-4xl font-medium text-center text-n-2">
                  ...
                </h6>
              </div>
              {lastPart.map((combination, index) => (
                <div key={index} className="flex justify-center gap-2 py-2">
                  {combination.map((value, index) => {
                    const dado = dados.find((dado) => dado.id === value);
                    return (
                      <div key={index}>
                        <img
                          src={dado.img}
                          alt={dado.id}
                          width={30}
                          height={30}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
