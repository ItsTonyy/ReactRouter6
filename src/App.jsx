import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PageLayout from './components/PageLayout'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'

import VanDetail from './components/VanDetail'

import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

import HostLayout from './components/HostLayout'


import './server'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PageLayout />}> 
					<Route path='/' element={<Home />} />
					<Route path='About' element={<About />} />
					
					<Route path='Vans' element={<Vans/>}/>
					<Route path='Vans/:id' element={<VanDetail/>}/>
					
					<Route path='host' element={<HostLayout />}> 
						<Route index element={<Dashboard />}/>
						<Route path='income' element={<Income />}/>
						<Route path='reviews' element={<Reviews />}/>
					</Route>
					
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
