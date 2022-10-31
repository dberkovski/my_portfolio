import React from "react";

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import redux from '../assets/img_2.png'
import django from '../assets/img_1.png'
import flask from '../assets/portfolio/img.png'
import jquery from '../assets/pngegg.png'
import bootstrap from '../assets/bootstrap-logo.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-sky-900'
        },
        {
            id:5,
            src:django,
            title:'Django',
            style:'shadow-green-900'
        },
        {
            id:9,
            src:flask,
            title:'Flask',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:jquery,
            title:'Jquery',
            style:'shadow-sky-800'
        },
        {
            id:7,
            src:bootstrap,
            title:'bootstrap',
            style:'shadow-purple-800'
        },
        {
            id:8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-blue-500'
        },   {
            id:10,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },  {
            id:10,
            src:redux,
            title:'Redux',
            style:'shadow-purple-800'
        },
    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-cyan-900 to-black w-full md:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Experience </p>
                    <p className="py-6"> These are the technologies I've worked with </p>
                </div>
                <div className="w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techs.map(({id,src,title,style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto"/>
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
export default Experience