import { Link } from "react-router-dom";
import "./styles.scss"

const NotFound = ({ message }: { message: string }) => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <p className="not-found__message">{message}</p>
    <Link to="/" className="not-found__link">Volver al inicio</Link>
  </div>
)

export default NotFound;