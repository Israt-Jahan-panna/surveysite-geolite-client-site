import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Details = ({survey}) => {
    const [selectedOption, setSelectedOption] = useState(null);
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
      const handleVote = (voteType) => {
       
        if (voteType === 'Like') {
          setSurveyData((prevData) => ({
            ...prevData,
            likeCount: prevData.likeCount + 1,
            dislikeClicked: false,
            likeClicked: true,
          }));
        } else if (voteType === 'Dislike') {
          setSurveyData((prevData) => ({
            ...prevData,
            dislikeCount: prevData.dislikeCount + 1,
            likeClicked: false,
            dislikeClicked: true,
          }));
        }else if (voteType === 'Yes') {
          
          setSurveyData((prevData) => ({
            ...prevData,
            totalVoteCount:prevData.voteCount + 1,
            voting: 'Yes',
          }));
        } else if (voteType === 'No') {
          
          setSurveyData((prevData) => ({
            ...prevData,
            totalVoteCount: prevData.voteCount + 0 ,
            voting: 'No',
          }));
        }
      
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // // Assuming you have a backend API endpoint for survey creation
        // fetch('', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     ...surveyData,
        //     timestamp: new Date().toISOString(),
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: 'Thank You!',
        //         text: 'Survey Added Successfully',
        //         icon: 'success',
        //         confirmButtonText: 'Okay',
        //       }).then(() => {
        //         // Redirect to /surveys
        //         window.location.href = '/surveys';
        //       });
        //     }
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      };
    
      const handleAddComment = () => {
        // Implement logic to handle adding comments
      };
    
 
    return (
        <div className="max-w-[1600px] mx-4 py-4 lg:mx-10 font-Barlow bg-[#d8a600] px-10  m-9 rounded-2xl">
           <div className=" ">
        {/* Display survey details */}
        <img src={imageUrl} alt={title} className=" lg:h-[400px] w-full rounded-md bg-black p-3" />
        <h3>{category}</h3>
        <h3 className="text-xl font-semibold h-12">{title}</h3>
        <p className="text-gray-700">{description}</p>

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

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Like or Dislike</label>
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => handleVote('Like')}
              className={`mr-2 focus:outline-none ${
                surveyData.likeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              type="button"
              onClick={() => handleVote('Dislike')}
              className={`focus:outline-none ${
                surveyData.dislikeClicked ? 'text-blue-500' : 'text-black'
              }`}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
          </div>
        </div>
        </div>

        {/* Allow pro users to add comments */}
        <div className="mb-4">
          <label htmlFor="shortdescription" className="block  text-sm font-semibold text-gray-600">
            Comments Here 
          </label>
          <textarea
            id="comments"
            name="comments"
            value={surveyData.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mb-2 bg-white p-1 text-center font-semibold rounded-lg relative "
        >
          <i className="fa-solid fa-plus" style={{ color: ' #fab005' }}></i> Submit
        </button>
        </form>
        
      </div>
    </div>
        
    );
};

export default Details;