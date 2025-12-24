import MealItem from "./MealItem";
import Error from "./Error.jsx";
import useHttp from "../hooks/useHttp.js";
const config={}
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals",config,[]);

  if(isLoading) {
    return <p className='center'>Fetching data...</p>;
  }
  if(error){
    return <Error title='Failed to fetch meals' message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
