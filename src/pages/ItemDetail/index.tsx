import { useQuery } from "@tanstack/react-query";

import type { ItemDetail as ItemDetailType } from "../../services/itemDetail/@types";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../services/itemDetail";
import Main from "../../container/Main";
import Breadcrumb from "../../components/Breadcrumb";
import CardSection from "../../container/CardSection";
import Loading from "../../components/Loading";
import ItemDetail from "../../components/ItemDetail";
import NotFound from "../../components/NotFound";
import { useBreadcrumbContext } from "../../contexts/BreadCrumbContext";

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { breadcrumb } = useBreadcrumbContext();

  const { data, isLoading, error } = useQuery<ItemDetailType>(
    [id],
    () => getItemDetail<ItemDetailType>(id || ""),
    {
      refetchOnWindowFocus: false,
    }
  );

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
      <Breadcrumb data={data?.item ? [...breadcrumb, data.item.title] : []} />
      <CardSection>
        {!data?.item ? (
          <NotFound message="Not Found" />
        ) : (
          <ItemDetail item={data?.item} />
        )}
      </CardSection>
    </Main>
  );
};

export default ItemDetailPage;
