import Chevron from "../../assets/icons/chevron.svg";

import "./styles.scss";

type Props = {
  data?: string[];
};

const Breadcrumb = ({ data }: Props) => {
  return (
    <ul className="breadcrumb">
      {data?.map((item, index) => (
        <li key={index}>{item}
          {(index !== data.length - 1) && <img src={Chevron} alt="chevron" width={10} height={10} className="breadcrumb__icon"/>}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;