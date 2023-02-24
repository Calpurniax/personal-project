const CalendarMenu = ({ postMonth, preMonth }) => {
    const beforeClick = () => {
        console.log('antes')
    }
    return (
        <section className="month__menu">
            <span className="month__menu__change threeBefore"><i className="fa-solid fa-angle-left"></i></span>
            <p className="month__menu__change before" onClick={beforeClick}> {preMonth}</p>
            <p className="month__menu__change after">{postMonth}</p>
            <span className="month__menu__change threeAfter"><i className="fa-solid fa-chevron-right"></i>

            </span>
        </section>
    )
}; export default CalendarMenu