import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

export default function Card({id,text,date,handleDeleteNote, reference}) {

    

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-75 rounded-[45px] bg-[#292524]/95 text-[#F2F2F2] px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm leading-tighter break-words mt-5 font-semibold'>{text}</p>
            <div className="footer absolute bottom-0  bg-[#E11D48] w-full h-12  px-8 left-0 ">
                <div className='flex justify-between items-center py-3 mb-5'>
                    <h5 className='font-semibold'>{date}</h5>
                    <span className="w-7 h-7 bg-[#F2F2F2] hover:bg-red-300 rounded-full flex items-center justify-center">
                    <IoClose className='cursor-pointer text-black' onClick={()=>handleDeleteNote(id)}/>
                        {/* {data.close ? <IoClose className='cursor-pointer text-black' onClick={()=>handleDeleteNote(id)}/> : <LuDownload size=".8em" color='#000' /> } */}
                        
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
