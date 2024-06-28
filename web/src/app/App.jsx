import ContentComponent from "./main/cp/content/content";
import Header from "./main/cp/header/header.component";
// Define the routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/skill",
//     element: <Education></Education>,
//   },
// ]);

function App() {
  return (
    <>
      <Header></Header>
      <ContentComponent></ContentComponent>
    </>
  );
}

export default App;
