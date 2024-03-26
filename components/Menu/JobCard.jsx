import { setActiveMainMenu } from "@/Redux/features/activeMainMenuSlice";
import { setPageLoading } from "@/Redux/features/pageLoadingSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const JobCard = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setPageLoading(true));
    dispatch(setActiveMainMenu("About Job"));

    try {
      await router.push(`/jobs/${props.id}`);
    } catch (error) {
      console.error("Error navigating:", error);
    } finally {
      setLoading(false); // Set loading to false after navigation is complete
    }
  };

  return (
    <div className=" bg-nb3 text-base text-ash  flex flex-col gap-5 px-4 py-5 md:px-9 md:py-10 w-[90%] md:w-4/5 lg:w-[40%] rounded-2xl rounded-tl-none rounded-br-none ">
      <div className=" text-white text-[30px] font-bold leading-10 ">
        {props.role}
      </div>
      <div className=" text-pretty "> {props.description} </div>
      <div className="flex gap-7">
        <div>
          Job Type: <span className="text-primary">{props.type}</span>{" "}
        </div>
        <div>
          Experience: <span className="text-primary">{props.exp}</span>{" "}
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleClick}
          className="text-[#030303] text-base py-2 px-5 flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  "
        >
          <div>Apply Now</div>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
