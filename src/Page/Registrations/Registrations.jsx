import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
  } from "firebase/auth";
  import { useContext, useState } from "react";
  import { Link } from "react-router-dom";
  import Swal from "sweetalert2";
import app from "../../Firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
 
  const auth = getAuth(app);
  
  const Registrations = () => {
    const [registerError, setRegisterError] = useState("");
    const [sucess, setSucess] = useState("");
    const { createUser } = useContext(AuthContext);
  
    const handelSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const name = e.target.name.value;
      const password = e.target.password.value;
      console.log(email, password, name);
  
      if (password.length < 6) {
        setRegisterError("Enter At Least 6 Character Password");
        return;
      } else if (!/[A-z]/.test(password)) {
        setRegisterError("you should enter a capital letter");
        return;
      } else if (!/[@$!%*?&]/.test(password)) {
        setRegisterError("you should enter a Special Charecter ");
        return;
      }
  
      setRegisterError("");
      setSucess("");
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((results) => {
          const user = results.user;
  
          // Set the default role (e.g., "user")
          const defaultRole = "user";
  
          // Update the user's display name and role
          updateProfile(user, { displayName: name, role: defaultRole })
            .then(() => {
              setSucess("Your Account Created Successfully");
  
              // Using Swal to show a success message
              Swal.fire("Registration and Login Successful", "success");
  
              // Creating a user object
              const users = { email, name, role: defaultRole };
  
              // Making a POST request to your server to add the user
              fetch("https://geolite-server-site.vercel.app/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                    // Using Swal to show a success message
                    Swal.fire({
                      title: "Thank You!",
                      text: "User Added Successfully",
                      icon: "success",
                      confirmButtonText: "Okay",
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
  
              console.log(users);
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
  
          // Handle errors using Swal
          Swal.fire("Error", "User registration failed", "error");
        });
    };
  
    return (
      <div className="mx-auto mb-16 bg-[#d8a600] lg:mx-10 rounded-lg ">
        <div className="mx-auto md:w-1/2 mt-7 mb-2  p-5">
          <h3 className="text-3xl mb-4 pt-2 text-center text-black font-bold">
            Please Register and Create Account
          </h3>
          <form onSubmit={handelSubmit}>
            <input
              className="mb-4 w-full  py-1 px-4"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
            <input
              className="mb-4 w-full  py-1 px-4"
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
            />
            <br />
            <div className=" relative">
              <input
                className="mb-4 w-full py-1 px-4"
                type="password"
                name="password"
                id=""
                placeholder=" Password"
              />
            </div>
  
            <br />
            <button
              className="mb-4 w-full bg-[#ff6900]  rounded-lg py-2  px-4"
              type="submit"
              value="Register"
            >
              Registration{" "}
            </button>
          </form>
        </div>
        <div className="mx-auto w-1/4">
          {sucess && <p className="text-blue-400  mb-6">{sucess}</p>}
          {registerError && <p className="text-red-400  mb-6">{registerError}</p>}
          <p>
            Already Have An Account ?{" "}
            <Link className="underline" to={"/login"}>
              {" "}
              Goto Login
            </Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Registrations;
  