import { useEffect, useState } from "react";
import "./Popular.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Veggie = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
      const check = localStorage.getItem('veggie');
      if(check){
        setRecipe(JSON.parse(check)) 
      }
      else{
        try{
            const res = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=1876e385725e4704870d75610fa7cd1b&number=9&tags='vegetarian'`
            );
            const result = await res.json();
            localStorage.setItem('popular', JSON.stringify(result.recipes));
            setRecipe(result.recipes);
            console.log("result are", result);
        }
        catch(err){
          console.log(err);
        }

      }
  };

  return (
    <div className="app__popular">
      <div className="app__popular-card-container">
          <h3 className="popular">Veggie Recipes</h3>
        <Splide
          options={{
            perPage: 2,
            gap: "2rem",
            arrows: false,
            pagination: false,
            drag: 'free',
            width: '500'
          }}
        >
          {recipe.length > 0
            ? recipe.map((rec) => {
                return (
                  <SplideSlide key={rec.id}>
                    <article className="card">
                    <h4>{rec.title}</h4>
                      <div className="card__image">
                          {!rec.image ? <img className="dummy" src='https://dummyimage.com/300' alt="dummy image"/> : <img src={rec.image} alt="recipe" />}
                          <div className="gradient">
                          </div>
                      </div>
                    </article>
                  </SplideSlide>
                );
              })
            : "Loading.."}
        </Splide>
      </div>
    </div>
  );
};

export default Veggie;
