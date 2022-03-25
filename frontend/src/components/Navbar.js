import { Fragment } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Fragment>
            <Link to="test">Bezveze</Link>
            <Link to="reports/domaci_izvestaji">Domaci</Link>
            <Link to="reports/ino_izvestaji">Ino</Link>
            <Link to="reports/smenski_izvestaji">Smenski</Link>
            <Link to="nepostojeca">Nepostojeca</Link>
            <Link to=".">Home</Link>
        </Fragment>
    );
}

export default Navbar