import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ListingPage1() {
  let navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto">
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[600px] flex flex-col items-center justify-center  md:items-start gap-[10px] overflow-auto mt-[150px]"
      >
        <div
          className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
        </div>
        <div
          className="w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center
        rounded-[30px] absolute top-[5%] right-[10px] shadow-lg"
        >
          SetUp Your Home
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
          <label htmlFor="title" className="text-[20px]">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
            required
          />
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
          <label htmlFor="des" className="text-[20px]">
            Description
          </label>
          <textarea
            id="des"
            className="w-[90%] h-[80px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
            required
          ></textarea>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="image1" className="text-[20px]">
            Image1
          </label>
          <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
            <input
              type="file"
              id="image1"
              className="w-[100%]  text-[15px] px-[10px]"
              required
            />
          </div>
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="image2" className="text-[20px]">
            Image2
          </label>
          <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
            <input
              type="file"
              id="image2"
              className="w-[100%]  text-[15px] px-[10px]"
              required
            />
          </div>
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="image3" className="text-[20px]">
            Image3
          </label>
          <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
            <input
              type="file"
              id="image3"
              className="w-[100%]  text-[15px] px-[10px]"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ListingPage1;
