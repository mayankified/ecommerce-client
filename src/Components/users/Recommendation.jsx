import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Items";

function shuffleAndSlice(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.slice(0, 4);
}

const Recommendation = () => {
  const [data_product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/prod/get"
        );

        setProducts(shuffleAndSlice(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-16 mx-16 font-poppins mb-6 ">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold border-b-2 border-black  pb-3">
          You might also like!
        </h1>{" "}
      </div>

      <div className="md:grid grid-cols-4 mt-12 gap-x-20">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.images}
              name={item.name}
              new_price={item.price}
              old_price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;
