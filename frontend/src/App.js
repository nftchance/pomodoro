import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Room from './components/room/Room';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Landing />} />
				<Route path="room/:roomId" element={<Room />} />
			</Routes>
		</>
	);
}

export default App;
