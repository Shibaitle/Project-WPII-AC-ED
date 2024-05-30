import { useEffect, useState } from "react";

import default_logo from "./components/icon/ACEDlogo.png";

import Nav from "../../components/navbar/index";
import SessionNav from "../../components/navbar/SessionNav";
import Notification from "./Notification";

import userAvatar from "./components/avatar/user-avatar.png";

function Home() {
    // const [basic_data, setBasic_data] = useState({});
    const [array_basic_data, setArray_basic_data] = useState({
        AnimeTitle: ["anime_title1"],
        image:["base64Image bra bra bra ant mai oak"],
        genre_2d_array:[["dasdsad"]],
        sum_view_array:[0],
        premium_status_array:[0],
        isEnded_array:[0],
        big_image: "base64Image but size bigger", //ไม่ใช่ array เพราะมีรูปเดียว
        big_title: " ",
        big_genre_1d_array:[" "],
        big_description:" ",
        big_rating: 0,
        big_premium_status: " "
    });


    //user data
    const [user_data, setUser_data] = useState({});

    const [toggleMoreInfo, setToggleMoreInfo] = useState(false)

    const handleMoreInfo = () => {
        setToggleMoreInfo(!toggleMoreInfo)
    }
  
    return (
        <>
            {(array_basic_data.AnimeTitle[0] !== "anime_title1") && (
                <>
                    {isOpen && (
                        <Notification
                          message="กรุณาสมัครแพ็กเกจเพื่อรับชมเนื้อหาสุดพรีเมี่ยม"
                          onOk={handleOk}
                          color_button={'bg-blue-500'}
                          color_hover_button={'bg-blue-600'}
                        />
                    )}
                    <div className="relative h-screen">
                    {user_data.username !== "Guest login" ? <SessionNav Logout={handleLogout} User_image={`data:image/jpeg;base64,${user_data.image}`} logo={logo ? premium_logo:default_logo}/> : <Nav/>}
                    {/* <img src={Spyfamwallpaper} alt="Background" className="absolute inset-0 object-cover w-full h-full" /> */}
                    <div className="bg-black absolute inset-0 object-cover w-full">

                        <img src={`data:image/jpeg;base64,${array_basic_data.big_image}`} alt="Background" className="absolute inset-0 object-cover w-full h-full" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center p-8 ml-64">
                            <div className="w-1/3">
                                <h1 className="text-amber-500 text-4xl font-bold mb-4">
                                    {array_basic_data.big_title}
                                </h1>
                                <p className="text-white text-lg mb-4 font-bold">
                                    {array_basic_data.big_genre_1d_array.map((element, i) => i < array_basic_data.big_genre_1d_array.length - 1 ? element + ", " : element)}
                                </p>
                                {array_basic_data.big_premium_status === " " ?
                                <p className="text-white text-lg mb-4 font-bold"> </p>
                                :
                                <p className="text-white text-lg mb-4 font-bold">
                                    {Boolean(array_basic_data.big_premium_status) === true ? <p className="text-pink-400">PREMIUM</p> : <p className="text-lime-400">FREE</p>}
                                </p>
                                }
                                {toggleMoreInfo && (
                                    <div>
                                        <div className="text-white text-lg mb-4 max-h-48 overflow-auto"><span className="font-bold">plot: </span>{array_basic_data.big_description}</div>
                                        <div className="text-white text-lg mb-4"><span className="font-bold">rating: </span>{array_basic_data.big_rating}</div>
                                    </div>
                                )}
                                <div className="flex items-center">
                                    <button onClick={() => handle_navigate_and_view_count(array_basic_data.big_title)} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg mr-4">
                                        Play
                                    </button>

                                    <button
                                        className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg"
                                        onClick={handleMoreInfo}>
                                    More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black min-h-screen flex flex-col">
                    {/* Anime Billboard */}
                    

                    {/* Grid Layout */}
                    <div className="flex-1 bg-black-900 text-white p-8">

                        <h2 className="text-2xl font-bold mt-12 mb-4">New Anime</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {array_basic_data.AnimeTitle.map( (title, index) =>(index < 6 ?
          
                                <div className="rounded-lg shadow-lg p-8" key={index}>
                                    {/* <div className="text-lg font-semibold">{Boolean(array_basic_data.premium_status_array[array_basic_data.AnimeTitle.length - 1 - index]) === true ? <h3 className="text-pink-400">PREMIUM</h3> : <h3 className="text-lime-400">FREE</h3>}</div> */}
                                        <div onClick={() => handle_navigate_and_view_count(array_basic_data.AnimeTitle[array_basic_data.AnimeTitle.length - 1 - index])} className="cursor-pointer">
                                            <div className="w-full h-80 object-cover mb-2 relative">
                                                <div className="absolute inset-x-0 -top-3">
                                                    <div className="flex justify-center items-center">
                                                        <p className="text-black text-center text-xs font-bold bg-amber-500 p-1 rounded-2xl w-24">{Boolean(array_basic_data.premium_status_array[array_basic_data.AnimeTitle.length - 1 - index]) === true ? <span>PREMIUM</span> : <span>FREE</span>}</p>
                                                    </div>
                                                </div>
                                                <img
                                                src={`data:image/jpeg;base64,${array_basic_data.image[array_basic_data.AnimeTitle.length - 1 - index]}`}
                                                alt="Movie"
                                                className="w-full h-full object-cover border-2 border-amber-500 rounded-3xl"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold">{array_basic_data.AnimeTitle[array_basic_data.AnimeTitle.length - 1 - index]}<span> {`[${Boolean(array_basic_data.isEnded_array[array_basic_data.AnimeTitle.length - 1 - index]) ? `จบแล้ว` : `ยังไม่จบ` }]`}</span></h3>
                                        </div>
                                    <p className="text-sm">{array_basic_data.sum_view_array[array_basic_data.AnimeTitle.length - 1 - index]} View</p>
                                    <p className="text-sm truncate">Genre: <span className="text-amber-500">{array_basic_data.genre_2d_array[array_basic_data.AnimeTitle.length - 1 - index].map((element, i) => i < array_basic_data.genre_2d_array[array_basic_data.AnimeTitle.length - 1 - index].length - 1 ? element + ", " : element)}</span></p>
                                </div>
                                :
                                <div key={index}></div>
                            ))}

                        {/* add++ anime card */}
                        </div>

                        <h2 className="text-2xl font-bold mt-0 mb-4">Other Anime</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {array_basic_data.AnimeTitle.map( (title, index) =>(index >= 6 ?
                                <div className="rounded-lg shadow-lg p-8" key={index}>
                                    {/* <div className="text-lg font-semibold">{Boolean(array_basic_data.premium_status_array[array_basic_data.AnimeTitle.length - 1 - index]) === true ? <h3 className="text-pink-400">PREMIUM</h3> : <h3 className="text-lime-400">FREE</h3>}</div> */}
                                        <div onClick={() => handle_navigate_and_view_count(array_basic_data.AnimeTitle[array_basic_data.AnimeTitle.length - 1 - index])} className="cursor-pointer">
                                            <div className="w-full h-80 object-cover mb-2 relative">
                                                <div className="absolute inset-x-0 -top-3">
                                                    <div className="flex justify-center items-center">
                                                        <p className="text-black text-center text-xs font-bold bg-amber-500 p-1 rounded-2xl w-24">{Boolean(array_basic_data.premium_status_array[array_basic_data.AnimeTitle.length - 1 - index]) === true ? <span>PREMIUM</span> : <span>FREE</span>}</p>
                                                    </div>
                                                </div>
                                                <img
                                                src={`data:image/jpeg;base64,${array_basic_data.image[array_basic_data.AnimeTitle.length - 1 - index]}`}
                                                alt="Movie"
                                                className="w-full h-full object-cover border-2 border-amber-500 rounded-3xl"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold">{array_basic_data.AnimeTitle[array_basic_data.AnimeTitle.length - 1 - index]}<span> {`[${Boolean(array_basic_data.isEnded_array[array_basic_data.AnimeTitle.length - 1 - index]) ? `จบแล้ว` : `ยังไม่จบ` }]`}</span></h3>
                                        </div>
                                    <p className="text-sm">{array_basic_data.sum_view_array[array_basic_data.AnimeTitle.length - 1 - index]} View</p>
                                    <p className="text-sm truncate">Genre: <span className="text-amber-500">{array_basic_data.genre_2d_array[array_basic_data.AnimeTitle.length - 1 - index].map((element, i) => i < array_basic_data.genre_2d_array[array_basic_data.AnimeTitle.length - 1 - index].length - 1 ? element + ", " : element)}</span></p>
                                </div>
                                :
                                <div key={index}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
            )}
        </>
    );
}

export default Home;
