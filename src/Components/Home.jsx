import React from 'react'

export default function Home() {
  return (
   <>
   <div style={{  minHeight: "calc(-106px + 100vh)" }}>
    <div className="bg-main-color flex justify-center items-center text-white h-screen">
      <div className="text-center flex justify-content-around flex-col">
        <img
          src="/src/assets/images/avataaars.svg"
          alt=""
          className="mb-3 w-64 m-auto"
        />
        <div className="text-center pt-4 text-white">
          <h2 className="text-4xl font-bold uppercase mb-3">
            start Framework
          </h2>
          <div className="flex items-center justify-center mb-3">
            <div className="line mr-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ml-3 bg-white"></div>
          </div>
        </div>
        <div>
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
