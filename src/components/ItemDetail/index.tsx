import "./styles.scss"
import { Condition } from "../../services/itemDetail/@types";
import type { ItemDetail as ItemDetailType } from "../../services/itemDetail/@types";

type Props = {
  item: ItemDetailType["item"];
};

const ConditionDict: { [key: string]: string } = {
  [Condition.New]: "Nuevo",
  [Condition.Used]: "Usado",
};

const ItemDetail = ({ item }: Props) => {
  const { title, picture, description, condition, sold_quantity, price } = item;

  return (
    <article className="item-detail">
      <div>
        <img src={picture} alt={title} width={450} height={450} />
        <h3 className="item-detail__description-title">
          Descripción del producto
        </h3>
        <p className="item-detail__description-detail">{description}</p>
      </div>
      <div>
        <p className="item-detail__condition">{`${ConditionDict[condition]} . ${sold_quantity} vendidos`}</p>
        <h2 className="item-detail__title">{title}</h2>
        <p className="item-detail__price">
          {price.amount.toLocaleString("es-AR", {
            style: "currency",
            currency: price.currency,
            maximumFractionDigits: price.decimals,
          })}
        </p>
        <button className="item-detail__button">Comprar</button>
      </div>
    </article>
  );
};

export default ItemDetail;
