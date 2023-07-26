import React from 'react'
import { useParams } from 'react-router-dom'
const WatchingMovie = () => {
  const {id} = useParams()

  return (
    <div className='bg-slate-800 min-h-screen'>
    <div className=' pl-56 pt-16'><iframe src={"https://www.2embed.cc/embed/" + id} width="900px" height="500px" frameborder="0" scrolling="no" allow="fullscreen" className='border-solid border-8 border-slate-600 rounded-xl '></iframe></div>
    <div className='pt-5 text-center text-slate-400 font-serif text-sm '>
<b>Created By ❤️ Ritik</b>
    </div></div>
  )
}

export default WatchingMovie