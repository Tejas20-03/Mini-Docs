import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";




const Card = ({ data, reference }) => {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={.1}
            dragTransition={{bounceStiffness:100,bounceDamping:30}}
            className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
            <FaRegFileAlt />
            <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0 ">
                <div className="flex items-center justify-between mb-3 px-8 py-3">
                    <h5>{data.filesize}</h5>
                    <span className="rounded-full w-7 h-7 flex items-center justify-center bg-zinc-600">
                        {data.close ? <IoClose /> : <MdDownload size="0.9em" color="#fff" />}

                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center `}>
                            <h3 className="text-sm flex items-center justify-center font-semibold">{data.tag.tagtitle}</h3>
                        </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card