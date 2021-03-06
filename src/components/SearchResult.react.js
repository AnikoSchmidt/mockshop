import {useSelector} from 'react-redux';


export default function SearchResult() {
    const { searchTerm } = useSelector(state => state.app);
    return (
        <div>
            <h1>Search Results for</h1>
            <p>"{searchTerm}"</p>
        </div>
    )
}