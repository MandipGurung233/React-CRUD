import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/blogs.css"

export const Blogs = ({Title, Path}) => {
  const navigate = useNavigate()
  return (
    <div className='card'>
        <div className='card-body'>         
              <img src={Path} className="App-logo" alt="logo"/>
              <h4  onClick={()=>navigate("/blogsDetails")}>{Title}</h4>           
        </div>
    </div>
  )
}