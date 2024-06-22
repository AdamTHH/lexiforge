import searchIconPng from '../assets/searchicon.png';
import IconButton from "./IconButton";
import { FaXmark } from "react-icons/fa6";

const SearchBar = ({ searchChange, searchBar }: any) => {

    return <>
        <input id="search-bar" style={{
            backgroundImage: `url(${searchIconPng})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: '10px 14px',
            backgroundSize: '20px'
         }}
        className='p-3 pl-10 lg:shadow-md w-full wordtitle rounded-xl
      bg-transparent text-black outline-0 lg:bg-white
      lg:dark:bg-neutral-950 dark:text-white
      '
      type="text" name="" placeholder='' value={searchBar} onChange={(e) => searchChange(e.target.value)} />
        {
        searchBar !== "" ? <div className='absolute top-[4px] right-0'>
            <IconButton onClick={() => {searchChange(''); document.getElementById('search-bar')!.blur()}}>
                <FaXmark/>
            </IconButton>
        </div> : <></>
        }
    </>
}

export default SearchBar;