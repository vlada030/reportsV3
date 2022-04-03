import React, { useContext, useState } from "react"
import {setToLocalStorage, getFromLocalStorage} from '../utils/handleLocalStorage'

const initialFirstPageVisit = !getFromLocalStorage('firstPageVisit')

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [firstPageVisit, setFirstPageVisit] = useState(initialFirstPageVisit)
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true)
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const [ modalMessage, setModalMessage ] = useState('')
    const [ showLoader, setShowLoader ] = useState(false)

    const handleFirstPageVisit = () => {
        setToLocalStorage('firstPageVisit', true)
    }

    return (
        <GlobalContext.Provider value={{firstPageVisit, handleFirstPageVisit}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}