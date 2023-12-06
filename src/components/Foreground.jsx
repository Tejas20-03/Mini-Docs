import { useRef, useState } from "react"
import Card from "./Card"


const Foreground = () => {
    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagtitle: "Download Now",
                tagcolor: "green"
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagtitle: "Download Now",
                tagcolor: "green"
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagtitle: "Download Now",
                tagcolor: "blue"
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagtitle: "Download Now",
                tagcolor: "green"
            }
        },
    ]
    return (
        <div ref={ref} className="fixed z-[3] w-full h-full top-0 left-0 flex gap-10 flex-wrap p-5">
            {data.map((item,index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground