import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../style/App.css";
import ContentComponent from "./main/cp/content/content";
import Header from "./main/cp/header/header.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentComponent />,
  },
]);

function App() {
  return (
    <>
      <div className="shadow-sm">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
