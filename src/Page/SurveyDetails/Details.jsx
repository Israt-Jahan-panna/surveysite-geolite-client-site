import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Details = ({survey}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { user, loading } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:4200/users`)
          .then(res => res.json())
          .then(data => {
            const currentuser= data.find((singleUser) => user?.email === singleUser.email )
            // console.log(currentuser)
            setUsers(currentuser);
          })
          
  },[user]);
  console.log(users);
  // const [role , name ] = users || {};
// console.log(users)
    const handleAddComment = () => {
        if(user && users){
          if (role === "Pro User") {
            Swal.fire({
                title: 'Comment Added!',
                text: 'Your comment has been added successfully.',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
        } else {
            Swal.fire({
                title: 'Access Denied',
                text: 'You do not have permission to add comments.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        }
        }
    };
    
    const [surveyData, setSurveyData] = useState({
        
        likeCount: 0,
        dislikeCount: 0,
        likeClicked: false,
        dislikeClicked: false,
        voting: null,
        totalVoteCount: 0,
        comments : '',
      });
    const [comment, setComment] = useState('');
    const {
        _id,
        title,
        shortdescription,
        description,
        category,
        imageUrl,
        timestamp,
        voting,
        likeCount,
        dislikeCount,
      } = survey || {};

      const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleLike = (id) => {
       
        
          fetch(`http://localhost:4200/survey/like/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
        .then((res) => res.json())
        .then((data) => {
          
            console.log(data);
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Update!',
                text: 'Your servey vote is Added successfully.',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
      
      };

      const handleDislike = (id) => {
        
        fetch(`http://localhost:4200/survey/dislike/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          
      })
      .then((res) => res.json())
      .then((data) => {
        
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Update!',
              text: 'Your servey vote is Added successfully.',
              icon: 'success',
              confirmButtonText: 'Okay',
          });
          }
      })
      .catch((error) => {
          console.error('Error:', error);
      });
      
    
    };
   const handleSubmit = (e) => {
    e.preventDefault();
  
    const votingLike = Number(e.target.voting.value +1 );
    console.log(typeof votingLike);
    console.log(votingLike + likeCount)
   const updateSurvey = {
     newLike:votingLike + likeCount,
    
   }
    fetch(`http://localhost:4200/survey/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        updateSurvey),
    })
    .then((res) => res.json())
    .then((data) => {
      
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Update!',
            text: 'Your servey vote is Added successfully.',
            icon: 'success',
            confirmButtonText: 'Okay',
        });
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

    
 
    return (
        <div className="max-w-[1600px] mx-4 py-4 lg:mx-10 font-Barlow bg-[#d8a600] px-10  m-9 rounded-2xl">
           <div className=" ">
        {/* Display survey details */}
        <img src={imageUrl} alt={title} className=" lg:h-[400px] w-full rounded-md bg-black p-3" />
        <h3>{category}</h3>
        <h3 className="text-xl font-semibold h-12">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700">{likeCount}</p>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Like or Dislike</label>
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() =>handleLike(_id)}
              className={`mr-2 focus:outline-none ${
                surveyData.likeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              type="button"
              onClick={() => handleDislike(_id)}
              className={`focus:outline-none ${
                surveyData.dislikeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}> 
        <div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Voting Option</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="optionYes"
              name="voting"
              value="Yes"
              onChange={() => handleVote('Yes')}
              checked={surveyData.voting === 'Yes'}
              className="mr-2"
            />
            <label htmlFor="optionYes">Yes</label>
            <input
              type="radio"
              id="optionNo"
              name="voting"
              value="No"
              onChange={() => handleVote('No')}
              checked={surveyData.voting === 'No'}
              className="mr-2"
            />
            <label htmlFor="optionNo">No</label>
          </div>
        </div>

        
        </div>

        {/* Allow pro users to add comments */}
       
        <button
          type="submit"
          className="mb-2 bg-white p-1 text-center font-semibold rounded-lg relative "
        >
          <i className="fa-solid fa-plus" style={{ color: ' #fab005' }}></i> Submit
        </button>
        </form>
        <div className="mb-4 w-1/2" >
          <label htmlFor="shortdescription" className="block  text-sm font-semibold text-gray-600">
            Comments Here 
          </label>
          <textarea
            id="comments"
            name="comments"
            value={surveyData.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          
          ></textarea>
          <button onClick={handleAddComment}
          type="submit"
          disabled={users?.role !== "Pro User"}
          className="mb-2 bg-white p-1 text-center font-semibold rounded-lg relative "
        >
          <i className="fa-solid fa-plus" style={{ color: ' #fab005' }}></i> Add Comments
        </button>
        </div>
      </div>
    </div>
        
    );
};

export default Details;