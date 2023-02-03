import ListComponent from './ListComponent';
const List = ({ vegetables }) => {
    return (
        <aside className='aside'>
            <h2 className='aside__title'>Algunas plantas que puedes sembrar este mes</h2>
            <ul className='aside__ul'>
                <ListComponent vegetables={vegetables} />
            </ul>
        </aside>
    )
};
export default List