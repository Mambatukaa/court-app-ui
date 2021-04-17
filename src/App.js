import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

import { Header } from './modules/layouts/components';
import Routes from './routes';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
