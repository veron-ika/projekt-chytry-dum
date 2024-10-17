import './style.css';
import smartHomeData from '../../smartHomeData.js';
import Header from '../../components/Header/Header.jsx';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';

const App = () => (   
  <div className="container">
    <Header title='Chytrý dům' />
    <Dashboard data={smartHomeData} />
  </div>
)

export default App