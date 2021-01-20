import { Provider } from "react-redux";
import TextList from "./components/TextList";
import Navbar from "./layout/Navbar";

import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <div className="container mt-4 bg-light">
          <TextList />
        </div>
      </Provider>
    </>
  );
}

export default App;
