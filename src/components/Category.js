import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import './Category.scss';


const Category = () => {
    return (
        <div className='app__category'>
            <div className="app__category-item">
                <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice className='category-icon'/>
                <h4>Italian</h4>
                </NavLink>
            </div>

            <div className="app__category-item">
            <NavLink to={'/cuisine/American'}>
                <FaHamburger className='category-icon'/>
                <h4>American</h4>
                </NavLink>
            </div>
            <div className="app__category-item">
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles className='category-icon'/>
                <h4>Thai Food</h4>
                </NavLink>

            </div>
            <div className="app__category-item">
            <NavLink to={'/cuisine/Japanese'}>

                <GiChopsticks className='category-icon'/>
                <h4>Japanes</h4>
                </NavLink>

            </div>
        </div>
    );
};

export default Category;