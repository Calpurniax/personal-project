import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import CalendarMobile from './CalendarMobile';
import CalendarLegend from './CalendarLegend';
import List from './List';
import Footer from './Footer';
import onion from '../images/onion.png';
import lettuce from '../images/lettuce.png';
import tomate from '../images/tomate.png';
import carrot from '../images/carrot.png'

function App() {
  const [month, setMonth] = useState(0)
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
  const months = [{
    id: 0,
    name: 'Enero',
    days: 31
  },
  {
    id: 1,
    name: 'Febrero',
    days: 28

  },
  {
    id: 2,
    name: 'Marzo',
    days: 31,
  },
  {
    id: 3,
    name: 'Abril',
    days: 30,
  }]

  useEffect(() => {
    const date = new Date()
    const dateMonth = (date.getMonth())
    setMonth(months.find(each => each.id === dateMonth))
  }, []);



  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile month={month} />
        <CalendarLegend />
        <List vegetables={vegetables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
