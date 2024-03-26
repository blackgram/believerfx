import React, { useEffect, useState } from "react";
import { Footer, Header } from "@/components/Home";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import { useRouter } from "next/router";
import MenuLayout from "@/components/Menu/MenuLayout";
import { IoLocationOutline } from "react-icons/io5";
import { jobs } from "@/components/Menu/Data";
import InputBtn from "@/components/Authentication/InputBtn";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

const JobPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const SelectedJob = jobs.find((job) => job.id === parseInt(id));

    setJob(SelectedJob);
  }, [id]);

  return (
    <div className="font-poppins overflow-hidden bg-black min-h-full">
      <Header />
      <MenuLayout back="Careers">
        {job == null ? (
          <LoadingScreen />
        ) : (
          <div className="bg-nb4 w-full flex flex-col items-center justify-center py-16 ">
            <div className=" w-4/5 flex flex-col justify-center md:items-center gap-4 py-12 px-8 bg-nb3 rounded-2xl md:text-center text-ash ">
              <div className="w-full flex items-center justify-center text-base">
                <IoLocationOutline className="text-primary" />{" "}
                <div className="w-full">{job.type} - Worldwide</div>
              </div>
              <div className="text-white text-3xl font-bold ">{job.role}</div>
              <div className=" p-2" >{job.description} </div>
              <button
                type="submit"
                onClick=""
                className="text-[#030303] w-52 text-base py-2 px-5 flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  "
              >
                <div>Apply Now</div>
              </button>
            </div>

            <div className="w-full p-12 text-ash">
              <div className=" font-bold text-2xl text-white">About Us</div>
              <div className=" mt-6  mb-10">
                BFX is a cutting-edge technology company specializing in trading
                solutions. We are committed to innovation and excellence,
                pushing the boundaries of what&apos;s possible in the Trading
                Industry
              </div>

              <div className=" font-bold text-2xl text-white">
                Job Responsibilities
              </div>
              <div className=" mt-6  mb-10">
                <ul className="list-disc text-left pl-6">
                  {job.responsibilities &&
                    job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                </ul>
              </div>

              <div className=" font-bold text-2xl text-white">Requirements</div>
              <div className=" mt-6  mb-10">
                <ul className="list-disc text-left pl-6">
                  {job.req && job.req.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className=" font-bold text-2xl text-white">
                Preferred Qualifications
              </div>
              <div className=" mt-6  mb-10">
                <ul className="list-disc text-left pl-6">
                  {job.qual &&
                    job.qual.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className=" font-bold text-2xl text-white">Benefits</div>
              <div className=" mt-6  mb-10">
                <ul className="list-disc text-left pl-6">
                  {job.benefits &&
                    job.benefits.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className=" font-bold text-2xl text-secondary text-center">
                To Apply. Fill out the form below.
              </div>
              <div className="w-full pt-10 flex flex-col items-center justify-center">
                <form
                  onSubmit={""}
                  className="w-full flex gap-8 items-center justify-center flex-wrap xl:px-44"
                >
                  <div className=" w-4/5">
                    <span>Full Name</span> <InputBtn required="true" />
                  </div>
                  <div className=" w-4/5">
                    <span>Phone</span> <InputBtn required="true" />
                  </div>
                  <div className=" w-4/5">
                    <span>Email</span> <InputBtn required="true" />
                  </div>
                  <div className=" w-4/5">
                    <span>Location</span> <InputBtn required="true" />
                  </div>
                  <div className=" w-4/5">
                    <span>Experience (years)</span> <InputBtn required="true" />
                  </div>
                  <div className=" w-4/5">
                    <span>Link to your CV</span> <InputBtn required="true" />
                  </div>

                  <div className="w-full flex justify-center mt-4">
                    <button
                      type="submit"
                      className="text-[#030303] text-[16px] py-3 px-5 flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  "
                    >
                      <div>Submit</div>
                    </button>
                  </div>
                  <div className="italic text-center">After submission, our recruitment team will reach out to you via mail for next steps, we anticipate working with you.</div>
                </form>
              </div>
            </div>
          </div>
        )}
      </MenuLayout>
      <Footer cta={false} />
      <ScrollToTop scroll={showScrollToTop} />
      <TradingViewTickerTape display="down" />
    </div>
  );
};

export default JobPage;
