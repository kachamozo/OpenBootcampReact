import logo from './logo.svg';
import './App.css';
import Saludo from './components/pure/Saludo.jsx';
import SaludoF from './components/pure/SaludoF.jsx';
import TaskList from './components/container/TaskList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import SaludoStyle from './components/pure/SaludoStyle';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{/* <Saludo name='Roly' /> */}
				{/* <SaludoF name='Gonzalo' /> */}
				{/* <TaskList /> */}
				{/* <Ejemplo1 /> */}
				{/* <Ejemplo2 /> */}
				{/* <MiComponenteConContexto /> */}
				{/* <Ejemplo4 nombre='Roly'>
					<h3>
						Todo esto es props.children desde la apertura de Ejemplo4 hasta su
						etiqueta de cierre
					</h3>
				</Ejemplo4> */}
				<SaludoStyle name='Roly' />
			</header>
		</div>
	);
}

export default App;
