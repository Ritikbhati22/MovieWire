import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    <section className="bg-slate-800 min-h-screen p-8">
      <div className='flex flex-row flex-wrap '>{movie.map((curMovie) => {
        const { imdbID, Title, Poster } = curMovie;
        const Name = Title.substring(0, 30)
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="">
              <div className='pl-8 pr-8 pt-4'>
                <img className=" w-64 h-96 rounded-xl border-solid border-8 border-slate-700 object-cover" src={Poster} />

              </div>
            </div><h2 className='text-slate-400 font-serif text-xl text-center p-4'>
              {Name.length > 15 ? `${Name}... ` : Name}
            </h2>
          </NavLink>
        )
      })}</div>
      <div className='pt-5 text-center text-slate-400 font-serif text-sm'>
        <b>Created By ❤️ Ritik</b>
      </div>
    </section>
  )
}

export default Movie