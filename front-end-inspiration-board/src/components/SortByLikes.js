import './SortByLikes.css';

const SortByLikes = (props) => {
    
    return <button className='sort-button' onClick = {props.sortCardsCallback}>
        Sort
    </button>
}

export default SortByLikes;