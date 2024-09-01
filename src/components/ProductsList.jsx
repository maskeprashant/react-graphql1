import React from "react";
import { gql, useQuery } from "@apollo/client";

function ProductsList() {
  const ALL_PRODUCTS = gql`
    query GetAllProducts {
      getAllProducts {
        id
        name
        description
        price
      }
    }
  `;
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;
  if (data)
    return (
      <div>
        <ul>
          {data.getAllProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default ProductsList;
