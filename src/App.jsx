import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PageLayout from './components/PageLayout'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'

import VanDetail from './pages/VanDetail'

import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

import HostLayout from './components/HostLayout'
import HostVans from './pages/host/HostVans/HostVans'
import HostVansId from './pages/host/HostVans/HostVansId'


import HostVansDetails from './pages/host/HostVans/HostVansDetails'
import HostVansPhotos from './pages/host/HostVans/HostVansPhotos'
import HostVansPricing from './pages/host/HostVans/HostVansPricing'

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
						<Route path='vans' element={<HostVans />}/>
						<Route path='vans/:id' element={<HostVansId />}>
							<Route index element={<HostVansDetails/>}/>
							<Route path='pricing' element={<HostVansPricing />}/>
							<Route path='photos' element={<HostVansPhotos />}/>
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
