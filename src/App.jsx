import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const lodedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(lodedCoffees);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-6xl text-center text-purple-600  ">
        Coffee : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
