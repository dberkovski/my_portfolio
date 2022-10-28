import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import {BsFileEarmarkPersonFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (<>
                Linkedin <FaLinkedin size={30}/>
            </>),
            href: "https://linkedin.com/in/dogan-berk-yelkenci/",
            style: "rounded-tr-md"

        },
        {
            id: 2,
            child: (<>
                Github <FaGithub size={30}/>
            </>),
            href: "https://github.com/dberkovski",
            style: "rounded-tr-md"

        },
        {
            id: 3,
            child: (<>
                Mail <BiMailSend size={30}/>
            </>),
            href: "mailto:d.berkyelkenci@gmail.com",
            style: "rounded-tr-md"

        },
        {
            id: 4,
            child: (<>
                Resume <BsFileEarmarkPersonFill size={30}/>
            </>),
            href: "/assets/img.png",
            style: "rounded-br-md",
            downlad: true

        },
    ]
    return (<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id,child,href,style,donwload}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"}>
                        <a href={href} className="flex justify-between items-center w-full text-white" download={donwload} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                )
            )
            }

        </ul>
    </div>)
}
export default SocialLinks