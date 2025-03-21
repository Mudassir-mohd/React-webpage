import Menuitems from "../../utils/Menuitems"
import Recipes from "../../utils/Recipes"
import "./Header.css"

const Header =()=>{
    return(
        <>
            <header className="header">
                <div className="headerimg">
                    <img className="img1" src="https://vismaifood.com/themes/pivisions/assets/images/logo.png" alt="" />
                </div>
                <nav className="nav">
                    <Menuitems />
                    <h3>
                        Site also available in:Telugu
                    </h3>
                </nav>
            </header>

            <div className="search">
                <input type="text"  placeholder="Search by Ingredients, Cuisine, Diet, Etc"/>
            </div>

            <div className="rec">
                <h2>Trending Recipes</h2>
            </div>

            <Recipes />



        </>
    )
}

export default Header