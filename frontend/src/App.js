import Bezveze from "./Bezveze";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import {Navbar, Sidebar, Modal} from './components'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Sidebar/>
            <Modal/>
        </Router>
    )
}

export default App;