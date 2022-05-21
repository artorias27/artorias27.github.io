import Home from './home/Home';
import Users from './users/Users';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
