import '../styles/App.scss';
import Header from './Header';
import Calendar from './Calendar';
import List from './List';
import Footer from './Footer';
import onion from '../images/onion.png';
import lettuce from '../images/lettuce.png';
import tomate from '../images/tomate.png';
import carrot from '../images/carrot.png'

function App() {
  const vegetables = [{
    name: 'apio',
    icon: carrot,
  },
  {
    name: 'cebolla',
    icon: onion,
  },
  {
    name: 'lechuga',
    icon: lettuce,
  },
  {
    name: 'calabaza',
    icon: tomate,
  }]
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Calendar />
        <List vegetables={vegetables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
