import NavBar from "../Nav-bar/Nav-bar"
import MainHeader from "./Main-header/Main-header"

const Header = () =>{
    return(
        <header className="px-4">
            <MainHeader/>
            <NavBar/>
        </header>
    )
}

export default Header