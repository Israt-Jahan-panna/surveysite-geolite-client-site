import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ProUser = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const { user, loading } = useContext(AuthContext);
  const [users, setUsers] = useState();
  
  useEffect(() => {
    fetch(`https://geolite-server-site.vercel.app/users`)
      .then(res => res.json())
      .then(data => {
        const currentUser = data.find(singleUser => user?.email === singleUser.email);
        setUsers(currentUser);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  
  }, [user]);
  
  useEffect(() => {
    if (users) {
      console.log(users);
    }
  }, [users]);
  console.log(users);
  
  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "You Have to login fist",
          });
      }
    // Log the user ID to check if it's valid
    console.log("User ID:", users?._id);
  
    if (!users || !users._id) {
      console.error("User ID is not available.");
      return;
    }
  
    fetch(`https://geolite-server-site.vercel.app/users/${users._id}`, {
      method: "PATCH", // Use PATCH method for updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "Pro User",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Thank You!",
            text: "Role Change Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => {
            // Update user's role in the component state
            setPaymentStatus('success');
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setPaymentStatus('error');
      });
  };

  return (
    <div className="text-center font-Barlow uppercase">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Upgrade to Pro</h3>
        <p className="text-gray-600 mb-4">Unlock premium features with our Pro plan</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold">$19.99/month</span>
          <form onSubmit={handlePayment}>
            <button type="submit"
            disabled={users?.role == "admin"}
            className="bg-blue-500 text-white px-4 py-2 rounded">
              Upgrade
            </button>
          </form>
        </div>
        {paymentStatus === 'success' && (
          <p className="text-green-500">Role has been upgraded to Pro.</p>
        )}
        {paymentStatus === 'error' && (
          <p className="text-red-500">Role upgrade failed. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default ProUser;
