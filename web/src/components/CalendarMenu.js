const CalendarMenu = ({ showedMonths, changeMonth }) => {
    const monthClick = (event) => {
        changeMonth(event.target.id)
    }
    const renderMonths = () => {
        return showedMonths.map((each, index) => <li key={index} id={each} onClick={monthClick} className="monthMenu__change__list__element">{each}</li>)
    }
    return (
        <section className="monthMenu">
            <span className="monthMenu__change before" > <i className="fa-solid fa-angle-left"></i></span>
            <ul className="monthMenu__change__list">{renderMonths()}</ul>
            <span className="monthMenu__change after"><i className="fa-solid fa-chevron-right"></i></span>
        </section >
    )
}; export default CalendarMenu