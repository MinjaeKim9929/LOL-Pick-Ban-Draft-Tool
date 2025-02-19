import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LinkPage from './pages/LinkPage/LinkPage';
import DraftPage from './pages/DraftPage/DraftPage';

function App() {
	return (
		<div className="App">
			<div className="custom-bg">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
