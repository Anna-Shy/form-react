import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CalendarPage } from "./pages/CalendarPage/CalendarPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

import './styles/global.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} basename="/form-react" />
  );
}

export default App;
