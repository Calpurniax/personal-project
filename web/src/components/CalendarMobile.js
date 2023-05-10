const CalendarMobile = ({ currentMonthName, days, vegetables }) => {

    const daysToRender = []
    const renderDays = () => {

        for (let i = 1; i <= days; i++) {
            daysToRender.push(i)
        }
        return daysToRender.map((each, index) => {
            return <li key={index} className='calendar__body__day'>{each}</li>
        })
    }
    const renderVeggies = () => {
        return vegetables.map(eachVeggie => {
            if (eachVeggie.earth === currentMonthName) {
                return <section className="calendar__body__task--soil">{eachVeggie.name}</section>
            } else return false
        })
    }

    return (
        <section className='calendar'>
            <h2 className='calendar__title'>{currentMonthName}</h2>
            <div className='calendar__body'>
                <ul className='calendar__body__ul'>{renderDays()}</ul>
                <div className='calendar__body__task'>
                    {renderVeggies()}
                    {/* <section className='calendar__body__task--soil'> Berejenas</section>
                    <section className='calendar__body__task--harvest'> Guisantes</section> */}
                </div>
            </div>

        </section>
    )
};
export default CalendarMobile