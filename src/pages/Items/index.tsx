import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import type { Items } from "../../services/items/@types";
import { getItems } from "../../services/items";
import { useBreadcrumbContext } from "../../contexts/BreadCrumbContext";
import Breadcrumb from "../../components/Breadcrumb";
import Main from "../../container/Main";
import CardSection from "../../container/CardSection";
import Item from "../../components/Item";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

const ItemsPage = () => {
  const { breadcrumb, updateBreadcrumb } = useBreadcrumbContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const { data, isLoading, error } = useQuery<Items>(
    [searchValue],
    () => getItems<Items>(searchValue),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!!data?.categories) {
      updateBreadcrumb(data.categories);
    }
  }, [data, updateBreadcrumb]);

  if (isLoading)
    return (
      <Main>
        <CardSection>
          <Loading />
        </CardSection>
      </Main>
    );
  if (error) return <div>Error</div>;

  return (
    <Main>
      <Breadcrumb data={breadcrumb} />
      <CardSection>
        {data?.items.length === 0 ? (
          <NotFound message="Not Found" />
        ) : (
          data?.items.map((item) => (
            <Link to={`/items/${item.id}`} key={item.id}>
              <Item item={item} />
            </Link>
          ))
        )}
      </CardSection>
    </Main>
  );
};

export default ItemsPage;
