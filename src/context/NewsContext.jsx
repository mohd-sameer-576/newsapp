import {createContext} from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import api from '../config/axios'


const NewsContext = createContext()

const NewsContextProvider = ({children}) => {
    const [news, setNews] = useState([])
    const [loading, setloading] = useState(false)
    const fetchData = async(url="/everything?q=india") =>{
        setloading(true)
        try {
            const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setloading(false)
            return response.data
            
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    const value = {
        news,
        setNews,
        fetchData,
        loading,
    }
    return(
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}
const useNewsContext = () =>{
    return useContext(NewsContext)
}
export {NewsContextProvider,useNewsContext}