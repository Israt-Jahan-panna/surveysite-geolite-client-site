import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSurveyor from '../hooks/useSurveyor';


const Dashboard = () => {
  // TODO get isAdmin value from the database 
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  const [isAdmin] = useAdmin();
  const [isSurveyor] = useSurveyor();
  console.log(isSurveyor)
 console.log(isAdmin);
  return (
    <div className="min-h-screen bg-black flex font-Barlow">
    {/*dashboard  Sidebar */}
    <div className="w-64 bg-[#ff6900]  ml-5  pt-10 ">
      <h1 className="text-2xl font-extrabold mb-4 w-64 px-8 text-black ">Surveyor Dashboard</h1>
      <ul className="px-8 text-lg ">
        {isAdmin && (
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
            <NavLink
              to="accesscontrol"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#ff6900] underline" : ""
              }
            >
              <i className="fa-solid fa-user-lock mr-2" style={{ color: ' #fab005' }}></i> Access Control
            </NavLink>
          </li>
        )}
        {isSurveyor && (
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
            <NavLink
              to="surveycreation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#ff6900] underline" : ""
              }
            >
              <i className="fa-brands fa-wpforms mr-2" style={{ color: ' #fab005' }}></i> Survey Creation
            </NavLink>
          </li>
        )}
      </ul>
      <div className="divider"></div>
      <ul className="px-8">
        <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
          <a className="text-lg  text-black hover:text-[#ff6900]" href="#">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#ff6900] underline" : ""
              }
            >
              <i className="fa-solid fa-house mr-2" style={{ color: ' #fab005' }}></i> Home
            </NavLink>
          </a>
        </li>
        <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
          <a className="text-lg  text-black hover:text-[#ff6900]" href="#">
            <NavLink
              to="/surveys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#ff6900] underline" : ""
              }
            >
              <i className="fa-solid fa-square-poll-vertical mr-2" style={{ color: ' #fab005' }}></i> Surveys
            </NavLink>
          </a>
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-[#ff6900] bg-white  p-8 mb-4 text-center">Welcome to the Dashboard!</h2>
      <Outlet></Outlet>
    </div>
  </div>
  );
};

export default Dashboard;
