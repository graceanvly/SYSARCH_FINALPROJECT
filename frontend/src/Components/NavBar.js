import { Link } from "react-router-dom"


const NavBar = () => {

    return(
        <header>
            <div className="container">
                <Link to = "/">
                    <h2>LIST OF SENIOR CITIZEN Applicant</h2>
                </Link>
               <Link to ="/job">
                    <h4>Available Jobs</h4>
               </Link>
               <Link to ="/login">
                    <h4>Log In</h4>
               </Link>
               <Link to ="/register">
                    <h4>Register</h4>
               </Link>
            </div>
        </header>
    )
}

export default NavBar;