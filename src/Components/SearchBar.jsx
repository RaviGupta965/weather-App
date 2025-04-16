import { useRef, useState } from "react";

function SearchBar({setCity}){
    const[help,setHelp] = useState("");
    
    const inputRef = useRef(null);

    const fun = (help)=>{
         setCity(help);
         inputRef.current.value ="";
        }
    
    return(
        <div className="h-14 lg:w-1/3 sm:w-4/5 md:w-3/5 w-11/12 rounded-md flex justify-center overflow-hidden ">
            <input type="text" 
            placeholder="Search your City" 
            className="h-full w-full px-5 py-5 outline-none border-3px text-lg  bg-white/40 backdrop-blur-sm"
            ref={inputRef}
            onChange={(e)=>{setHelp(e.target.value);}}
            onKeyDown={(e)=>{e.key=='Enter'?fun(help):''}}
            />
            <button className="text-black px-5 py-4 flex justify-center items-center bg-white rounded-sm"
            onClick={()=>{fun(help)}}
            >
                <i className="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    )
}

export default SearchBar;