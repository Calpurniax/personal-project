const CalendarMenu = ({ showedMonths, changeMonth, moveMonthLeft, moveMonthRight }) => {
    const handleMonthClick = (event) => {
        changeMonth(event.target.id)
    }
    const handleClick = (event) => {
        const arrow = event.target
        if (arrow.className === 'fa-solid fa-angle-left') {
            moveMonthLeft()
        } else {
            moveMonthRight()
        }

    }

    const renderMonths = () => {
        return showedMonths.map((each, index) => <li key={index} id={each} onClick={handleMonthClick} className="monthMenu__change__list__element">{each}</li>)
    }
    return (
        <section className="monthMenu">
            <span className="monthMenu__change" onClick={handleClick}> <i className="fa-solid fa-angle-left"></i></span>
            <ul className="monthMenu__change__list">{renderMonths()}</ul>
            <span className="monthMenu__change" onClick={handleClick}><i className="fa-solid fa-chevron-right"></i></span>
        </section >
    )
}; export default CalendarMenu