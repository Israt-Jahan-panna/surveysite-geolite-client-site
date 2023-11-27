import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const auth = getAuth(); // Assuming `app` is initialized elsewhere

const Login = () => {
    const { user, loading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const [sucess, setSucess] = useState("");
    const emailRef = useRef(null);
  
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location in the loginPage", location);
  
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoginError("");
        setSucess("");
        console.log(email, password);

        // stying in location and rediret to 
        if (loading) {
          <progress className="progress w-56"></progress>;
        }
        signInWithEmailAndPassword(auth, email, password)
          .then((results) => {
            const user = results.user;
            console.log(user);
            // navigation
            if (location?.state) {
              navigate(location.state);
            } else {
            
              navigate('/');
            }
            if (user) {
              setSucess(" Your Account Login SuccessFully ");
              Swal("Login successful", "success");
    
              return;
            } else {
              setLoginError("Email or Password doesn't match ");
              return;
            }
          })
          .catch((error) => {
            setLoginError("Email or Password doesn't match");
            console.log(error.message);
          });
    };
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          const user = userCredential.user;
          
  // stying in location and rediret to 
          if (loading) {
            <progress className="progress w-56"></progress>;
          }
          if (location?.state) {
            navigate(location.state);
          } else {
          
            navigate('/');
          }
                // Create an object to send to your server
          const userData = {
            name: user.displayName,
            email: user.email,
          };
  
          // Make a POST request to your server
          fetch(
            "  https://jobi-server-site.vercel.app/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                // Using Swal to show a success message
                Swal.fire({
                  title: "Thank You!",
                  text: "Login Successfully",
                  icon: "success",
                  confirmButtonText: "Okay",
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

  return (
    <div>
      <div className="font-EBGaramond flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl m-4">
      <Helmet>
        <title>GEOLITE | LOGIN</title>
        
      </Helmet>

        <div className="w-full p-8 lg:">
          <h2 className="text-5xl font-bold text-gray-700 text-center">
            Hi, Welcome Back!
          </h2>
          <p className="p-4 text-center text-xl">
            Still don't have an account?{" "}
            <Link className="underline text-[#d8a600]" to={"/registration"}>
              Sign up
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center text-[#ff6900] uppercase"
            >
              or login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleLogin} className="card-body">
          <div className="mt-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
              
              type="email"
                  placeholder="email"
                  ref={emailRef}
                  name="email"
                  required
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500">
                Forget Password?
              </a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
              name="password"
                  type="password"
                  placeholder="password"
                  
                  required
            />
          </div>
          <div className="mt-8">
            <button className="bg-[#ff6900] text-balck font-bold py-2 px-4 w-full rounded hover:bg-[#ff6900]">
              Login
            </button>
          </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-[#ff6900] uppercase">
              or Sign in with Google
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          <div className="mx-auto text-center">
              {sucess && <p className="text-blue-400  mb-6">{sucess}</p>}
              {loginError && <p className="text-red-400  mb-6">{loginError}</p>}
            </div>

          {/* google login  */}
          <a
            onClick={handleGoogleLogin}
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3 ">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 className=" py-3  text-center text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
