const FindEvent = () => {
    return (
        <div>
            <div className="w-full h-20"></div>

            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-600">ALL ACTIVE EVENTS</h2>
            <br />
            <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-[10vw] p-4">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-4 lg:mb-0">
                    <img
                        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw]"
                        src={'a.png'}
                        alt="Event"
                    />
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
                    <button className="text-md md:text-lg lg:text-xl bg-yellow-400 w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[10vw] rounded h-10 md:h-12 lg:h-[3vw]">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FindEvent;
