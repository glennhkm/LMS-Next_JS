"use client"

import { useState } from "react"
import { Input } from "./input"
import { Pencil } from "lucide-react"
import axios from "axios";
import toast from "react-hot-toast";


export const FormAttribute = ({attributeName, attributeBody, courseId}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [attribute, setAttribute] = useState(attributeBody); //ini untuk nilai yang bakal tampil di input dan akan selalu keganti setiap onchange

    const capitalCase = (str) => {
        return str.replace(/\b\w/g, (letter) => letter.toUpperCase())
    }

    const submitHandler = async (e) => {
        const courseAttribute = { [attributeName]: capitalCase(attribute) };
        try {
            await axios.patch(`/api/courses/${courseId}`, courseAttribute);
            toast.success("Course updated");
        } catch (error) {
            toast.error("Something went wrong");  
            console.error(error.response);
        }
        setIsEditing(false);
    }

    const attributeEditingHandler = () => {
        setAttribute(attributeBody);
        setIsEditing(!isEditing);
    }

    return (
        <div className="flex flex-col gap-3 w-full sm:w-1/2 bg-primary rounded-md text-sm px-3 py-2">
            <div className="flex justify-between font-semibold text-white">
                <p>Course {capitalCase(attributeName)}</p>
                <button onClick={attributeEditingHandler} className="flex gap-2 items-center rounded-md duration-200 hover:text-xs">
                    {!isEditing ? 
                        <>
                            <Pencil width={15} height={15}/>
                            <p>Edit</p>
                        </> : 
                        <>
                            <p>Cancel</p>
                        </>
                    }
                </button>
            </div>
            { !isEditing ?
                <p className="text-white text-xs">
                    {attributeBody || '...'}
                </p>
                :   
                <form className="flex gap-1" onSubmit={submitHandler} >
                    <Input name="attribute" className='text-xs h-8' value={attribute} onChange={(e) => setAttribute(e.target.value)}/>
                    <button type="submit" className="text-white text-xs bg-black bg-opacity-10 hover:bg-opacity-40 duration-200 rounded-md px-2">Submit</button>
                </form>
            }   
        </div>
    )
}   

