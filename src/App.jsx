import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks, setBookmarks]= useState([]);
 const [readingTime, setReadingTime]= useState(0);

 const handleAddToBookmark = blog =>{
  const newBookmark= [...bookmarks, blog];
  setBookmarks(newBookmark);
 }

 const handleReadTime = time =>{
  const newReadTime = (readingTime + time);
  setReadingTime(newReadTime);
 }

  return (
    <>
    <Header></Header>
    <div className='md:flex justify-between p-3 max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleReadTime={handleReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
