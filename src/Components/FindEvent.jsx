import Nav from "./Nav";

const FindEvent = () => {
    return (
        
        <div className="">
             
            <div className="w-full h-20 bg-red-200 mb-2 bg-gradient-to-b from-purple-200 via-purple-50 to-white clip-hero">  <Nav/></div>
            

            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-600">ALL ACTIVE EVENTS</h2>
            <br />
            <br />
            {/* ////// */}
            <div className=" mb-4 shadow-lg w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-[10vw] p-4 bg-gray-100">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:flex-col lg:gap-5 flex items-center justify-center lg:justify-end mb-4 lg:mb-0">
                    <img
                        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw]"
                        src={'a.png'}
                        alt="Event"
                    />
                    <div className="flex gap-[5vw] items-center">
                        <h3><i class="ri-heart-3-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-message-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-share-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                    </div>
                </div>
                {/* Event Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-start text-center lg:text-left">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h1 className="text-gray-700 text-2xl md:text-3xl font-bold">Test Event</h1>
                        <h3 className="text-gray-600 text-md md:text-lg">.Net</h3>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 my-2 text-gray-600">
                        <h4 className="flex items-center gap-2">
                            <i className="ri-map-pin-2-line text-lg md:text-xl lg:text-2xl"></i>
                            Type: In Person
                        </h4>
                        <h4 className="flex items-center gap-2">
                            <i className="ri-team-fill text-lg md:text-xl lg:text-2xl"></i>
                            Audience: Devs
                        </h4>
                    </div>
                    <button className="text-md md:text-lg lg:text-xl text-white bg-[#A485F9] w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[10vw] rounded h-10 md:h-12 lg:h-[3vw]">
                        Register
                    </button>
                </div>
            </div>
            <div className="mb-4 shadow-lg w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-[10vw] p-4 bg-gray-100">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:flex-col lg:gap-5 flex items-center justify-center lg:justify-end mb-4 lg:mb-0">
                    <img
                        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw]"
                        src={'a.png'}
                        alt="Event"
                    />
                    <div className="flex gap-[5vw] items-center">
                        <h3><i class="ri-heart-3-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-message-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-share-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                    </div>
                </div>
                {/* Event Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-start text-center lg:text-left">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h1 className="text-gray-700 text-2xl md:text-3xl font-bold">Test Event</h1>
                        <h3 className="text-gray-600 text-md md:text-lg">.Net</h3>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 my-2 text-gray-600">
                        <h4 className="flex items-center gap-2">
                            <i className="ri-map-pin-2-line text-lg md:text-xl lg:text-2xl"></i>
                            Type: In Person
                        </h4>
                        <h4 className="flex items-center gap-2">
                            <i className="ri-team-fill text-lg md:text-xl lg:text-2xl"></i>
                            Audience: Devs
                        </h4>
                    </div>
                    <button className="text-md md:text-lg lg:text-xl text-white bg-[#A485F9] w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[10vw] rounded h-10 md:h-12 lg:h-[3vw]">
                        Register
                    </button>
                </div>
            </div>
            <div className="mb-4 shadow-lg w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-[10vw] p-4 bg-gray-100">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:flex-col lg:gap-5 flex items-center justify-center lg:justify-end mb-4 lg:mb-0">
                    <img
                        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw]"
                        src={'a.png'}
                        alt="Event"
                    />
                    <div className="flex gap-[5vw] items-center">
                        <h3><i class="ri-heart-3-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-message-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                        <h3><i class="ri-share-2-line text-2xl  font-[500] text-gray-700 cursor-pointer"></i></h3>
                    </div>
                </div>
                {/* Event Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-start text-center lg:text-left">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h1 className="text-gray-700 text-2xl md:text-3xl font-bold">Test Event</h1>
                        <h3 className="text-gray-600 text-md md:text-lg">.Net</h3>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 my-2 text-gray-600">
                        <h4 className="flex items-center gap-2">
                            <i className="ri-map-pin-2-line text-lg md:text-xl lg:text-2xl"></i>
                            Type: In Person
                        </h4>
                        <h4 className="flex items-center gap-2">
                            <i className="ri-team-fill text-lg md:text-xl lg:text-2xl"></i>
                            Audience: Devs
                        </h4>
                    </div>
                    <button className="text-md md:text-lg lg:text-xl text-white bg-[#A485F9] w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[10vw] rounded h-10 md:h-12 lg:h-[3vw]">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FindEvent;
