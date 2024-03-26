import React from "react";
import MenuLayout from "./MenuLayout";
import JobCard from "./JobCard";
import { jobs } from "./Data";
import { useSelector } from "react-redux";
import { FiSend } from "react-icons/fi";
import { MdOutlineAssessment } from "react-icons/md";
import { ImUsers } from "react-icons/im";

const Careers = () => {
  const isSmallScreen = useSelector(
    (state) => state.data.screenSize.isSmallScreen
  );

  let descLength;

  isSmallScreen ? (descLength = 110) : (descLength = 200);

  return (
    <MenuLayout>
      <div className="bg-nb4 flex flex-col justify-center items-center w-full">
        <div className=" max-w-[600px] text-center p-11">
          <div className="text-white text-[30px] font-bold ">Apply Today</div>
          <div className=" text-ash mt-5 ">
            We&apos;re constantly on the search for expertise to improve our trading
            platform. <span className="text-primary">Bfx</span> is an equal
            opportunity employer.
          </div>
        </div>
        <div className="w-full pt-10 pb-10 lg:pb-56 flex items-center justify-center flex-wrap gap-8 ">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              role={job.role}
              description={`${job.description.slice(0, descLength)}...`}
              type={job.type}
              exp={job.exp}
            />
          ))}
        </div>
      </div>
      <div>
        <div className=" flex flex-col justify-center items-center w-full p-16 text-center ">
          <div className="text-white text-[30px] font-bold ">
            Our Recruitment Process
          </div>
          <div className=" text-ash mt-5 ">Ready to join our team ?</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px] rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full lg:h-[80px] lg:w-[80px] flex items-center justify-center p-3 text-primary">
              <FiSend size={32} />
            </div>
            <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
              Apply
            </div>
            <div className="text-[14px] lg:text-[16px] text-center hover:text-black">
              To apply for the position, simply visit our careers page on our
              website or send your resume and cover letter to our designated
              email address. We&apos;re excited to learn more about your skills and
              experience and why you&apos;re interested in joining our team.
            </div>
          </div>

          <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px]  rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-3 text-primary lg:h-[80px] lg:w-[80px] flex items-center justify-center">
              <MdOutlineAssessment size={32} />
            </div>
            <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
              Assessment
            </div>
            <div className=" text-[14px] lg:text-[16px] text-center">
              Once we receive your application, we&apos;ll review it carefully to
              determine if you&apos;re a good fit for the role. If your application
              meets our initial criteria, we&apos;ll invite you to complete
              assessments tailored to the position. These assessments help us
              assess your skills and abilities and ensure you&apos;re a strong
              candidate for the role.
            </div>
          </div>
          <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px]  rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-3 text-primary lg:h-[80px] lg:w-[80px] flex items-center justify-center">
              <ImUsers size={32} />
            </div>
            <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
              Interview
            </div>
            <div className=" text-[14px] lg:text-[16px] text-center">
              Congratulations! You&apos;ve successfully passed the assessment stage.
              Now, it&apos;s time for us to get to know you better. We&apos;ll schedule
              one or more interviews where you&apos;ll have the opportunity to meet
              with members of our team. This is your chance to showcase your
              qualifications, experience, and personality, and to learn more
              about the role and our company culture.
            </div>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default Careers;
