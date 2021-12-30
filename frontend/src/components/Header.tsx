import { Clock } from "./Clock"
import { Logo } from "./Logo"

export const Header = () => {
    return (
        <header className="flex justify-between items-center mx-16 h-20">
            <Logo />
            <Clock />
        </header>
    )
}