import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cuisine.scss';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const cuisineName = useParams();

    const getCuisine = async(name) =>{
        const response  = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=1876e385725e4704870d75610fa7cd1b&cuisine=${name}'`);
        const result = await response.json()
        console.log(result.results);
        setCuisine(result.results);
        }

    useEffect(()=>{
        getCuisine(cuisineName.type);
    },[cuisineName.type])
    return (
        <div className='app__cuisine'>
            {cuisine.map((cus)=>{
                const {id, title, image} = cus
                return (
                    <article key={id} className="app__cuisine-wrapper">
                        <div className="app__cuisine-card">
                            <img src={image} alt={title} />
                            <h4>{title}</h4>
                        </div>
                    </article>
                )
            })} 
        </div>
    );
};

export default Cuisine;