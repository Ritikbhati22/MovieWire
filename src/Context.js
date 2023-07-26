import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=ce186853`
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [isError, setIsError] = useState({ show: "false", msg: "" })
  const [newone, setNewone] = useState("Avengers")

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search)
      }
      else {
        setIsError({
          show: true,
          msg: data.Error,
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let bhati = setTimeout(() => {
      getMovies(`${API_URL}&s=${newone}`);


    }, 500)
    return () => { clearTimeout(bhati) }
  }, [newone]);


  return <AppContext.Provider value={{ isLoading, isError, movie, newone, setNewone }}>
    {children}
  </AppContext.Provider>

}
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppProvider, AppContext, useGlobalContext };