import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AccessControl = () => {
  
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://geolite-server-site.vercel.app/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const handleAssignRole = (user, role) => {
    const endpoint = role === 'admin' ? 'admin' : 'surveyor';

    fetch(`https://geolite-server-site.vercel.app/users/${endpoint}/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetchData(); // Refetch data after modification
          setSelectedRole(null); // Reset selected role after assignment
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is a ${role === 'admin' ? 'Admin' : 'Surveyor'} Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(`Error making ${role}:`, error);
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://geolite-server-site.vercel.app/users/${user._id}`, {
          method: 'DELETE',
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              fetchData(); // Refetch data after deletion
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      }
    });
  };

  return (
    <div className="bg-white">
    <div className="flex justify-evenly my-4">
      <h2 className="text-3xl">All Users</h2>
      <h2 className="text-3xl">Total Users: {users.length}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === 'admin' ? (
                  <>
                    <span>Admin</span>
                    <button
                      onClick={() => handleAssignRole(user, 'surveyor')}
                      className="btn btn-xs mx-2 bg-orange-500"
                      disabled={selectedRole === 'surveyor'}
                    >
                      Make Surveyor
                    </button>
                  </>
                ) : user.role === 'surveyor' ? (
                  <>
                    <span>Surveyor</span>
                    <button
                      onClick={() => handleAssignRole(user, 'admin')}
                      className="btn btn-xs mx-2 bg-orange-500"
                      disabled={selectedRole === 'admin'}
                    >
                      Make Admin
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAssignRole(user, 'admin')}
                      className="btn btn-xs bg-orange-500"
                      disabled={selectedRole === 'admin'}
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleAssignRole(user, 'surveyor')}
                      className="btn btn-xs mx-2 bg-orange-500"
                      disabled={selectedRole === 'surveyor'}
                    >
                      Make Surveyor
                    </button>
                  </>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDeleteUser(user)}
                  className="btn btn-ghost mx-2 btn-xs"
                >
                  <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AccessControl;
