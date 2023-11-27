import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center mt-10" >
        <Link to={"/"}><button className="bg-[#198754] hover:bg-[#20c997] text-white font-bold py-2 px-4 rounded " type="submit">
                Back TO Home 
              </button></Link>
        <div>
    <div className='mx-auto w-1/3 flex justify-center items-center'>
    <img src="https://i.ibb.co/3sM0937/3828537.jpg" alt="" />
    </div>
            
        </div>
</div>
    );
};

export default ErrorPage;


