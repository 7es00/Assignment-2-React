import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="bg-second-color text-white justify-center text-center py-10 m-0">
      <div className="grid md:grid-cols-3 gap-4 m-4">
        <div className="bg-transparent">
          <div className="text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="text-white">
          <div className="text-center">
            <h3>AROUND THE WEB</h3>
            <div className="flex justify-center space-x-2">
              <i className="fa-brands fa-facebook icon"></i>
              <i className="fa-brands fa-twitter icon"></i>
              <i className="fa-brands fa-linkedin-in icon"></i>
              <i className="fa-solid fa-globe icon"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>
              {" "}
              Freelance is a free to use, licensed Bootstrap theme created by
              Route{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 p-1">
      <p className="text-center text-gray-300 pt-2">Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
