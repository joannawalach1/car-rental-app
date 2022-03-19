import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../auth";

const Layout = ({children}) => {
    const auth = useAuth();

    return (
        <div>
            <header className="header">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/clients"}>Customers</Link></li>
                    {auth.user ?
                        <li>
                            <button onClick={auth.logout}>Logout</button>
                        </li>
                        :
                        <li><Link to={"/login"}>Login</Link></li>
                    }
                </ul>
            </header>

            <main className="main">
                {children}
            </main>

        </div>
    );
};

export default Layout;