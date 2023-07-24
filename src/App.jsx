import { BrowserRouter, Route, Routes 	} from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Vans from './routes/Vans'

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
