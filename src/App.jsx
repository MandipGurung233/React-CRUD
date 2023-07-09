import React, { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Create } from './pages/create'
import { Blog } from './pages/blog'
import {BlogDetails} from './pages/blogDetails'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogsDetails" element={<BlogDetails/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}
export default App