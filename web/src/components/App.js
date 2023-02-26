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
  const [currentMonthNumber, setCurrentMonthNumber] = useState(0)
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  //const [month, setMonth] = useState('Enero');
  //const [preMonth, setPreMonth] = useState('Diciembre');
  //const [postMonth, setPostMonth] = useState('Febrero');
  const [days, setDays] = useState(31);
  const [currentMonthName, setCurrentMonthName] = useState('enero')
  const [showedMonths, setShowedMonths] = useState(['diciembre', 'enero', 'febrero'])
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

  const getMonthName = (monthNumber) => {
    return months.slice(monthNumber, (monthNumber + 1))

  }
  const getShowedMonths = () => {
    return months.slice(currentMonthNumber - 1, (currentMonthNumber + 2))
  }

  useEffect(() => {
    const current = new Date()
    const daysInMonth = getDays(current.getFullYear(), current.getMonth() + 1)
    setDays(daysInMonth);
    setCurrentMonthNumber(current.getMonth())
    setCurrentMonthName(getMonthName(currentMonthNumber))
    setShowedMonths(getShowedMonths(currentMonthNumber))
  }, []);

  const changeMonth = (month) => {
    console.log(month)
    setCurrentMonthNumber(months.findIndex(each => each === month))
    setCurrentMonthName(month)
    setDays(getDays(new Date().getFullYear(), currentMonthNumber))
  }

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile days={days} currentMonthName={currentMonthName} />
        <CalendarMenu showedMonths={showedMonths} changeMonth={changeMonth} />
        <CalendarLegend />
        <List vegetables={vegetables} />

      </main>
      <Footer />
    </div>
  );
}

export default App;
