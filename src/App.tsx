import React from 'react'
import './css/App.css'

import Nav from './components/Nav'

export default function App() {
    return (
        <div>
            <Nav />
            <h1 className="text-3xl font-bold underline text-blue-600">
                Hello world!
            </h1>
        </div>
    )
}
