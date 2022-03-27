import { useLocation } from "react-router-dom"

export default function DomReportsPage() {

    let location = useLocation()
    return (
        <div>
            <h2>DOMACI IZVESTAJI</h2>
            <p>Location : {`${JSON.stringify(location)}`}</p>

        </div>
    )
}