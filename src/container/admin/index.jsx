import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//component
import PopupAddEbook from "../../components/popup/addEbook";
import PopupUpdateEbook from "../../components/popup/updateEbook";

//api
import fetchArrayBasicInfo from "../../../api/fetch/fetchArrayBasicInfo";
import fetchArrayGenre  from "../../../api/fetch/fetchArrayGenre";
import logout from "../../../api/other/logout";
import deleteEbook from "../../../api/other/deleteEbook";
import createEbook from "../../../api/other/createEbook";
import updateEbook from "../../../api/other/updateEbook";

import SessionNav from "../../components/navbar/NavbarSession";



function Admin() {

    const navigate = useNavigate();

    const [admin_data, setAdmin_data] = useState({});
    const [table, setTable] = useState({array_of_table:[{username:"brabrabra"}], count_user:1})

    const [f, forceUpdate] = useState();


    const [array_basic_data, setArray_basic_data] = useState({
        EbookTitle: ["ebook_title1"],
        image:["base64Image bra bra bra ant mai oak"],
        genre_2d_array:[["dasdsad"]],
        sum_view_array:[0],
        author_name_array:["name"],
        publisher_name_array:["name"],
        big_image:"base64",
        big_title:"brabrabra",
        big_genre_1d_array:["brabrabra"],
        big_description:"brabrabra",
        big_rating:0
    });

    const [array_genre, setArray_genre] = useState({
        EbookGenre: ["genre_name bra bra bra"]
    });

    const handleLogout = () => {
        logout()
        forceUpdate(Math.random());
        
    }

    const handleDeleteEbook = async (title) => {
        await deleteEbook(title)
        // const refresh_when_delete = array_basic_data.filter((anime) => anime.AnimeTitle !== title);
        // setArray_basic_data(refresh_when_delete);
        forceUpdate(Math.random());
    }

    const handleSubmit_create = async (mass_of_ebook_data) =>{
        console.log("ดูตรงนี้หน่อย")
        console.log(mass_of_ebook_data)
        await createEbook(mass_of_ebook_data)
        forceUpdate(Math.random())
        return "str เพื่อให้ then ได้"
    }

    const handleSubmit_update = async (mass_of_ebook_data, title) =>{
        console.log(mass_of_ebook_data)
        await updateEbook(mass_of_ebook_data)
        forceUpdate(Math.random())
        return "str เพื่อให้ then ได้"
    }
    

    axios.defaults.withCredentials = true

    useEffect(() => {
        let isMount = true;
        if (isMount) {


        axios.get('http://localhost:8000/')
        .then(response => {
            console.log(response)

            if(!response.data.username){
            navigate('/')
            }
            else{
            axios.get(`http://localhost:8000/api/admin/?username=${response.data.username}`)
            .then(response => {
                const adminName = response.data.adminName
                if(adminName === "you are not admin"){
                navigate('/')
                }
                else{
                axios.get(`http://localhost:8000/`)
                    .then(response => {
                    axios.get(`http://localhost:8000/api/user_specific_info/?username=${response.data.username}`)
                        .then(user_specific_info =>{
                        console.log(user_specific_info)
                        setAdmin_data(user_specific_info.data);
                    })
                    })

                    fetchArrayBasicInfo()
                        .then(ebook =>{
                            setArray_basic_data(ebook)
                            console.log(array_basic_data)
                        })

                    fetchArrayGenre()
                    .then(genre => {
                        setArray_genre(genre)
                        // console.log("here")
                        // console.log(array_genre)
                        

                    })
                }
            })
            }
        })
        }
        return () => {
        isMount = false;
        };
    }, [f]);
  
    return (
        <>
            <div className="bg-white">
                
                <SessionNav Logout={handleLogout} User_image={`data:image/jpeg;base64,${admin_data.image}`}/>
                
                <div className="container mx-auto mt-8">
                <h1 className="text-5xl text-black mt-12 mb-10 text-center">e-Book Management [<span className="text-amber-500">{admin_data.username}</span>]</h1>

                </div>

                <div className="container mx-auto mt-8 mb-10">
                {/* Responsive ตรงนี้ให้เหลือ col-2 ตอนจอเล็ก */}
                <div className="grid grid-cols-6 gap-x-14 gap-y-6 bg-white p-4">
                    {array_basic_data.EbookTitle.map( (title, index) => (
                    <div key={title} className="rounded-md flex flex-col justify-between bg-gray-300 shadow-lg p-4">
                        <img src={`data:image/jpeg;base64,${array_basic_data.image[array_basic_data.EbookTitle.length - 1 - index]}`} className="w-full h-full object-cover mb-2 rounded-3xl shadow-md" />
                        <div className="text-black text-sm font-semibold py-1 mb-2 truncate">{array_basic_data.EbookTitle[array_basic_data.EbookTitle.length - 1 - index]}</div>
                        <div className="flex justify-between">
                            <button className="bg-red-500 anihover hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => { if (window.confirm("Are you sure you want to delete this book?")) {handleDeleteEbook(array_basic_data.EbookTitle[array_basic_data.EbookTitle.length - 1 - index]);}}}>Delete</button>
                            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleEdit(array_basic_data.EbookTitle[array_basic_data.EbookTitle.length - 1 - index])}>ปลอม</button> */}
                            <PopupUpdateEbook
                                onSubmit={handleSubmit_update}
                                genre={array_genre}
                                title={array_basic_data.EbookTitle[array_basic_data.EbookTitle.length -1 - index]} />

                        </div>
                    </div>

                    ))}
                    <div className="flex justify-center items-center text-1xl rounded-md bg-gray-300 shadow-lg p-4">
                    <PopupAddEbook onSubmit={handleSubmit_create} genre={array_genre}/>
                    </div>
                    {/* Add button */}
                </div>
                
                </div>
            </div>
        </>
    );
}

export default Admin;
