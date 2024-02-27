import React, { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import DashLayout from "./DashLayout";

const Profile = () => {

  const [isDisabled, setisDisabled] = useState(true);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleEdit = () => {
    setisDisabled(false);
  };
  const handleUpdate = () => {
    setisDisabled(true);
  };

  return (
    <DashLayout>
        <div className="p-4 lg:p-8">
          <div className="flex">
            <div className="w-full text-center font-medium text-[24px]">
              Profile
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4 py-2">
            <div className="text-ash">
              <div>First Name</div>
              <input
                type="text"
                // value=""
                placeholder="FirstName"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Last Name</div>
              <input
                type="text"
                // value=""
                placeholder="LastName"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Username</div>
              <input
                type="text"
                // value=""
                placeholder="Username"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Email</div>
              <input
                type="text"
                // value=""
                placeholder="mail@email.com"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Phone number</div>
              <input
                type="text"
                // value=""
                placeholder="phone number"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Address Line 1</div>
              <input
                type="text"
                // value=""
                placeholder="Address Line 1"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Address Line 2</div>
              <input
                type="text"
                // value=""
                placeholder="Address Line 2"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>City</div>
              <input
                type="text"
                // value=""
                placeholder="city"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>Region</div>
              <input
                type="text"
                // value=""
                placeholder="region"
                className="text-white bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw] "
                disabled={isDisabled}
              />
            </div>
            <div className="text-ash">
              <div>select a country</div>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                isDisabled={isDisabled}
                className="text-ash bg-nb3 rounded-md p-2 w-[80vw] lg:w-[70vw]"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                onClick={handleEdit}
                className=" py-2 px-6 text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-md p-1 bg-secondary"
              >
                Edit
              </button>
              <button
                type="submit"
                onClick={handleUpdate}
                className=" py-2 px-6 text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-md p-1 bg-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
    </DashLayout>
  );
};

export default Profile;
