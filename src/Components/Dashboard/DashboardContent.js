import React, { useEffect, useState } from "react";
import './DashboardContent.css';

const DashboardContent = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      const data = await response.json();
      localStorage.setItem("meals", JSON.stringify(data.meals)); //using local storage for DB based on requirement
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedMeals = localStorage.getItem("meals");
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
      setIsLoading(false); //avoding here to re fetching the content and making the api call again...
    } else {
      fetchData(); //fetchin data from api , new updates
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="widgets">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="widget">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              <h3>{meal.strMeal}</h3>
              <p>ID: {meal.idMeal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
