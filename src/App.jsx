import { BrowserRouter, Route, Routes 	} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/Vans' element={<Vans/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
