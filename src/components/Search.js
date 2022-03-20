import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler =(e) =>{
        e.preventDefault();
        navigate(`/searched/${input}`)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>   
            <FaSearch className='search-icon'/>
        </form>
    );
};

export default Search;