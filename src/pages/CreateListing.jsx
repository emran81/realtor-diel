import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedroom: "1",
    bathroom: "1",
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const {
    type,
    name,
    bedroom,
    bathroom,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
        <div className="flex mt-6">
          <button
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            id="type"
            type="button"
            value="sell"
          >
            Sell
          </button>
          <button
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            id="type"
            type="button"
            value="sell"
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          inputMode="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg text-semibold">Beds</p>
            <input
              type="number"
              id="bedroom"
              value={bedroom}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
            />
          </div>
          <div>
            <p className="text-lg text-semibold">Baths</p>
            <input
              type="number"
              id="bathroom"
              value={bathroom}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
            />
          </div>
        </div>
        {/*parking*/}
        <p className="text-lg mt-6 font-semibold">Parking stop</p>
        <div className="flex mt-6">
          <button
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="parking"
            type="button"
            value={true}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="parking"
            type="button"
            value={false}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex mt-6">
          <button
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="furnished"
            type="button"
            value={true}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="furnished"
            type="button"
            value={false}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          id="address"
          type="text"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
        />
        <p className="text-lg  font-semibold">Description</p>
        <textarea
          id="description"
          type="text"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
        />
        <p className="text-lg  font-semibold">Offer</p>
        <div className="flex mt-6">
          <button
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="offer"
            type="button"
            value={true}
          >
            Yes
          </button>
          <button
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            id="offer"
            type="button"
            value={false}
          >
            No
          </button>
        </div>
        <div className="flex items-center mt-6 mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                id="regularPrice"
                type="number"
                value={regularPrice}
                onChange={onChange}
                min="50"
                mix="40000000"
                required
                className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$/Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mt-6 mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  id="discountedPrice"
                  type="number"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  mix="40000000"
                  required={offer}
                  className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 bounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">$/Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p>Images</p>
          <p>The first image will be the cover (max-6) </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .jpeg, .png"
            multiple
            required
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white px-7 py-4 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-blue-900"
          type="submit"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
