import React from 'react';
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import './Searched.scss';
import { Link } from 'react-router-dom';


const Searched = () => {
    const [searchRecipe, setsearchRecipe] = useState([])
    let params =  useParams();
    const getSearched = async(name) =>{
        const response  = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=1876e385725e4704870d75610fa7cd1b&query=${name}'`);
        const result = await response.json()
        console.log(result.results);
        setsearchRecipe(result.results);
        }
        useEffect(()=>{
            getSearched(params.search)
        },[params.search])
    return (
        <div className='app__searched'>
            {searchRecipe.map((rec)=>{
                return <article className="app__searched-card" key={rec.id}>
                                          <Link to ={`recipe/${rec.id}`}>
                  <div className="app__searched-card__image">
                      {!rec.image ? <img className="dummy" src='https://dummyimage.com/300' alt="dummy image"/> : <img src={rec.image} alt="recipe" />}                      <div className="gradient">
                      </div>
                  </div>
                  <h4>{rec.title}</h4>
                  </Link>
                </article> 
            })}
           
        </div>
    );
};

export default Searched;