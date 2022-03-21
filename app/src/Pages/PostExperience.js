import React from 'react';
import ReactDOM from 'react-dom';
import {auth} from './firebase';
import {collection, addDoc} from 'firebase/firestore';

import { PostExpContainer } from '../Styles/PostExp.styles';

// export default function PostExperience(){
//   async function handlePost(e){
//     e.preventDefault();

//   }
//   try{
//     const docRef = await addDoc(collection(auth, "post"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  return(
      <PostExpContainer>
    <div>
      <h1>Share your Experience</h1>
      <form className="form_container" onSubmit={handlePost}>
        <div className="form_content">
          <input type="text" className="form-control" id="landmark" placeholder="Landmark"/>
        </div>

        <div className="form_content">
          <input type="text" className="form-control" id="title" placeholder="Title"/>
        </div>
        <div className="form_content">
          <textarea className="form-control" id="description" rows="10"></textarea>
        </div>

        <div className="form_content">
          <input type="file" className="form-control" id="image" placeholder="Add Image"/>
        </div>
        <div className="form_content">
          <button type="submit" className="button" name="post">Post</button></div>
      </form>
    </div>
      </PostExpContainer>
  )
}