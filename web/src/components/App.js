import '../styles/App.scss';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <section class="calendar">
          <h2 class="calendar__title">aquí el calendario</h2>

          <div class="calendar_move">

          </div>
          <div class="calendar_options">Aquí irían los demás meses, sólo cambiaría de la página, el mes</div>
          <div class="calendar_leyend">aqui como se lee el calendario</div>
        </section>
        <aside>lista de plantitas</aside>

      </main>
    </div>
  );
}

export default App;
