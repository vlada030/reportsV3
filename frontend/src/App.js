import { Fragment } from "react";
import Bezveze from "./Bezveze";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { Navbar, Sidebar, Modal, Footer } from "./components";
import {
    LandingPage,
    HomePage,
    DomReportsPage,
    InoReportsPage,
    ContactPage,
    ShiftReportsPage,
} from "./pages";
import { useGlobalContext } from "./context/global_context";

const App = () => {
    // const { firstPageVisit } = useGlobalContext();
    const firstPageVisit = true;

    return (
        <Router>
            <Routes>
                <Route path="/" element={firstPageVisit ? <LandingPage /> : <Navigate to="pocetna"/>} />
                <Route
                    element={
                        <Fragment>
                            <Navbar />
                            <Sidebar />
                            <Modal />
                            <Outlet />
                            <Footer />
                        </Fragment>
                    }
                >
                    <Route path="pocetna" element={<HomePage />} />
                    <Route path="izvestaji">
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
                    <Route path="kontakt" element={<ContactPage />} />
                    <Route path="test" element={<Bezveze />} />
                    <Route path="*" element={<h2>NEPOSTOJECA RUTA</h2>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
