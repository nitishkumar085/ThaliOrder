import ThaliApp from "./components/ThaliApp";
import {Routes,Route} from 'react-router-dom'
import thaliStore from "./store/thaliStore";
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={thaliStore}>
      <Routes>
      <Route path="*" element={<ThaliApp/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
