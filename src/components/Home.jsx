import React from "react"
import berkovski from '../assets/img.png'
import {Link} from "react-scroll"
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-skye to-cyan-900">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm Web Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I'm Berk Yelkenci from Izmir and 25 years old.I have working as Web developer for 2 years.
                    </p>

                    <div>
                        <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-cyan-500 hover:scale-105" >
                            Portfolio
                            <span className="mx-2 group-hover:rotate-90 duration-300">
                         <FaArrowRight size={25} className="ml-1"/>
                    </span>
                        </Link>
                    </div>

                </div>
                <div className="rounded-l">
                    <img src={berkovski} alt="my_picture" className="animate-bounce duration-700 rounded-2xl mx-auto w-2/3 md:w-full hover:scale-105 p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]"/>
                </div>

            </div>


        </div>
    )
}

export default Home