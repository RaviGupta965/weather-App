function WeatherProperties({
    name,value,logo
}){
    return(
        // <div className="w-1/2 flex justify-center m-5 border-2">
         <div className="flex md:w-1/2 w-fit  items-center h-fit justify-center ">
         <div className="w-fit h-fit flex  justify-start items-center sm:p-4 pl-10 py-3 px-6">
            <img src={logo} className="h-fit "/>
            <div className="flex flex-col w-fit min-w-28 p-2  justify-center">
                <h4 className="text-xl font-thin">
                    {value}
                </h4>
                <p className="font-thin opacity-80">
                    {name}
                </p>
            </div>
         </div>
            
         {/* </div> */}
            
        </div>
    );
}

export default WeatherProperties;