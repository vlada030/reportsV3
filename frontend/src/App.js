import Bezveze from "./Bezveze"
import {BrowserRouter as Router, Routes,  Link, Route, Outlet} from 'react-router-dom'
import {Navbar, Sidebar, Modal, Footer} from './components'
import { LandingPage, HomePage, DomReportsPage, InoReportsPage, ContactPage, ShiftReportsPage} from './pages'
import { Fragment } from "react"


const App = () => {
    
    const firstPageVisit = false

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        firstPageVisit ? (
                            <LandingPage />
                        ) : (
                            <Fragment>
                                <Navbar />
                                <Sidebar />
                                <Modal />
                                <Outlet />
                                <Footer />
                            </Fragment>
                        )
                    }
                >
                    <Route index element={<HomePage />} />
                    <Route path="reports">
                        <Route
                            path="domaci_izvestaji"
                            element={<DomReportsPage />}
                        />
                        <Route
                            path="ino_izvestaji"
                            element={<InoReportsPage />}
                        />
                        <Route
                            path="smenski_izvestaji"
                            element={<ShiftReportsPage />}
                        />
                        <Route path="proizvodi">
                            <Route path="dodaj" />
                            <Route path="izmeni" />
                            <Route path="svi" />
                        </Route>
                    </Route>
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="test" element={<Bezveze />} />
                    <Route path="*" element={<h2>NEPOSTOJECA RUTA</h2>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;