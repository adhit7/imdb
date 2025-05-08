import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import RequireUser from './components/auth/RequireUser';
import RequireVisitor from './components/auth/RequireVisitor';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className='font-poppins w-screen min-h-screen bg-gray-200'>
      <Routes>
        {/* Public routes */}

        {/* <Route path="/movies/:id" element={<MovieDetail />} /> */}

        <Route element={<RequireUser />}>
          <Route index path='/' element={<Home />} />
          {/* <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/add-actor" element={<AddActor />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} /> */}
        </Route>

        <Route element={<RequireVisitor />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
