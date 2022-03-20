import React from 'react';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import RecipeDetail from './RecipeDetail';

const Pages = () => {
    return (
            <Routes>
            <Route path='/' element={<Home/>}/>            
            <Route path='/cuisine/:type' element={<Cuisine/>}/>  
            <Route path='/searched/:search' element={<Searched/>}/>
            <Route path='/searched/:search/recipe/:name' element={<RecipeDetail/>}/>
            <Route path='/recipe/:name' element={<RecipeDetail/>}/>
            </Routes>
        
    );
};

export default Pages;