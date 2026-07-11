import React from "react";
import Img3 from "../assets/Images/Image3.jpg";

const ContactUS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-200 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        SEND US A MESSAGE
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">

        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={Img3}
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-10">

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-semibold">
                  State
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-3">
                  <option>Select State</option>
                  <option>Uttar Pradesh</option>
                  <option>Chhattisgarh</option>
                  <option>Telangana</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  City
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-3">
                  <option>Select City</option>
                  <option>Lucknow</option>
                  <option>Raipur</option>
                  <option>Hyderabad</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 hover:scale-105 shadow-lg"
            >
              Submit
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default ContactUS;