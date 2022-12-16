import searchdiy from '../../Assets/images/searchdiy.png'
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
    ><img src={searchdiy}/></button>
    
</form>    
)    
}
export default Search;