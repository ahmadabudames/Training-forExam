import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorite">favorite</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Header
