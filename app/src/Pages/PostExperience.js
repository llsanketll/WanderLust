import React, { useEffect, useState, useRef } from 'react';
//import DbPost from '../DbPost';
//import { db } from '../firebase';
//import { collection, getDocs, onSnapshot } from 'firebase/firestore';
// import ReactDOM from 'react-dom';
//import { auth, db } from '../firebase';
import { useAuth } from '../AuthContext';
import { useDatabase } from '../DatabaseContext';
//import { collection, addDoc } from 'firebase/firestore';

import { PostExpContainer } from '../Styles/PostExp.styles';

export default function PostExperience() {
  const title = useRef();
  const landmark = useRef();
  const image = useRef();
  const description = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  const { currentData, addPost } = useDatabase();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await addPost(
        currentUser[0].id,
        landmark.current.value,
        title.current.value,
        description.current.value
      );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }
  console.log(currentData);
  return (
    <PostExpContainer>
      <div>
        <h1>Share your Experience</h1>
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="landmark"
              ref={landmark}
              placeholder="Landmark"
            />
          </div>

          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="title"
              ref={title}
              placeholder="Title"
            />
          </div>
          <div className="form_content">
            <textarea
              className="form-control"
              id="description"
              ref={description}
              rows="10"
            ></textarea>
          </div>

          <div className="form_content">
            <input
              type="file"
              className="form-control"
              ref={image}
              id="image"
              placeholder="Add Image"
            />
          </div>
          <div className="form_content">
            <button type="submit" className="button" name="post">
              Post
            </button>
          </div>
        </form>
      </div>
    </PostExpContainer>
  );
}
