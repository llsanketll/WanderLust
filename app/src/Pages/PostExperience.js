import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../AuthContext';
import { useDatabase } from '../DatabaseContext';
import { PostExpContainer } from '../Styles/PostExp.styles';
import Button from '../Components/Button';

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
    if (title.current.value == '' || landmark.current.value == '' || image.current.value == '' || description.current.value == '')
    {
      alert("Fields are empty");
      return;
    }

    const dataToUpload = {
      user_id: currentUser.uid,
      landmark: landmark.current.value,
      title: title.current.value,
      description: description.current.value,
      date: new Date().getTime(),
      photos: ["url1", "url2"]
    }

    try {
      setError('');
      setLoading(true);
      await addPost(dataToUpload);
      title.current.value = '';
      landmark.current.value = '';
      description.current.value = '';
      image.current.value = '';
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }
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
            <Button type="submit" className="button" name="post">
              Post
            </Button>
          </div>
        </form>
      </div>
    </PostExpContainer>
  );
}
