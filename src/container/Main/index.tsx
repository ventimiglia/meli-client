import { ReactNode } from "react";

import "./styles.scss";

type Props = {
  children: ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <main className="main__container">
      {children}
    </main>
  )
}

export default Main;