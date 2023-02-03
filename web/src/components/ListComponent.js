const ListComponent = ({ vegetables }) => {
    return (
        vegetables.map((each, index) => {
            return (<li key={index} className='aside__ul__component'>

                <img src={each.icon} alt={each.name} className='aside__ul__component__img'></img>
                <p className='aside__ul__component__text'>{each.name}</p>

            </li>)
        })

    )
}; export default ListComponent