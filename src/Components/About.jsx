import React from 'react'

export default function About() {
  return (
<>
<div className="bg-main-color text-white flex justify-center items-center min-h-screen">
  <div>
    <div className="text-center pt-4 text-white">
      <h2 className="text-4xl font-bold uppercase mb-3">
        about component
      </h2>
      <div className="flex items-center justify-center mb-3">
        <div className="line mr-3 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ml-3 bg-white"></div>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 px-5">
        <div className="md:pr-5">
          <p>
            {" "}
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.{" "}
          </p>
        </div>
        <div className="md:pl-5">
          <p>
            {" "}
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
