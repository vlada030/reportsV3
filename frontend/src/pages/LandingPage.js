import { useEffect } from 'react'
import {useGlobalContext} from '../context/global_context'

const LandingPage = () => {

    const {firstPageVisit, handleFirstPageVisit} = useGlobalContext()

    useEffect(() => {
        handleFirstPageVisit()
    }, [handleFirstPageVisit])

    return (
        <h1>LANDING PAGE</h1>
    )
}

export default LandingPage