import React from "react";
function FoodPage(){
  const sliderRef = React.useRef(null);

    function nextSlide() {
        sliderRef.current.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    }

    function prevSlide() {
        sliderRef.current.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    }
    return(
        <React.Fragment>
            <header className='fixed top-0 left-0 z-50 flex flex-row items-center h-20 bg-[#ded2d2] justify-center gap-8 w-full mb-20 '>
                <div className='flex flex-row justify-center items-center'> 
                <img className='w-20 ' src='./../../public/rabbit-logo5.png' alt="logo" />
                <p className='text-xl font-bold text-black font-arial '>rabbit tracker app</p>
                </div>
                <button className='text-xl text-black font-arial mx-5 '>
                    food
                </button>
                <button className='text-xl font-arial text-black  mx-5 '>
                    cure
                </button>
                <button className='text-xl font-arial text-black  mx-5 '>
                    clean
                </button>
                <button className='text-xl font-arial text-black  mx-5 '>
                    birth 
                </button>
                <button className='text-xl font-arial text-black  mx-5 '>
                    ablactation
                </button>
                    
            </header>
            <main className="mt-20">
                <p className="text-8xl font-bold font-arial m-8 mt-20 text-black ">
                    food
                </p>
                <section className="flex flex-row gap-3 justify-start items-center">   
                    <div className="flex flex-col justify-center items-center cursor-pointer  ">
                        <img className="w-50 mb-0 " src=" ./../../public/rabbit-logo2.png" alt="food" />
                        <p>number 1</p>
                    </div>
                    <div className="flex flex-col justify-center items-center cursor-pointer  ">
                        <img className="w-50 mb-0 " src=" ./../../public/rabbit-logo2.png" alt="food" />
                        <p>number 2</p>
                    </div>
                    <div className="flex flex-col justify-center items-center cursor-pointer  ">
                        <img className="w-50 mb-0 " src=" ./../../public/rabbit-logo2.png" alt="food" />
                        <p>number 3</p>
                    </div>
                    <div className="flex flex-col justify-center items-center cursor-pointer  ">
                        <img className="w-50 mb-0 " src=" ./../../public/rabbit-logo2.png" alt="food" />
                        <p>number 4</p>
                    </div>
                </section>    
                 {/*  ******************************************************************************************/}
                <div className="relative w-full mt-10">

                    {/* سهم الشمال */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full w-12 h-12 text-2xl"
                    >
                        ←
                    </button>

                    {/* السلايدر */}
                    <div
                        ref={sliderRef}
                        className="flex gap-5 overflow-x-hidden scroll-smooth px-16 "
                    >

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 1
                            </p>
                        </div>

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 2
                            </p>
                        </div>

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 3
                            </p>
                        </div>

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 4
                            </p>
                        </div>

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 5
                            </p>
                        </div>

                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 6
                            </p>
                        </div>
                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 7
                            </p>
                        </div>
                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 8
                            </p>
                        </div>
                        <div className="min-w-[300px] h-[350px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-44"
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-2xl font-bold mt-5">
                                number 9
                            </p>
                        </div>

                    </div>

                    {/* سهم اليمين */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full w-12 h-12 text-2xl"
                    >
                        →
                    </button>

                </div>

                      {/*  ******************************************************************************************/}
            </main>

        </React.Fragment>
    );

}
export default FoodPage;