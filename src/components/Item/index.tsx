import type { Item as ItemType } from "../../services/items/@types";
import "./styles.scss";

type Props = {
  item: ItemType;
};

const Item = ({ item }: Props) => {
  const { title, price, picture, seller_address } = item;
  return (
    <article className="item">
      <img src={picture} alt={title} width={150} height={150} />
      <div className="item__content-wrapper">
        <p className="item__price">
          {price.amount.toLocaleString("es-AR", {
            style: "currency",
            currency: price.currency,
            maximumFractionDigits: price.decimals,
          })}
          {item.free_shipping && <span className="item__free-shipping"></span>}
        </p>
        <h2 className="item__name">{title}</h2>
      </div>
      <p className="item__address">{seller_address}</p>
    </article>
  );
};

export default Item;
