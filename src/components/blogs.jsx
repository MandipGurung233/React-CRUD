import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./blogs.css"

export const Blogs = ({Title, Description}) => {
  const navigate = useNavigate()
  return (
    <div className='card'>
        <div className='card-body'>         
              <img src=''/>
              <h4  onClick={()=>navigate("/blogsDetails")}>{Title}</h4>           
        </div>
    </div>
  )
}