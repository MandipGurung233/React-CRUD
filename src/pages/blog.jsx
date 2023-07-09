import React from 'react'
import {BlogDetails} from '../pages/blogDetails'
import { Blogs } from '../components/blogs'
import { useNavigate } from 'react-router-dom'

export const Blog = () => {
  const navigate = useNavigate()
  return (
    <div className='App'>
        <div>

          <Blogs Title="hello" Description="Hi"/>
        </div>
      
    </div>
  )
}