const CalendarMobile = ({ months }) => {
    const actualMonth = months.find(each => each.name === 'Abril')
    const daysToRender = []
    const renderDays = () => {

        for (let i = 1; i <= actualMonth.days; i++) {
            daysToRender.push(i)
        }
        return daysToRender.map((each, index) => {
            return <li key={index} className='calendar__body__day'>{each}</li>
        })
    }
    return (
        <section className='calendar'>
            <h2 className='calendar__title'>{actualMonth.name}</h2>
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