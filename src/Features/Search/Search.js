import searchdiy from '../../Assets/Images/searchdiy.png'
import { useSelector } from 'react-redux';
import { setSearchText } from './SearchSlice';
import { useDispatch } from 'react-redux';



const Search = () =>{
const searchText = useSelector((state) => state.search.searchText);
const dispatch = useDispatch();
console.log()

    

const handleClick =(e) =>{
    dispatch(setSearchText(e.target.value));
}

console.log(searchText);

return (
<form className='search-bar'>
    <input 
    type="text" 
    placeholder='Search..' 
    name="q"
    value= {searchText}
    onChange={(e) => dispatch(setSearchText(e.target.value))}
    />
    <button type="submit" 
    className='submit-button'
    onClick= {handleClick}
    name= 'Search'
    ><img src={searchdiy} alt='serach icon'/></button>
    
</form>    
)    
}
export default Search;