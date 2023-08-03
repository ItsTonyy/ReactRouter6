import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PageLayout from './components/PageLayout'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import VanDetail from './components/VanDetail'

import './server'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PageLayout />}> 
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Vans' element={<Vans/>}/>
					<Route path='/Vans/:id' element={<VanDetail/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
