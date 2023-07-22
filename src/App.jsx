import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/Home' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
