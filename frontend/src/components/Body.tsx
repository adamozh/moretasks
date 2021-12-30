import "./Body.scss"
import { Home } from "./Home"
import { NavBar } from "./NavBar"

export const Body = () => {
    return (
        <div className="body">
            <NavBar />
            <Home />
        </div>
    )
}