const MyContacto=()=>{
    return(
        <>
         <div className="hidden md:block">
            <img src={require('../images/tarobubbletea-removebg-preview.png')} alt=""></img>
        </div>
        <div className="flex flex-col justify-center items-center py-10 md:py-0">
            <h1 className="font-bold text-[#5b4b45] text-2xl">Join in and get 15% off!</h1>
            <p className="text-center text-sm md:text-lg lg:text-xl pb-4 pt-4 text-[#5b4b45]">Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                Cumque, exercitationem.</p>
            <form className="flex flex-col md:flex-row items-center justify-center">
                <input type="text" className="py-2 px-5  border-2 border-[#5b4b45] rounded-lg"
                    placeholder="Email address"></input>
                <button
                    className="py-2 px-5 ml-1 mt-3 md:mt-0 rounded-lg bg-[#5b4b45] hover:bg-black hover:bg-opacity-30 text-white font-bold">Subscribe</button>
                
            
            </form>
        </div>
        <div className="hidden md:block">
            <img src={require('../images/coffeebubbletea-removebg-preview.png')} alt=""></img>
        </div>
        
        
        </>
    );
}

export default MyContacto