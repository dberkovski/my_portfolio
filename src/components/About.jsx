import React from 'react'



const About = () => {
    return (
        <div name="about" className="h-screen w-full bg-gradient-to-b from-cyan-900 via-skye to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <br/>
                <p id="about_div" className="text-xl mt-20 border-2 p-4 shadow-2xl rounded-2xl">
                    Extremely passionate and motivated software developer in
                    field. Analytical and detail oriented, creative and adaptive. Currently working on payment
                    system for new
                    generation cash register project.

                    I have working on new generate smart electronic cash register project which include
                    own unique database based MongoDB. To develop , Pyhton's
                    framework Flask is using as restful API with MVC architecture.
                    I am responsible for frontend developing at this project.
                </p>
            </div>


        </div>
    )
}
export default About