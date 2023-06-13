import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import GlobalStyles from "./Styles/global";

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
