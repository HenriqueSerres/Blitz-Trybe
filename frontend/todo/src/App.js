import UserProvider from './context/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Tasks from './pages/Tasks';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/user" element={ <User/> } />
          <Route path="/tasks" element={ <Tasks/> } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;