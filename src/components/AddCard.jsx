import React, {useState} from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";
import { motion } from "framer-motion"
function AddCard({reference, handleAddNote}) {

    const [noteText, setNoteText] = useState("")

    const characterLimit = 200;

    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }else{
            alert("Your Character Limit Has Exhausted")
        }
    }

    function handleSubmit(){
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        } else{
            alert("Enter a valid Text")
        }
    }

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-75 rounded-[45px] bg-[#292524]/95 text-[#F2F2F2] px-8 py-10 overflow-hidden">
            <h4 className=' text-3xl mb-3'>Add note</h4>
            <FaRegFileAlt />
            <textarea 
            className='text-sm leading-tight mt-5 w-[12vw] h-[7.5vw] font-semibold '
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>

            <div className="footer absolute bottom-0  bg-[rgb(225,143,29)] w-full h-12  px-8 left-0 ">
                <div className='flex justify-between items-center py-3 mb-5'>
                    <h5 className='font-semibold'><small>{characterLimit - noteText.length} Remaining</small></h5>
                    <span className="w-7 h-7 bg-[#F2F2F2] hover:bg-red-300 rounded-full flex items-center justify-center">
                    <MdNoteAdd className='cursor-pointer text-black' onClick={handleSubmit}/>
                    </span>
                </div>
            </div>
        </motion.div>
  )
}

export default AddCard