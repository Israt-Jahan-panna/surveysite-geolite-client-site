import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SurveyForm = () => {
  const [surveyData, setSurveyData] = useState({
    title: '',
    description: '',
    shortdescription: '',
    likeCount: 0,
    dislikeCount: 0,
    likeClicked: false,
    dislikeClicked: false,
    voting: null,
    category: '',
    imageUrl: '',
    totalVoteCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVote = (voteType) => {
    let voteCount = 0;
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

    // Assuming you have a backend API endpoint for survey creation
    fetch('http://localhost:4200/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...surveyData,
        timestamp: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Thank You!',
            text: 'Survey Added Successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then(() => {
            // Redirect to /surveys
            window.location.href = '/surveys';
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-[#d8a600] rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-600">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={surveyData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={surveyData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortdescription" className="block text-sm font-semibold text-gray-600">
            Short Description
          </label>
          <textarea
            id="shortdescription"
            name="shortdescription"
            value={surveyData.shortdescription}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={surveyData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={surveyData.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
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
                surveyData.likeClicked ? 'text-blue-500' : 'text-white'
              }`}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              type="button"
              onClick={() => handleVote('Dislike')}
              className={`focus:outline-none ${
                surveyData.dislikeClicked ? 'text-blue-500' : 'text-white'
              }`}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mb-2 bg-white p-1 text-center font-semibold rounded-lg relative "
        >
          <i className="fa-solid fa-plus" style={{ color: ' #fab005' }}></i> Create Survey
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
