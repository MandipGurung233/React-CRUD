import React from 'react'
import {BlogDetails} from '../pages/blogDetails'
import { Blogs } from '../components/blogs'
import { useNavigate } from 'react-router-dom'

export const Blog = () => {
  return (
    <div className='App'>
        <div>
          <Blogs Title="hello" Path="../image/nature.jpg"/>
          <Blogs Title="Junk food" Path="../image/nature.jpg"/>
        </div>
      
    </div>
  )
}