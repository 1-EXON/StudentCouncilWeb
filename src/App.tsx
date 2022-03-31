import { Routes, Route} from "react-router-dom"
import './css/App.css'

import Home from './pages/Home'
import Club from './pages/Club'

import Nav from './components/Nav'

export default function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="club" element={<Club />} />
            </Routes>
            
        </div>
    )
}
