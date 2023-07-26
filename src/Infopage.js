import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';

const Infopage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState("")


  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data)
      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let bhati = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500)
    return () => { clearTimeout(bhati) }
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <div className='bg-slate-800 min-h-screen text-slate-400 font-serif text-3xl justify-center text-center p-60'>
          Loading...
        </div>
      </div>
    )
  }

  return (

    <section className='bg-slate-800 min-h-screen p-10 '>
      <div className='flex justify-center items-center space-x-5'>
        <figure className='p-5 border-solid border-2 border-slate-700 rounded-xl'>
          <NavLink to={`/play/${id}`}><a href={"https://www.2embed.cc/embed/" + id}><img src={movie.Poster} className='rounded-2xl ' /></a></NavLink>
          <h2 className='text-slate-400 justify-center text-center pt-3 font-serif text-xl
          '><b>{movie.Title}</b></h2>
          <NavLink to={`/play/${id}`}><h1 className='text-slate-400 justify-center text-center font-serif text-xl bg-slate-700 rounded-lg  mt-2 mb- flex'>Tap To Play</h1></NavLink>
        </figure>
        <div className='text-slate-400 p-5 bg-slate-900 rounded-2xl font-serif'>
          <p><b>Title :</b> {movie.Title}</p>
          <p><b>Genre : </b>{movie.Genre}</p>
          <p><b>Ratings :</b> {movie.imdbRating}</p>
          <p><b>Actors : </b>{movie.Actors}</p>
          <p><b>Director : </b>{movie.Director}</p>
          <p><b>Year : </b>{movie.Year}</p>
          <p><b>Language : </b>{movie.Language}</p>
          <p><b>Country : </b>{movie.Country}</p>
          <NavLink to="/" className="flex justify-center rounded-lg mt-5 mb-3 bg-red-500 text-black font-serif">GO BACK</NavLink>
          


        </div>
        
      </div>
      <div className='pt-5 text-center text-slate-400 font-serif text-sm'>
<b>Created By ❤️ Ritik</b>
    </div>
    </section>

  )
}

export default Infopage