import React from "react";

import spotify from '../assets/portfolio/spotfy.jpg'
import cvIcon from '../assets/portfolio/newcv.png'
import serverImage from '../assets/portfolio/serverImage.png'



const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: cvIcon,
            link:"https://github.com/dberkovski/my_portfolio",
            text: "My Portfolio"

        },
        {
            id: 2,
            src: spotify,
            link:"https://github.com/dberkovski/spotify-clone",
            text:"Spotify Clone"
        },  {
            id: 3,
            src: serverImage,
            link:"https://jsfiddle.net/dberkovski/wy8udv25/9/",
            text:"Server Resource Monitoring Fiddle"
        },
    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-cyan-900 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of m work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({id, src, link,text}) => (
                                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                                    <div className="items-center flex justify-center ">
                                        <a href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:border hover:border-indigo-800 hover:shadow-gray-600 hover:border-r-4">Code</a>
                                        <div className="w1/2 px-6 py-3 m-4">{text}</div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        </div>
    )
}
export default Portfolio