import React from 'react'

export default function Contact() {
  return (
<div className="mb-4">
  <div className="pt-3 container mx-auto px-4">
    <div className="text-center pt-16 text-second-color">
      <h2 className="text-4xl font-bold uppercase mb-3">
        contact section
      </h2>
      <div className="flex items-center justify-center mb-3">
        <div className="line mr-3 bg-second-color"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ml-3 bg-second-color"></div>
      </div>
    </div>
    <form
      noValidate=""
      action=""
      className="w-full md:w-1/2 p-3 mx-auto mt-5"
    >
      <label
        htmlFor="userName"
        className="relative top-0 __top text-main-color mb-2 block"
      >
        userName :{" "}
      </label>
      <input
        id="userName"
        type="text"
        placeholder="userName"
        name="userName"
        className="w-full border-0 border-b-2 border-gray-300 py-3 relative focus:outline-none focus:border-main-color"
      />
      <label
        htmlFor="userAge"
        className="relative top-0 __top text-main-color mb-2 block mt-4"
      >
        userAge :{" "}
      </label>
      <input
        id="userAge"
        type="text"
        placeholder="userAge"
        name="userName"
        className="w-full border-0 border-b-2 border-gray-300 py-3 relative focus:outline-none focus:border-main-color"
      />
      <label
        htmlFor="userEmail"
        className="relative top-0 __top text-main-color mb-2 block mt-4"
      >
        userEmail :{" "}
      </label>
      <input
        id="userEmail"
        type="text"
        placeholder="userEmail"
        name="userName"
        className="w-full border-0 border-b-2 border-gray-300 py-3 relative focus:outline-none focus:border-main-color"
      />
      <label
        htmlFor="userPassword"
        className="relative top-0 __top text-main-color mb-2 block mt-4"
      >
        userPassword :{" "}
      </label>
      <input
        id="userPassword"
        type="text"
        placeholder="userPassword"
        name="userName"
        className="w-full border-0 border-b-2 border-gray-300 py-3 relative focus:outline-none focus:border-main-color"
      />
      <button
        className="mt-4 text-white px-6 py-2 rounded"
        style={{ backgroundColor: "#1abc9c" }}
      >
        {" "}
        send Message{" "}
      </button>
    </form>
  </div>
</div>
  )
}
