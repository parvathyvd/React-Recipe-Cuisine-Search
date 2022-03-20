import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './RecipeDetail.scss';

const RecipeDetail = () => {
    const params = useParams()
    const [details, setDetails] = useState({})
    const fetchDetail = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=1876e385725e4704870d75610fa7cd1b`);
        const res = await data.json()
        setDetails(res);
        console.log('recipe detail', details)
    }
    useEffect(()=>{
        fetchDetail()
    },[])
    const [activeTab, setActiveTab] = useState('instructions')
    return (
        <div className="app__recipe__detail">
            <div className="app__recipe__detail-image">
                <img src={details.image} alt={details.title} />
            </div>        
            <div className="app__recipe__detail-info--wrapper">
                <button className={activeTab==='instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>
                    Instructions
                </button>
                <button className={activeTab==='ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>
                    Ingredients
                </button>
                {activeTab ==='instructions' &&

                (<>
               <div className="app__recipe__detail-info">
                    <h4>{details.title}</h4>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </div>
                 <div className="tags">
                 <span>Vegetarian: {details.vegetarian ? <AiOutlineCheckCircle fontSize={25}/> : <ImCross/> }</span>
                 <span>Vegan: {details.vegan ? <AiOutlineCheckCircle fontSize={25}/> : <ImCross/>}</span>
                 <span>Very Healthy: {details.veryHealthy ? <AiOutlineCheckCircle fontSize={25}/> : <ImCross/>}</span>
             </div>
             </>)

}
                {activeTab ==='ingredients' &&
                <div className="app__recipe__detail-info-ingredients">
                    <ul className="lists-recipe">
                        {details.extendedIngredients.map((ing)=>{
                            return <li className="list-recipe" key={ing.title}>{ing.original}</li>
                        })}
                    </ul>
                </div>
                }
               
            </div>
        </div>
    );
};

export default RecipeDetail;