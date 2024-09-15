import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <ColorRing
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass
      colors={["#a53860"]}
    />
  );
};

export default Loading;
