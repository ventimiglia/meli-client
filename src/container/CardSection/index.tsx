import { ReactNode } from "react";
import "./styles.scss";

type Props = {
  children?: ReactNode;
};

const CardSection = ({ children }: Props) => {
  return <section className="card-section">{children}</section>;
};

export default CardSection;
