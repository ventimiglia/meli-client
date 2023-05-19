import React from "react";
import { Link, useLocation } from "react-router-dom";

import { getItems } from "../../services/items";
import type { Items } from "../../services/items/@types";
import { useQuery } from "@tanstack/react-query";

const ItemsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const { data, isLoading, error } = useQuery<Items>([searchValue], () =>
    getItems<Items>(searchValue)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Items Page</h1>
      {data?.items.map((item) => (
        <Link to={`/items/${item.id}`} key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price.amount}</p>
        </Link>
      ))}
    </div>
  );
};

export default ItemsPage;
