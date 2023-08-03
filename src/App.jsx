import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PageLayout from './components/PageLayout'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'

import VanDetail from './components/VanDetail'

import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'


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
					
					<Route path='/host' element={<Dashboard />}/>
					<Route path='/host/income' element={<Income />}/>
					<Route path='/host/reviews' element={<Reviews />}/>
					
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
