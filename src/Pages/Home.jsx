import React from "react";
import backgroundImage from "../assets/photo1.jpg";

const Home = () => {
  return (
    <main>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0  bg-black/50 absolute-inset-0 flex flex-col items-center justify-center  h-screen space-y-6">
          <div className="text-center">
            <h1 className=" text-4xl md:text-6xl font-semibold  font-serif text-white">
              {" "}
              <span className="mb-8">
                {" "}
                Welcome to ARDHI University
              </span> <br /> MWANZA Campus{" "}
            </h1>
            <p className="text-center text-3xl text-white mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              error at aliquid temporibus repellat dolorum voluptatem nam
              impedit ipsam earum labore maxime adipisci, mollitia corporis odit
              unde quis distinctio maiores.
            </p>
          </div>
          <div className=" flex space-x-4 text-white ">
            <button className="px-6 py-3 font-semibold rounded bg-orange-500 hover:bg-orange-600  transition">
              Explore Programs
            </button>
            <button className="px-6 py-3 font-semibold rounded bg-orange-500 hover:bg-orange-600 transition">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* ....announcements cards */}
      <div className="container mx-auto p-4">
        <h1 className="text-center font-semibold text-3xl text-blue-900">
          ANNOUNCEMENT
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
        </div>
      </div>
      <div></div>
      {/* .......programs offered */}
      <div className="container mx-auto p-4 m-8">
        <h1 className="text-center font-semibold text-3xl text-blue-900">
          University Programs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <img src="null" alt="picture" />
            <h1>Undergraduate</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <img src="null" alt="picture" />
            <h1>Diploma</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <img src="null" alt="picture" />
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <img src="null" alt="picture" />
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
        </div>
      </div>
      <div></div>
      {/* ...........Events and News */}

      <div className="container mx-auto p-4 mb-8">
        <h1 className="text-center font-semibold text-3xl text-blue-900">
          NEWS AND EVENTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h1>lorem</h1>
            <p>lorem ipsumjknvjnbnsfj</p>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
