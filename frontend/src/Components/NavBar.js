import { Link } from "react-router-dom"


const NavBar = () => {

    return(
        <header>
            <div className="container">
                <Link to = "/">
                    <h1>LIST OF SENIOR CITIZEN EMPLOYEE</h1>
                </Link>
                <nav>
      <ul>
        <li>
          <a href="/jobs">Available Jobs</a>
        </li>
      </ul>
    </nav>
            </div>
        </header>
    )
}

export default NavBar;