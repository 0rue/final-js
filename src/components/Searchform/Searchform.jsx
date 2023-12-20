// import React, { useRef, useEffect } from "react";
// import {FaSearch} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context";
// import "./Searchform.css";

// const Searchform = () => {
//     const {setSearchTerm, setResultTitle} = useGlobalContext();
//     const search = useRef('');
//     const navigate = useNavigate();

//     useEffect(() => searchText.current.focus(), []);
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         let tempSeacrhTerm = searchText.current.value.trim();
//         if((tempSeacrhTerm.replace(/[^\w\s]/gi,"")).length === 0){
//             setSearchTerm('the lost world');
//             setResultTitle("Please Enter Something ...");
//         }else{
//             setSearchTerm(searchText.current.value);
//         }

//         navigate("/book");
//     };

//     return (
//         <div className='search-form'>
//           <div className='container'>
//             <div className='search-form-content'>
//               <form className='search-form' onSubmit={handleSubmit} >
//                 <div className='search-form-elem flex flex-sb bg-white'>
//                   <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} />
//                   <button type = "submit" className='flex flex-c' onClick={handleSubmit} >
//                     <FaSearch className='text-purple' size = {32} />
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )
// }
// export default Searchform

import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./Searchform.css";    

const Searchform = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const [searchText, setSearchText] = useState(''); // Define searchText state
  const navigate = useNavigate();

  useEffect(() => searchTextRef.current.focus(), [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.trim(); // Access the value directly
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigate("/book");
  };

  const searchTextRef = useRef(); // Create a ref

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder='The Lost World ...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                ref={searchTextRef} // Assign the ref here
              />
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
