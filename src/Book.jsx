import React from 'react';
import Cover2 from "./components/avatar/3.jpg";
import { FaBookReader } from "react-icons/fa";
import Cover from "./components/avatar/1.jpg";




const Book = () => {
  return (
    <div className="container mx-auto p-4 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className='flex justify-center bg'>
          <img
            src={Cover2}
            alt="Book Cover"
            className="h-96 rounded-md"
          />
        </div>
        
        <div className="flex flex-col gap-2 mt-8">
          <div>
            <h1 className="flex text-2xl font-bold text-black">จารย์ชูเกียรติคร้าลลลลลลลล</h1>
            <p className="text-gray-600 mt-2">Author:  St.Title Publisher</p>
            <p className="text-gray-600 mt-2">Publisher: Luckpim</p>
            <p className="text-gray-600">Categories:  Horror, Action, Yuri, Fantasy</p>
          </div>

          <div className="flex gap-4">

          </div>

          {/*ตรงนี้เปลี่ยนเป็นอย่างอื่น หรือลบได้เลย ตามที่ db แสดงได้*/}
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold">4.98</span>
            <span className="text-gray-600">❤❤❤❤❤</span>
            <span className="text-gray-600">427 Rating</span>
          </div>

          <div className="flex gap-2">
          <button className="text-center bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md">
                Read
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">
              Add to your favorite
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">
              Share (ลบได้)
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">Type: PDF</p>
            <p className="text-gray-600">Date: 20 May 2567</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-8 rounded-md mt-16 mb-4">
        <div className="flex mb-4">

        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs">Horror</button>

        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs ml-2">Action</button>

        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs ml-2">Fantasy</button>

        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs ml-2">Manga</button>

        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-xs ml-2">Yuri</button>

      </div>
        <h1 className='text-black font-bold'>[ Synosis ]</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus, sem non mattis ornare, 
          turpis odio posuere velit, et dignissim purus ipsum a dolor. Vivamus condimentum convallis tortor. 
          Integer ultricies eget est id vulputate. In et rutrum urna. Integer sit amet gravida nisl. 
          Mauris ornare ipsum et finibus finibus. Etiam at venenatis ipsum. Maecenas et libero non nulla accumsan egestas in a metus. 
          Phasellus commodo suscipit nulla sed convallis. Quisque nec lacinia orci. Sed nec diam lectus. Proin faucibus tempor diam et faucibus. 
          Mauris posuere elit neque, a rutrum mi pellentesque sed
        </p>
      </div>

      <div className="flex-1 bg-white text-black p-4">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-black">Other (อันนี้สามารถ fetch อะไรก็ได้ เช่นหนังสือใหม่ หรือสุ่มได้)</h2>
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



          </div>
          </div>
      

      </div>

  );
};

export default Book;
