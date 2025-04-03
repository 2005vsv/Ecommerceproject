import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { getallproducts } from "../../Api/getallproducts";
import { getallcategories } from "../../Api/getallcategories";
import { usecart } from "../../context/cartcontext";
import ProductCard from "../../Components/Navbar/Productcard";
import getproductsbycategories from "../../utils/getproductsbycategories";

function Home() {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selectedcategory, setselectedcategory] = useState("ALL");
  const { cart } = usecart();
  
  useEffect(() => {
    (async () => {
      const products = await getallproducts();
      const categories = await getallcategories();
      const updatedcategories = [...categories, { id: '1a', name: 'ALL' }];
      
      setproducts(products);
      setcategories(updatedcategories);
    })();
  }, []);

  const oncategoryclick = (category) => {
    setselectedcategory(category);
  };

  const filterbycategories = getproductsbycategories(products, selectedcategory);

  return (
    <>
      <Navbar />
      <main className="items-center shadow">
        <div className="flex flex-wrap gap-4 pt-20 justify-center p-1">
          {
            categories?.length > 0 && categories.map(category => (
              <div 
                key={category.id}
                className="bg-blue-400 text-black font-semibold rounded-full px-4 py-2 cursor-pointer transition duration-200 hover:bg-blue-500"
                onClick={() => oncategoryclick(category.name)}
              >
                {category.name}
              </div>
            ))
          }
        </div>
        
        <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 p-[20px]">
          { filterbycategories?.length > 0 ?
            filterbycategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) : (
              <div className=" justify center">
                <h2 className="text-black  ml-56  justify-center">Products not found, please search for another category</h2>
              </div>
            )}
        </div>
      </main>
    </>
  );
}


export default Home;
