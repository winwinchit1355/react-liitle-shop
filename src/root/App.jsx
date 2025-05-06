import React from 'react'
import { Routes, Route } from "react-router"
import Home from '../pages/Home'
import About from '../pages/About'
import Default from '../pages/Default'
import Shop from '../pages/Shop'
import Blog from '../pages/Blog'

const links = [
    { link: '/', component: <Home /> },
    { link: '/shop', component: <Shop /> },
    { link: '/about', component: <About /> },
    { link: '/blog', component: <Blog /> },
    { link: '*', component: <Default /> }
]

const App = () => {
    return (
        <>
            <Routes>
                {links.map((link, idx) => (
                    <Route
                        key={`links_${idx}`}
                        path={link.link}
                        element={link.component}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App