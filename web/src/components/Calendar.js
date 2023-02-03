const Calendar = () => {
    return (
        <section className='calendar'>
            <h2 className='calendar__title'>2º Trimestre</h2>
            <div className='calendar__div'>
            </div>
            <div className='calendar__options'>
                <div className='calendar__options__div'>1er Trimestre </div>
                <div className='calendar__options__div'>3er Trimestre</div>
                <div className='calendar__options__div'>4º Trimestre </div>
            </div>
            <div className='calendar__legend'>
                <h3 className='calendar__legend__title'>Leyenda</h3>
                <div className='calendar__legend__color color1'></div><span className='"calendar__legend__text text1'>Semillero</span>
                <div className='calendar__legend__color color2'></div><span className='"calendar__legend__text text2'>Siembra en tierra</span>
                <div className='calendar__legend__color color3'></div><span className='"calendar__legend__text text3'>Cosecha</span>
                <div className='calendar__legend__color color4'></div><span className='"calendar__legend__text text4'>Transplante</span>
            </div>
        </section>
    )
}; export default Calendar