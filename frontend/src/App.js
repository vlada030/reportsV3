import Bezveze from "./Bezveze"
import {BrowserRouter as Router, Routes,  Link, Route, Outlet} from 'react-router-dom'
import {Navbar, Sidebar, Modal, Footer} from './components'
import { LandingPage} from './pages'
import { Fragment } from "react"

function Group() {
    return (
        <Fragment>
            <Navbar />
            <Sidebar />
            <Modal />

        </Fragment>
    );
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Fragment>
                            <Group />
                            <Outlet />
                        </Fragment>
                    }
                >
                    <Route index element={<h2>POCETNA</h2>} />
                    <Route path="test" element={<Bezveze />} />
                    <Route path="*" element={<h2>NEPOSTOJECA RUTA</h2>} />
                </Route>
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;