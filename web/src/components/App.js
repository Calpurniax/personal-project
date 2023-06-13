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
  const [currentMonthNumber, setCurrentMonthNumber] = useState(new Date().getMonth())
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


  //para calcular los días al levantar la página//el useEffect sirve para calcular los días cuando cambia el mes
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  const [days, setDays] = useState(getDays(new Date().getFullYear(), (new Date().getMonth() + 1)));

  const [currentMonthName, setCurrentMonthName] = useState(months[new Date().getMonth()])
  const monthsBefore = months.filter((eachMonth, index) => index < currentMonthNumber - 1)
  const [showedMonths, setShowedMonths] = useState(months.slice((new Date().getMonth() - 1)).concat(monthsBefore))
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
    earth: 'marzo',
  },
  {
    name: 'zanahoria',
    icon: carrot
  }]

  // const getMonthName = (monthNumber) => {
  //   console.log(monthNumber)
  //   return months[monthNumber]
  // }
  // const getShowedMonths = () => {
  //   return months.slice(currentMonthNumber - 1, (currentMonthNumber + 2))
  // }

  useEffect(() => {
    const daysInMonth = getDays(new Date().getFullYear(), currentMonthNumber + 1)
    setDays(daysInMonth);
  }, [currentMonthNumber]);

  const changeMonth = (month) => {
    setCurrentMonthNumber(months.findIndex(each => each === month))
    setCurrentMonthName(month)
  }
  const moveMonthLeft = () => {
    setShowedMonths([showedMonths[11], ...showedMonths])
  }
  const moveMonthRight = () => {
    const firstMonth = showedMonths.shift()
    setShowedMonths([...showedMonths, firstMonth])
  }

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile days={days} currentMonthName={currentMonthName} vegetables={vegetables} />
        <CalendarMenu showedMonths={showedMonths} changeMonth={changeMonth} moveMonthLeft={moveMonthLeft} moveMonthRight={moveMonthRight} />
        <CalendarLegend />
        <List vegetables={vegetables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
