import '../styles/App.scss';
import { useState } from 'react';
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
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  const [days, setDays] = useState(getDays(new Date().getFullYear(), (new Date().getMonth() + 1)));
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



  const getMonthName = (monthNumber) => {
    console.log(monthNumber)
    return months[monthNumber]


  }
  const getShowedMonths = () => {
    return months.slice(currentMonthNumber - 1, (currentMonthNumber + 2))
  }

  // useEffect(() => {
  //   const current = new Date()
  //   const daysInMonth = getDays(current.getFullYear(), current.getMonth())
  //   setDays(daysInMonth);
  // }, []);

  const changeMonth = (month) => {
    //debugger;
    console.log(month)
    setCurrentMonthNumber(months.findIndex(each => each === month))
    setCurrentMonthName(month)
    setDays(getDays(new Date().getFullYear(), currentMonthNumber + 1))
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
