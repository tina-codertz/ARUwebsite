import React from "react";
import background from "../assets/photo6.jpg";
const AboutUs = () => {
  return (
    <div className="bg-white">
      <section
        className="relative h-[900px] bg-cover bg-center "
        style={{ background: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white ">
            <h1 className="text-4xl font-bold ">Mwanza Campus</h1>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white-50 rounded-lg shadow-lg">
        {/* university Overview */}
        <h2 className="text-3xl font-semibold mb-6 text-blue-900 ">
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
            University Overview
          </span>
        </h2>
        <p className="text-lg text-orange-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sunt
          odio, molestias quod ab est, nam, totam voluptate numquam earum fugit
          quasi aliquid placeat minus. Maiores soluta id ducimus
          inefucrrujvfjrvmujremvuiaeruuruuvrjmvruerrurefvreufreufjrejenbjreuujrebejsruuujrtuijsrtireirixru.
        </p>
      </section>

      {/* vision and mission */}
      <section className="py-20 ">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-3xl font-semibold text-blue-900 mb-6">
            <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
              Mission and Vision
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-around items-center"></div>
          <div className="md:w-1/3 p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Vision</h2>
            <p>
              vbf,uasrefaeufurfuERYFEUIRufERUVRWMVURFBujre
              ucvrecuvmqenbrumvfurefewerufweufwefieifjreiuruireyurureuifreu
            </p>
          </div>
          <div className="md:w-1/3 p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-2">Mission</h3>
            <p>
              uiefuerfurefuerfjvuearumvuqeriiiiiiiiiiiiiiii4tytuqy2trfuwtedytewyscfearufuy4qefuyewf
            </p>
          </div>
        </div>
      </section>

      {/* Core Values........ */}

      <section className="py-20 px-8 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
            Core Values
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-orange-600 mb-2">
              Integrity
            </h1>
            <p className="">ufytfrdrtsddtffrfxffct</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              Excellence
            </h2>
            <p>btuururtuururtuivrrsuuru</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              Innovation
            </h3>
            <p>mvurtvuretuveiuvbji</p>
          </div>
        </div>
      </section>

      {/* ......Leadership Team */}
      <section className="py-20 px-8">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
            Management Profile
          </span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="null" alt="prezz" />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="null" alt="prezz" />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="null" alt="prezz" />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="null" alt="prezz" />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="null"
                alt="prezz"
                className="rounded-full mx-auto mb-4"
              />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="null"
                alt="prezz"
                className="rounded-full mx-auto mb-4"
              />
              <h1 className="text-xl font-bold text-orange-600 text-center">
                Dr.Bless
              </h1>
              <p className="text-center">President</p>
            </div>
          </div>
        </div>

        {/* ...Campus Facilities */}
        <section className="py-20 px-8 bg-blue-50">
          <h1 className="text-3xl font-semibold text-blue-900 mb-6 text-center ">
            <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
              Campus Facilities
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-orange-600 mb-4">
                libraries
              </h2>
              <p>ueiddxduycydfucudfcudfu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-orange-600 mb-4">
                libraries
              </h2>
              <p>ueiddxduycydfucudfcudfu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-orange-600 mb-4">
                libraries
              </h2>
              <p>ueiddxduycydfucudfcudfu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-orange-600 mb-4">
                libraries
              </h2>
              <p>ueiddxduycydfucudfcudfu</p>
            </div>
          </div>
        </section>

        {/* .......Achievements... */}

        <section className="py-20 px-8 bg-white">
          <h1 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
            <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-green-500">
              Accreditation and Achievement
            </span>
          </h1>
          <p className="tex-lg text-orange-600 text-center">
            our University is accredited by various international organizations
            and ranks among the top institutions globally for its quality of
            education and research
          </p>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
