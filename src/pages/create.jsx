import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import "../css/create.css"
import { FormLabel, TextField } from '@mui/material';
import axios from 'axios';
export const Create = () => {
    // const [isPlaying,setIsPlaying] = useState(false)
    
    // const [a,setA] = useState(0)    
    // const [b,setB] = useState(0)
    


    // useEffect(()=>{
    //     console.log("hello")
    // database bata fetch datas

    // },[])
    // useEffect(()=>{
    //     // database bata fetch 
    //     console.log("Changed occured value of a is",a)
    // },[a])
    // useEffect(()=>{
    //     console.log(" I m running")
    // })

    const [title,setTitle] = useState(null)
    const [description,setDescription] = useState(null)
    const [image,setImage] = useState(null)
   

   async function createBlog(e){
        e.preventDefault()
        const data = {
            title : title,
            description : description,
            image : image
        }
        const response = await axios.post("https://api-test-hunchha089.onrender.com/blog",data,{
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        })
        console.log(response)
    }

  return (
    <div className="row justify-content-center">
        {/* <button onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying ? "stop Playing":"Lets play"}</button> */}
        {/* <button onClick={()=>setA(a+1)} >Count {a}</button> */}
        {/* <button onClick={()=>setB(b+1)} >Count {b}</button> */}
        
        <div className="col-md-4">
            <div className="card m-5">
                <div className="card-body">
                    <form  className='blogs' onSubmit={(e)=>createBlog(e)}>
                        <div className='create'>
                            <FormLabel>BlogName: </FormLabel>
                            <TextField variant="outlined" onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className='create'>
                            <FormLabel>Description: </FormLabel>
                            <TextField multiline maxRows={10} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className='create'>
                            <FormLabel>Image:</FormLabel>
                            <input name="image" type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                        </div>
                        <Button type='submit' variant='contained'>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}