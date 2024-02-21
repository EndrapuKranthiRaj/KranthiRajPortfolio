import React from 'react'

export default function contact() {
  return (
    <div className='my-24 ml-1'>
        <div className="justify-around flex ">
  <section className="bg-gray-900 md:w-3/4 rounded-xl">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center  text-gray-400 sm:text-xl">
        want to contact me? Let me know your response 
        <br/>
        My_mail: Kranthiraj7799@gmail.com  😊
      </p> 
      <form
        id="contactform"
        target="_blank"
        action="https://formsubmit.co/kranthiraj7799@gmail.com"
        method="POST"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            placeholder="Full Name"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            placeholder="Email Address"
            required=""
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your Response
          </label>
          <textarea
            id="bigmsg"
            placeholder="Enter your Response"
            className="form-control block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            name="message"
            rows={10}
            required=""
            defaultValue={""}
          />
        </div>
        <button
          id="feed"
          type="submit"
          className="my-4 text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 "
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</div>




    </div>
  )
}
