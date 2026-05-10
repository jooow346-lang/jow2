import React from 'react';
import './../styles/rabbite.css';
function Rabbite() {
    return(
<React.Fragment>
    <header className='fixed top-0 left-0 z-50 flex flex-row items-center h-20 bg-[#ded2d2] justify-center gap-8 w-full '>
        <div className='flex flex-row justify-center items-center'> 
        <img className='w-20 ' src='./../../public/rabbit-logo5.png' alt="logo" />
        <p className='text-xl font-bold font-arial '>rabbit tracker app</p>
        </div>
        <button className='text-xl font-arial mx-5 '>
            food
        </button>
        <button className='text-xl font-arial mx-5 '>
            cure
        </button>
        <button className='text-xl font-arial mx-5 '>
            clean
        </button>
        <button className='text-xl font-arial mx-5 '>
            birth 
        </button>
        <button className='text-xl font-arial mx-5 '>
            ablactation
        </button>
        
</header>
        <div className="relative w-full mt-20">
            <img
                className="w-full h-screen object-cover"
                src="/Two White And Brown Rabbits Sitting Together In A Forest, Pictures Of Rabbits, Rabbit, Cute Background Image And Wallpaper for Free Download.jpeg"
                alt="cover"
            />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center">
            
            <h1 className="text-5xl font-bold text-white">
            Rabbit Control System
            </h1>

            <p className="w-[80%] text-xl text-white">
            this website made to track over the rabbits condition
            by tracking food, cure, clean, birth and ablactation
            </p>

            <button className="rounded-xl cursor-pointer bg-white px-8 py-3 text-xl font-bold transition hover:scale-105">
            Get Start
            </button>

        </div>
        </div>
    <main className=' mt-5'>

        {/* food */}
      <section className='flex flex-col justify-center items-center bg-[#d7d7d8] mb-4'>
        <p className='font-bold text-6xl font-arial'>food</p>
        <p className='text-center w-120 font-arial text-4xl '>the food of the rabbits and amounts of it</p>
        <div>
            <button className='font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white m-4'>
                learn more
            </button>
            <button className='font-bold  w-35 h-12 rounded-3xl bg-white cursor-pointer text-[#0071e3] m-4 border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition'>
                add more 
            </button>
        </div>
        <img className='w-80 ' src="./../../public/Bunny Eating Carrots.jpeg" alt="food" />
      </section>


        {/* cure */}

     <section className='flex flex-col justify-center bg-[#d7d7d8] items-center mb-4 '>
        <p className='font-bold text-6xl font-arial'> 
            cure
        </p>
     <p className='text-center w-120 font-arial text-4xl '> it's cure for the rabbits and check out</p>
        <div>
            <button className='font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white m-4'>
                learn more
            </button>
            <button className='font-bold  w-35 h-12 rounded-3xl bg-white cursor-pointer text-[#0071e3] m-4 border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition'>
                add more 
            </button>
        </div>
        <img className='w-85 h-100' src="./../../public/Rabbit Care Tips.jpeg" alt="cure" />
      </section>

        {/* clean */}

    <section className='flex flex-col justify-center bg-[#d7d7d8] items-center mb-4 '>
        <p className='font-bold text-6xl font-arial'> 
            clean
        </p>
         <p className='text-center w-120 font-arial text-4xl '> it's for the rabbits and wash the dish</p>
        <div>
            <button className='font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white m-4'>
                learn more
            </button>
            <button className='font-bold  w-35 h-12 rounded-3xl bg-white cursor-pointer text-[#0071e3] m-4 border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition'>
                add more 
            </button>
        </div>
        <img className='w-85 h-100' src=" ./../../public/download.jpeg" alt="cure" />
    </section>

{/* birth and ablactation */}
        <section className='flex flex-row justify-center items-center gap-4 '>
            <div className='flex flex-col justify-center bg-[#d7d7d8] items-center mb-4 w-1/2'>
                <p className='font-bold text-6xl font-arial'> 
                    birth
                </p>
                <p className='text-center w-120 font-arial text-4xl '> birth day and number of baby and age</p>
                <div>
                    <button className='font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white m-4'>
                        learn more
                    </button>
                    <button className='font-bold  w-35 h-12 rounded-3xl bg-white cursor-pointer text-[#0071e3] m-4 border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition'>
                        add more 
                    </button>
                </div>
                <img className='w-85 h-100' src=" ./../../public/rabbit.jpeg" alt="cure" />
            </div>
            <div className='flex flex-col justify-center bg-[#d7d7d8] items-center mb-4 w-1/2'>
                <p className='font-bold text-6xl font-arial'> 
                    ablactation
                </p>
                <p className='text-center w-120 font-arial text-4xl '> ablactation baby and time of birth of brothers </p>
                <div>
                    <button className='font-bold w-35 h-12 rounded-3xl bg-[#0071e3] cursor-pointer text-white m-4'>
                        learn more
                    </button>
                    <button className='font-bold  w-35 h-12 rounded-3xl bg-white cursor-pointer text-[#0071e3] m-4 border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition'>
                        add more 
                    </button>
                </div>
                <img className='w-85 h-100' src=" ./../../public/download1.jpeg" alt="cure" />
            </div>


        </section>


    </main>   
</React.Fragment>    
    );
}
export default Rabbite;