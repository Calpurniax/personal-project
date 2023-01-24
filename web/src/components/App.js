import '../styles/App.scss';
import Header from './Header';
import Calendar from './Calendar';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Calendar />
        <aside>lista de plantitas</aside>

      </main>
    </div>
  );
}

export default App;
