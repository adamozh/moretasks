import "./Header.scss"
import { Clock } from "./Clock"
import { Logo } from "./Logo"


export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <Clock />
            </div>
        </header>
    )
}