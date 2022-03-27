import { Fragment } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Fragment>
            <Link to="test">Bezveze</Link>
            <Link to="izvestaji/domaci_izvestaji">Domaci</Link>
            <Link to="izvestaji/ino_izvestaji">Ino</Link>
            <Link to="izvestaji/smenski_izvestaji">Smenski</Link>
            <Link to="nepostojeca">Nepostojeca</Link>
            <Link to=".">Home</Link>
        </Fragment>
    );
}

export default Navbar