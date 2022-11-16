import { RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import routes from "./routes";

const App = () => {
  return <Layout contentSlot={<RouterProvider router={routes} />} />;
};

export default App;
