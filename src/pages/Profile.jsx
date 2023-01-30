import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, getFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl  max-auto justify-center items-center flex flex-col">
        <h1 className="text-3xl text-center mt-10 font-bold">My Profile</h1>
        <div className="text-center mt-9 md:w-[50%]">
          <form>
            {/*Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 w-full px-2 py-4 bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200"
            />
            {/*Email Input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-2 py-4 bg-white text-gray-700 border border-gray-300 transition ease-in-out duration-200"
            />
            <div className="mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center ">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer font-semibold">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 ml-1 cursor-pointer font-semibold"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
