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
  //
  const [currentMonthName, setCurrentMonthName] = useState(months[new Date().getMonth()])
  const [showedMonths, setShowedMonths] = useState(months.slice((new Date().getMonth() - 1), (new Date().getMonth() + 2)))
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
    const initialMonth = months.findIndex(each => each === showedMonths[0])
    if (initialMonth === 0) {
      const firstMonths = months.slice(initialMonth, initialMonth + 2)
      const lastMonth = Array.of(months[11])
      const concatMonths = lastMonth.concat(firstMonths)
      setShowedMonths(concatMonths)
    } else if (initialMonth === 11) {
      const firstMonths = months.slice(initialMonth - 1, initialMonth + 1)
      const lastMonth = Array.of(months[0])
      const concatMonths = firstMonths.concat(lastMonth)
      setShowedMonths(concatMonths)
    } else {
      setShowedMonths(months.slice(initialMonth - 1, initialMonth + 2))
    }
  }
  const moveMonthRight = () => {
    const ultMonth = months.findIndex(each => each === showedMonths[2])
    if (ultMonth === 11) {
      const firstMonths = months.slice(ultMonth - 1, ultMonth + 1)
      const lastMonth = Array.of(months[0])
      const concatMonths = firstMonths.concat(lastMonth)
      setShowedMonths(concatMonths)
    } else if (ultMonth === 0) {
      const firstMonths = months.slice(ultMonth, ultMonth + 2)
      const lastMonth = Array.of(months[11])
      const concatMonths = lastMonth.concat(firstMonths)
      setShowedMonths(concatMonths)
    } else {
      setShowedMonths(months.slice(ultMonth - 1, ultMonth + 2))
    }

  }

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <CalendarMobile days={days} currentMonthName={currentMonthName} />
        <CalendarMenu showedMonths={showedMonths} changeMonth={changeMonth} moveMonthLeft={moveMonthLeft} moveMonthRight={moveMonthRight} />
        <CalendarLegend />
        <List vegetables={vegetables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
