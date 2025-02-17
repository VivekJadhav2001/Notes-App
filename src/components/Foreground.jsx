import React from 'react'
import Card from './Card'
import { useRef } from 'react'
import AddCard from './AddCard'
// import { nanoid } from 'nanoid';

function Foreground({notes, handleDeleteNote, handleAddNote}) {

    const ref =useRef(null)

    // const data = [
    //     {
    //         id:nanoid(),
    //         description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //         fileSize : ".9mb",
    //         downloadSwitch: true,
    //         close:true,
    //     },
    //     {
    //         id:nanoid(),
    //         description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //         fileSize : ".9mb",
    //         downloadSwitch: true,
    //         close:true,
    //     },
    //     {
    //         id:nanoid(),
    //         description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //         fileSize : ".9mb",
    //         downloadSwitch: true,
    //         close:true,
    //     },
    // ]

    // function deleteNote(id){
    //     const newData = data.filter((note) => note.id !== id )
    //     data.remove(newData)
    // }

  return (
    
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6 ">
            {notes.map((note) =>
            <Card
            id = {note.id}
            text= {note.text}
            date={note.date} 
            handleDeleteNote={handleDeleteNote} 
            reference={ref}
            />
            )}
            <AddCard reference={ref} handleAddNote={handleAddNote}/>




            {/* {data.map((item, index) => (
                
                <Card data = {item} reference={ref}/>
                // Note: add empty fragment to this card here and add this bellow card of menu
                // a card where useage and menu is given so that user understand the application
            ))} */}
        </div>
    
  )
}

export default Foreground