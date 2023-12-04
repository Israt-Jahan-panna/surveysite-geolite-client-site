import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Details = ({survey}) => {
 
  const { user, loading } = useContext(AuthContext);
  const [users, setUsers] = useState();
  
  useEffect(() => {
    fetch(`http://localhost:4200/users`)
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
  
  console.log(users)
 
   
    const [surveyData, setSurveyData] = useState({
        
        likeCount: 0,
        dislikeCount: 0,
        likeClicked: false,
        dislikeClicked: false,
        voting: null,
        totalVoteCount: 0,
        comments : '',
      });
    
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
    // yes no vote 
    const handleYes = (id) => {
       
        
      fetch(`http://localhost:4200/survey/yes/${id}`, {
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

  const handleNo = (id) => {
    
    fetch(`http://localhost:4200/survey/no/${id}`, {
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


const handleAddComment = () => {
 

};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const comments = form.comments.value;
  
  const handleAddComment = {
comments,
_id
  };

  fetch(`http://localhost:4200/survey/comments/${_id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({handleAddComment
  }),
})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Thank You!',
          text: 'Comment Added Successfully',
          icon: 'success',
          confirmButtonText: 'Okay',
        }).then(() => {
          // Clear the comment input field
          setSurveyData((prevData) => ({
            ...prevData,
            comments: '',
          }));
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
 
//  commetns fetch 
const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the given survey ID
    fetch(`http://localhost:4200/survey/comments/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [_id]);
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
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Give Vote</label>
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() =>handleYes(_id)}
              className={`mr-2 focus:outline-none ${
                surveyData.likeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => handleNo(_id)}
              className={`focus:outline-none ${
                surveyData.dislikeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              No
            </button>
          </div>
        </div>
        <div className="my-3 ">
      <h2 className="text-sm font-semibold text-gray-600">All Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.handleAddComment.comments}
          </li>
        ))}
      </ul>
      
    </div>
        <form onSubmit={handleSubmit}> 
      
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
        </form>
        
      </div>
      
    </div>
        
    );
};

export default Details;