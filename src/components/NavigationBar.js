import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home"> Home </Link>
                </li>
                <li>
                    <Link to="/counterapp"> CounterApp </Link>
                </li>
                <li>
                    <Link to="/book"> BookApplication </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar
