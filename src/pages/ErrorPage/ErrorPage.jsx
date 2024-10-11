import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error" className="error">
      <main className="error__main">
        <h1 className="error__title">404</h1>
        <p className="error__text">
          Схоже щось пішло не за планом, <br />
          сторінки не знайдено.
        </p>

        <Link to={"/"}>Повернутись на головну</Link>
      </main>
    </div>
  );
};
