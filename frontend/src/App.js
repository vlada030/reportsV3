import Bezveze from "./Bezveze"
import {BrowserRouter as Router, Routes,  Link, Route} from 'react-router-dom'
import {Navbar, Sidebar, Modal} from './components'
import { LandingPage} from './pages'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Modal />
           
            <Routes>
                <Route path="/test" element={<Bezveze />} />                
            </Routes>
            
        </Router>
    );
}

export default App;