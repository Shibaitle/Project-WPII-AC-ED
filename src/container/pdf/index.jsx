import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link} from 'react-router-dom';


import { FaSearch, FaCaretDown, FaCaretUp, FaPlus, FaMinus, FaPrint } from "react-icons/fa";


import fetchArrayBasicInfo from "../../../api/fetch/fetchArrayBasicInfo";
import fetchPdf from "../../../api/fetch/fetchPdf";


import AntButton from '../../components/ant_btn/index';

function Pdf() {
  // User data
  
  const [user_data, setUser_data] = useState({});
  const [url_default, setUrl_default] = useState("https://i.pinimg.com/564x/7e/77/03/7e7703a354fb19582c5ae29224206957.jpg");
  const [array_basic_data, setArray_basic_data] = useState({
      EbookTitle: ["ebook_title1"],
      image: ["base64Image bra bra bra ant mai oak"],
      genre_2d_array: [["dasdsad"]],
      sum_view_array: [0],
      author_name_array: ["name"]
  });
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfData, setPdfData] = useState(null);

  const { ebook_title } = useParams();
  const [f, forceUpdate] = useState();
  const navigate = useNavigate();

  const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
      let isMount = true;
      if (isMount) {
          axios.get(`http://localhost:8000/`).then((response) => {
              if (response.data.username) {
                  axios.get(`http://localhost:8000/api/user_specific_info/?username=${response.data.username}`)
                      .then(user_specific_info => {
                          setUser_data(user_specific_info.data);
                      });
              } else {
                  setUser_data({ username: "Guest login" });
              }
          });

          fetchArrayBasicInfo().then(ebook => {
              setArray_basic_data(ebook);
          });

          fetchPdf(ebook_title).then(pdf => {
              setPdfData(pdf);
          });
      }
      return () => {
          isMount = false;
      };
  }, [f]);

  return (
      <>
          <div className="flex w-screen h-screen">
              {/* Sidebar */}
              <div className="w-1/5 bg-gray-800 text-white p-4 flex flex-col space-y-8 ">
                  <AntButton
                      label="ย้อนกลับไปหน้าแรก"
                      onClick={() => navigate(`/detail/${ebook_title}`)}
                      type="default"
                      size="middle"
                  />

                  <div className="flex flex-col space-y-2">
                      <label className="text-sm">Page</label>
                      <div className="flex justify-between items-center">
                          <button className="text-lg">{"<"}</button>
                          <span className="border-2 p-4 w-48 text-center">1</span>
                          <button className="text-lg">{">"}</button>
                      </div>
                  </div>

                  <button className="bg-gray-600 p-2 rounded">Long Strip</button>
                  <button className="bg-gray-600 p-2 rounded">Left To Right</button>
                  <button className="bg-gray-600 p-2 rounded">Header Hidden</button>
              </div>

              {/* PDF Viewer */}
              <div className="w-4/5">
                  <iframe src={pdfData} className="h-screen w-full" onLoadSuccess={onDocumentLoadSuccess} />
              </div>
          </div>
      </>
  );
}

export default Pdf;