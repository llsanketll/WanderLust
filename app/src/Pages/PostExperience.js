import React, { useEffect, useState } from 'react';
//import DbPost from '../DbPost';
//import { db } from '../firebase';
//import { collection, getDocs, onSnapshot } from 'firebase/firestore';
// import ReactDOM from 'react-dom';
//import { auth, db } from '../firebase';
import { useDatabase } from '../DatabaseContext';
//import { collection, addDoc } from 'firebase/firestore';

import { PostExpContainer } from '../Styles/PostExp.styles';

export default function PostExperience() {
  const { currentData } = useDatabase();
  console.log(currentData);
  return (
    <PostExpContainer>
      <div>
        <h1>Share your Experience</h1>
        <form className="form_container">
          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="landmark"
              placeholder="Landmark"
            />
          </div>

          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form_content">
            <textarea
              className="form-control"
              id="description"
              rows="10"
            ></textarea>
          </div>

          <div className="form_content">
            <input
              type="file"
              className="form-control"
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
