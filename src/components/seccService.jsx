const MyServices =()=>{
    return(
        <>
         <h1 className="text-center font-bold">Do you want to try our flavors?</h1>
        <div className="flex flex-wrap md:flex-row w-full">
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble1.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble2.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble3.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble4.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble7.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={require('../images/bubble6.png')} className="w-32 h-32" alt=""></img>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        
        </>

    );
}

export default MyServices