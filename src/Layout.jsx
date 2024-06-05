import React from "react";
import Cover from "./components/avatar/1.jpg";
import Cover2 from "./components/avatar/3.jpg";
import { FaBookReader } from "react-icons/fa";

function Layout() {
  return (
  <div className="bg-black min-h-screen flex flex-col">
    {/* Book Showcase Billboard */}
    <div className="h-96 relative">
      <img src={Cover2} alt="Background" className="absolute inset-0 object-cover w-full h-full blur-xl" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-row justify-center gap-32 p-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Mock ม.2
          </h1>

          <p className="text-white text-lg mb-4">
            Romantic, Action, Com-sci
          </p>
          <div className="flex items-center">
            <button className="text-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg mr-4">
                <FaBookReader />
              </button>
            
            <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg">
              More info..
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img src={Cover2} alt="Movie" className="cursor-pointer w-64" />
        </div>
      </div>
    </div>


      {/* Grid Layout */}
      <div className="flex-1 bg-white text-black p-8">

        <h2 className="text-2xl font-bold mt-12 mb-4">หนังสือที่เพิ่มมาเมื่อเร็วๆนี้</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
            <div className="w-full object-cover mb-2 relative">
              <div className="absolute inset-x-0 -top-3">
                <div className="flex justify-center items-center">
                  <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                </div>
              </div>
            <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <div className="text-center">
              <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>
 
              <p className="text-sm truncate">Romantic, Com-sci </p>
              <button className="text-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg mt-4 items-center">
                <FaBookReader />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
            <div className="w-full object-cover mb-2 relative">
              <div className="absolute inset-x-0 -top-3">
                <div className="flex justify-center items-center">
                  <p className="text-black text-center text-xs font-bold bg-blue-400 p-1 rounded-2xl w-auto border-2 border-black"><span>University</span></p>
                </div>
              </div>
            <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <div className="text-center">
              <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

              <p className="text-sm truncate">Romantic, Com-sci </p>
              <button className="text-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg mt-4 items-center">
                <FaBookReader />
              </button>
            </div>
          </div>

        </div>

        <h2 className="text-2xl font-bold mt-16 mb-4">รวมหนังสือทั้งหมด</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-red-400 p-1 rounded-2xl w-auto border-2 border-black"><span>High School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

          <div className="bg-gray-300 rounded-lg shadow-lg p-10">
              <div className="w-full object-cover mb-2 relative">
                <div className="absolute inset-x-0 -top-3">
                  <div className="flex justify-center items-center">
                    <p className="text-black text-center text-xs font-bold bg-green-400 p-1 rounded-2xl w-auto border-2 border-black"><span>Middle School</span></p>
                  </div>
                </div>
              <img src={Cover} alt="Book" className="w-full h-48 object-cover mb-2 border-2 border-black" />
            </div>
            <h3 className="text-lg truncate font-semibold">วิทยาการคำนวณ</h3>

            <p className="text-sm truncate">Romantic, Com-sci </p>    
          </div>

            {/* add++ anime card */}
          </div>

          

      </div>
    </div>
  );
}

export default Layout;
