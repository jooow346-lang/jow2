import React from "react";
import {Food} from './../data/foodData.js';






function FoodPage(){
  const sliderRef = React.useRef(null);
const [foodData, setFoodData] = React.useState(Food);
    console.log(foodData)








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
                    {
                    foodData.map((food) => (
                        <div className="flex flex-col justify-center items-center cursor-pointer w-50 " key={food.id}>
                            <img className="w-25 mb-0 " src=" ./../../public/rabbit-logo2.png" alt="food" />
                            <p>number {food.number}</p>
                        </div>
                    ))}
                   
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

                    {/* السلايدر *********************************************/}
                    <div
                        ref={sliderRef}
                        className="flex gap-5 overflow-x-hidden scroll-smooth px-16 ">
                    {
                    foodData.map((food) => (
                         <div className="relative min-w-[300px] h-[390px] bg-gray-200 rounded-3xl flex flex-col justify-center items-center cursor-pointer">
                            <img
                                className="w-80 top-0 absolute "
                                src="./../../public/rabbit-logo2.png"
                                alt="food"
                            />
                            <p className="text-3xl font-bold mt-5 absolute bottom-33">
                                number <span className="font-bold text-gray-900"> {food.number}</span>
                            </p>
                            <p className="absolute bottom-27 font-arial text-xl ">
                                color <span className="font-bold text-gray-900">{food.color}</span>
                            </p>
                            <p className="absolute bottom-20 font-arial text-xl ">
                                foodAmount <span className="font-bold text-gray-900">{food.foodAmount}</span>
                            </p>
                            <p className="absolute bottom-14 font-arial text-xl ">
                                gender <span className="font-bold text-gray-900">{food.male ? "male" : "female"}</span>
                            </p>
                            <button className="font-bold w-35 h-12  rounded-3xl bg-[#0071e3] cursor-pointer text-white bottom-1 absolute">
                                Edit
                            </button>
                        </div>
                    ))        
                       
                    }   
                    </div>

                    {/* سهم اليمين **************************************************************/}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full w-12 h-12 text-2xl"
                    >
                        →
                    </button>

                </div>

                      {/*  ******************************************************************************************/}
            </main>
            <footer className="mt-10 flex flex-col justify-center items-center">
                <div className="relative">
                    <img className="justify-center w-250 h-120 rounded-3xl" src="./../../public/Food for rabbits and guinea pigs_ Nutrition-seeds-for-rabbits-and-beetles.jpeg" alt="logo" />
                    <p className="absolute bottom-80 left-100 font-arial -font-bold text-4xl text-black ">  type of food </p>
                    <p className="absolute bottom-70 left-105 font-arial -font-bold text-xl text-black ">
                        super rabbit food
                    </p>
                    <button className="font-bold w-45 h-18 bottom-90 left-100  rounded-4xl bg-[#0071e3] cursor-pointer text-white bottom-1 absolute">
                        change food type
                    </button>
                </div>
            </footer>
        </React.Fragment>
    );

}
export default FoodPage;