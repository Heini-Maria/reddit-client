import searchdiy from '../../Assets/images/searchdiy.png'


const Search = () =>{

return (
<form className='search-bar'>
    <input type="text" placeholder='Search..' name="q"/>
    <button type="submit" className='submit-button'><img src={searchdiy}/></button>
    
</form>    
)    
}
export default Search;