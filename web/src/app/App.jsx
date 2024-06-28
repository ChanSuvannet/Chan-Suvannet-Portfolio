
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
