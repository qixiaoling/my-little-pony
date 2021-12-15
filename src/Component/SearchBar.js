import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

function SearchBar ({searchBarQuery}) {
    const[query, setQuery] = useState('');
    const history = useHistory();


    function changeHandler(e) {
        setQuery(e.target.value);

    }

    function handleClick() {
        searchBarQuery(query);
        history.push('/search')


    }
    return(
        <div className='searchbar-container'>
            <form>
                <label htmlFor='search-bar'>
                    <input
                        id='search-bar'
                        type='text'
                        onChange={changeHandler}
                        placeholder='enter pony name'
                    />
                </label>
                <button className='search-btn' type='button' onClick={handleClick}>
                    <i className="fas fa-search"></i>
                </button>

            </form>
        </div>
    )
}
export default SearchBar