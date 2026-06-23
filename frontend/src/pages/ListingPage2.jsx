import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ListingPage2() {
  let navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/listingpage1")}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
      </div>
      <div
        className="w-[220px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center
              rounded-[30px] absolute top-[10%] right-[10px] shadow-lg"
      >
        Set Your Category
      </div>
      <div className="max-w-[900px] w-[90%] h-[550px] flex flex-col items-center justify-start  md:items-start gap-[10px] overflow-auto mt-[30px]"></div>
    </div>
  );
}

export default ListingPage2;
