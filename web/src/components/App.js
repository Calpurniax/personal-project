import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import CalendarMobile from './CalendarMobile';
import CalendarLegend from './CalendarLegend';
import CalendarMenu from './CalendarMenu';
import List from './List';
import Footer from './Footer';
import onion from '../images/onion.png';
import lettuce from '../images/lettuce.png';
import tomate from '../images/tomate.png';
import carrot from '../images/carrot.png'

function App() {
  const [month, setMonth] = useState('Enero');
  const [preMonth, setPreMonth] = useState('Diciembre');
  const [postMonth, setPostMonth] = useState('Febrero');
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
    const current = new Date()
    setMonth(current.toLocaleString('default', { month: 'long' }))
    const daysInMonth = getDays(current.getFullYear(), current.getMonth() + 1)
    setDays(daysInMonth);
    current.setMonth(current.getMonth() - 1)
    setPreMonth(current.toLocaleString('default', { month: 'long' }))
    current.setMonth(current.getMonth() + 2)
    setPostMonth(current.toLocaleString('default', { month: 'long' }))
  }, []);
  const changeToPrevMonth = () => {
    setMonth(preMonth)
    setDays(getDays(new Date().getFullYear(), new Date().getMonth() - 1))

  }
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile month={month} days={days} />
        <CalendarMenu preMonth={preMonth} postMonth={postMonth} changeToPrevMonth={changeToPrevMonth} />
        <CalendarLegend />
        <List vegetables={vegetables} />

      </main>
      <Footer />
    </div>
  );
}

export default App;
