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
  const [days, setDays] = useState(30);
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

  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  useEffect(() => {
    setMonth(new Date().toLocaleString('default', { month: 'long' }))
    const daysInMonth = getDays(new Date().getFullYear(), new Date().getMonth() + 1)
    setDays(daysInMonth);
  }, []);



  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile month={month} days={days} />
        <CalendarLegend />
        <List vegetables={vegetables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
