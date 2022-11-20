import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
      <div className="flex min-h-screen bg-black justify-center items-center">
          <PropagateLoader color="#499bf8"  />
      </div>
  );
}

export default Loader;