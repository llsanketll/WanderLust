import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../AuthContext';
import { useDatabase } from '../DatabaseContext';
import { PostExpContainer } from '../Styles/PostExp.styles';

import Button from '../Components/Button';

//importing FIREBASE STORAGE (didn't created storage React.Context)
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { GetNewGeoCoder } from '../Components/Mapbox';

// POSTING FUNCTION:
function PostExperience(props) {
  const title = useRef();
  const landmark = useRef();
  const image = useRef();
  const description = useRef();
  const [location, setLocation] = useState('');
  const urls = [];

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const { currentUser } = useAuth();
  const { currentData, addPost } = useDatabase();

  // FIREBASE STORAGE: setting up file and storage reference

  // METADATA: adding necessary extra details to the posted image
  const metadata = {
    contentType: 'image/jpeg',
    user: currentUser.uid,
  };

  async function handleChange(e) {
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      setImages([...images, newImage]);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const SubmitButton = document.getElementById("PostExp-Submit-Button");
    if (
      title.current.value === '' ||
      landmark.current.value === '' ||
      image.current.value === '' ||
      description.current.value === ''
    ) {
      alert('Fields are empty');
      return;
    }

    setLoading(true);
    SubmitButton.disabled = true;

    await Promise.all(
      images.map(async (per_image) => {
        const postImageRef = ref(
          storage,
          `Post_Image/${currentUser.uid}/${per_image.name}`
        );
        await uploadBytes(postImageRef, per_image, metadata);
        const url = await getDownloadURL(postImageRef);
        urls.push(url);
      })
    );
    const dataToUpload = {
      city: location,
      user_id: currentUser.uid,
      landmark: landmark.current.value,
      title: title.current.value,
      description: description.current.value,
      date: new Date().getTime(),
      photos: urls,
    };

    try {
      await addPost(dataToUpload);
      title.current.value = '';
      landmark.current.value = '';
      description.current.value = '';
      image.current.value = '';
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    SubmitButton.disabled = false;
  }
  useEffect(() => {
    if (!document.getElementById('PostExp-Geo-Search').hasChildNodes()) {
      const GeoSearch = GetNewGeoCoder();
      GeoSearch.addTo(document.getElementById("PostExp-Geo-Search"));
      GeoSearch.on('result', data => {
        const currentCity = data.result.text;
        setLocation(currentCity);
      })
    }
  }, []);
  return (
    <PostExpContainer>
      <div className='PostExp-Background' onClick={props.close}>
        {
          loading &&
          <div className='PostExp-Loading'>
          </div>
        }
      </div>
      <div>
        <form className="form_container" onSubmit={handleSubmit}>
          <h1>Share your Experience</h1>
          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="landmark"
              ref={landmark}
              placeholder="  Landmark"
            />
          </div>
          <div className="form_content" id="PostExp-Geo-Search">
          </div>

          <div className="form_content">
            <input
              type="text"
              className="form-control"
              id="title"
              ref={title}
              placeholder="  Title"
            />
          </div>
          <div className="form_content">
            <textarea
              className="form-control"
              id="description"
              ref={description}
              rows="10"
              placeholder=" 📝 Write your experience or suggestions here."
            ></textarea>
          </div>

          <div className="form_content">
            <input
              type="file"
              onChange={handleChange}
              className="form-control"
              ref={image}
              id="image"
              placeholder="Add Image"
              multiple
            />
          </div>
          <div className="form_content">
            <Button type="submit" className="button" id="PostExp-Submit-Button" name="post" >
              Post
            </Button>
          </div>
        </form>
      </div>
    </PostExpContainer>
  );
}

export default PostExperience;