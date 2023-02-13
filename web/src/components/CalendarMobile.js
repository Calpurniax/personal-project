const CalendarMobile = ({ month, days }) => {

    const daysToRender = []
    const renderDays = () => {

        for (let i = 1; i <= days; i++) {
            daysToRender.push(i)
        }
        return daysToRender.map((each, index) => {
            return <li key={index} className='calendar__body__day'>{each}</li>
        })
    }
    return (
        <section className='calendar'>
            <h2 className='calendar__title'>{month}</h2>
            <div className='calendar__body'>
                <ul className='calendar__body__ul'>{renderDays()}</ul>
                <div className='calendar__body__task'>
                    <section className='calendar__body__task--soil'> Berejenas</section>
                    <section className='calendar__body__task--harvest'> Guisantes</section>
                </div>
            </div>

        </section>
    )
};
export default CalendarMobile