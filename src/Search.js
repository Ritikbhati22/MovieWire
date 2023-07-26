import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const { newone, setNewone, isError } = useGlobalContext();

  return (
    <>
      <section className='bg-slate-800 text-center pt-5'>
        <h2 className='text-slate-300 text-4xl font-serif'>!!! Movie Wire !!!
        </h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}><div>
          <input className='border-4 rounded-md border-solid pl-2 mt-5 font-serif text-slate-500 text-lg' type="text" placeholder='Search here' value={newone} onChange={(e) => setNewone(e.target.value)}></input></div></form>
        <div>
          <p className='text-slate-200 pt-4 font-serif'>
            {isError.show && isError.msg}
          </p>
        </div>
      </section>
    </>
  )
}

export default Search