import React from "react";
import {Food} from './../data/foodData.js';


function FoodPage(){
const sliderRef = React.useRef(null);
const [foodData, setFoodData] = React.useState(Food);
const [currentFood,setCurrentFood] = React.useState(25000);
const [boolcurrent,setBoolCurrentFood] = React.useState(false);
// زود دي في أول الـ component
const [showAddModal, setShowAddModal] = React.useState(false);
const [newRabbit, setNewRabbit] = React.useState({
    number: "",
    color: "",
    male: true,
    foodAmount: ""
});
const inputRefs = React.useRef([]);


function openAddModal() {
    setNewRabbit({ number: "", color: "", male: true, foodAmount: "" });
    setShowAddModal(true);
}

function handleNewRabbitChange(field, value) {
    setNewRabbit(prev => ({ ...prev, [field]: value }));
}

function handleAddKeyDown(e, index) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (index + 1 < inputRefs.current.length) {
            inputRefs.current[index + 1].focus();
        }
    }
}

function confirmAddRabbit() {
    if (!newRabbit.number || !newRabbit.color || !newRabbit.foodAmount) return;
    const newId = foodData.length > 0 ? Math.max(...foodData.map(f => f.id)) + 1 : 1;
    const rabbitToAdd = {
        id: newId,
        number: Number(newRabbit.number),
        color: newRabbit.color,
        male: newRabbit.male,
        female: !newRabbit.male,
        foodAmount: Number(newRabbit.foodAmount)
    };
    setFoodData(prev => [...prev, rabbitToAdd]);
    setShowAddModal(false);
}




const totalFood = foodData.reduce((sum, item) => {
  return sum + item.foodAmount;
}, 0);

function BoolCurrentChange(){
    setBoolCurrentFood(!boolcurrent);
}
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
                <section>
                    <p className="font-bold font-arial text-black text-5xl w-200 ">
                        the amount of food i have and i must have every day
                    </p>
                    <div className="flex flex-row items-center gap-80 mt-10">
                       {
                        boolcurrent?(
                            <input type="number"
                            className="border-none outline-none focus:outline-none focus:ring-0 font-arial text-black text-2xl"
                            value={currentFood}
                            onChange={(e)=>{setCurrentFood(e.target.value);}}
                            onBlur={()=>{setBoolCurrentFood(false)}}
                            onKeyDown={(e)=>{if(e.key=="Enter"){e.target.blur()}}}
                           
                            />
                        ):(
                            <p className="font-arial text-black text-2xl ">the amount of food i have {currentFood}</p>
                        )

                       }
                        <p className="font-arial text-black text-2xl ">
                            food i must have{totalFood}
                        </p>
                     </div>
                    <div className="flex flex-row items-center gap-65 mt-8">
                        <button onClick={BoolCurrentChange} className="font-bold w-45 h-12   rounded-4xl bg-[#0071e3] cursor-pointer text-white  ">
                            Edit amount of food
                        </button>
                        <button onClick={openAddModal} className="font-bold w-45 h-12  rounded-4xl bg-[#0071e3] cursor-pointer text-white  ">
                            Edit conusmed food
                        </button>
                    </div>
                </section>

            </footer>
           {showAddModal && (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-3xl p-10 flex flex-col gap-5 min-w-[350px]">
            <p className="text-2xl font-bold text-black">Add new rabbit</p>

            {/* number */}
            <div className="flex flex-row items-center gap-4">
                <p className="text-black font-arial w-28">Number:</p>
                <input
                    ref={el => inputRefs.current[0] = el}
                    type="number"
                    className="border-2 border-gray-300 rounded-xl px-3 py-2 text-black text-xl outline-none focus:border-[#0071e3] w-32"
                    value={newRabbit.number}
                    onChange={e => handleNewRabbitChange("number", e.target.value)}
                    onKeyDown={e => handleAddKeyDown(e, 0)}
                    placeholder="e.g. 5"
                />
            </div>

            {/* color */}
            <div className="flex flex-row items-center gap-4">
                <p className="text-black font-arial w-28">Color:</p>
                <input
                    ref={el => inputRefs.current[1] = el}
                    type="text"
                    className="border-2 border-gray-300 rounded-xl px-3 py-2 text-black text-xl outline-none focus:border-[#0071e3] w-32"
                    value={newRabbit.color}
                    onChange={e => handleNewRabbitChange("color", e.target.value)}
                    onKeyDown={e => handleAddKeyDown(e, 1)}
                    placeholder="e.g. black"
                />
            </div>

            {/* gender */}
            <div className="flex flex-row items-center gap-4">
                <p className="text-black font-arial w-28">Gender:</p>
                <select
                    className="border-2 border-gray-300 rounded-xl px-3 py-2 text-black text-xl outline-none focus:border-[#0071e3] w-32"
                    value={newRabbit.male ? "male" : "female"}
                    onChange={e => handleNewRabbitChange("male", e.target.value === "male")}
                >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>

            {/* foodAmount */}
            <div className="flex flex-row items-center gap-4">
                <p className="text-black font-arial w-28">Food Amount:</p>
                <input
                    ref={el => inputRefs.current[2] = el}
                    type="number"
                    className="border-2 border-gray-300 rounded-xl px-3 py-2 text-black text-xl outline-none focus:border-[#0071e3] w-32"
                    value={newRabbit.foodAmount}
                    onChange={e => handleNewRabbitChange("foodAmount", e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") confirmAddRabbit(); }}
                    placeholder="e.g. 200"
                />
            </div>

            <div className="flex flex-row gap-4 mt-4">
                <button
                    onClick={confirmAddRabbit}
                    className="font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white"
                >
                    Add ✓
                </button>
                <button
                    onClick={() => setShowAddModal(false)}
                    className="font-bold w-35 h-12 rounded-3xl bg-gray-400 cursor-pointer text-white"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
)}

        </React.Fragment>
    );

}
export default FoodPage;