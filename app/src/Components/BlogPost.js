import BlogPostConatainer from '../Styles/BlogPost.styles';
import CommentCard from './CommentCard';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from './Button';
import { useEffect } from 'react';
import { useDatabase } from '../DatabaseContext';
import ProfileImg from './ProfileImg';
import { useAuth } from '../AuthContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

function BlogPost(props) {
  const { currentUser } = useAuth();
  const { UploadData } = useDatabase();
  const [currentPost, setCurrentPost] = useState({});
  const [images, setImages] = useState([]);
  const [isLiked, setIsLiked] = useState();
  const commentRef = useRef(null);

  const getPostData = () => {
    props.posts.map(post => {
      if (post.post_id != props.post_id) return;
      const newImages = []
      setCurrentPost({ ...post });
      setIsLiked(post.likes.includes(currentUser.uid));
      post.photos.forEach(url => {
        newImages.push({ url, active: false });
      });
      setImages(newImages);
    });
  }

  useEffect(() => {
    getPostData();
  }, []);


  const HandleCommentButtonClicked = (e) => {
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
    document.querySelector(".BlogPost-Comment-Input input").focus();
  }

  const HandleImageClick = (e) => {
    //If images doesn't have an active image
    const index = parseInt(e.target.getAttribute('index'));
    const newImages = [...images];
    newImages.map((image) => (image.active = false));
    newImages[index].active = true;
    setImages(newImages);
    document.querySelector('.BlogPost-Background').style.display = 'block';
  };

  const HandleBGClick = () => {
    const newImages = [...images];
    newImages.map((image) => (image.active = false));
    setImages(newImages);
    document.querySelector('.BlogPost-Background').style.display = 'none';
  };

  const HandleButtonClick = (side) => {
    const imagesContainer = document.querySelector('.BlogPost-ImagesContainer');
    if (side == 'Left') {
      imagesContainer.scrollLeft -= 280;
    } else {
      imagesContainer.scrollLeft += 280;
    }
  };

  const HandleCommentSubmit = async e => {
    e.preventDefault();
    if (commentRef.current.value.trim() === "") {
      alert("Please enter a comment");
      return;
    }

    const dataToUpload = {
      text: commentRef.current.value,
      name: currentUser.displayName,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      time: new Date().getTime()
    }

    commentRef.current.value = '';
    const newData = await UploadData(dataToUpload, `Post/${currentPost.post_id}/Comments`);
    console.log(newData.id);
    const newComment = { ...dataToUpload, replies: [], comment_id: newData.id};
    const newCurrentPost = { ...currentPost, comments: [newComment, ...currentPost.comments] };
    setCurrentPost({ ...newCurrentPost });
    window.scrollTo(0, document.body.scrollHeight);
  }

  const HandleLikeClick = async () => {
    const newBlogData = { ...currentPost };
    setIsLiked(!isLiked);
    if (!newBlogData.likes.includes(currentUser.uid)) {
      console.log("Liked");
      newBlogData.likes.push(currentUser.uid);
    }
    else {
      console.log("Unliked");
      //Remove the user from the likes array
      const index = newBlogData.likes.indexOf(currentUser.uid);
      if (index > -1)
        newBlogData.likes.splice(index, 1);
    }
    setCurrentPost(newBlogData);
    props.SetLikes(props.post_id, newBlogData.likes);
  }

  return (
    <BlogPostConatainer isLiked={isLiked}>
      <div className='BlogPost-Top'>
        <div className="BlogPost-Main">
          <h1 className="BlogPost-Title">{currentPost.title}</h1>
          <div className="BlogPost-InfoContainer">
            {
              currentPost.uid &&
              <ProfileImg uid={currentPost.uid} />
            }
            <div className="BlogPost-FlexContainer">
              <span>by </span>
              <h4 className="BlogPost-AuthorName">{currentPost.name}</h4>
              <p className="BlogPost-Date">{new Date(currentPost.date).toDateString()}</p>
            </div>
          </div>
          <div className="BlogPost-Content">{currentPost.description}</div>
          <div className="BlogPost-Gradiants">
            <button onClick={() => HandleButtonClick('Left')} direction="Left">
              <ArrowForwardIosIcon />
            </button>
            <div className="BlogPost-ImagesContainer">
              {
                images.length > 0 &&
                images.map((image, index) => {
                  return (
                    <img
                      src={image.url}
                      key={index}
                      index={index}
                      onClick={HandleImageClick}
                      className={image.active ? 'SelectedImage' : ''}
                    />
                  );
                })}
              <button onClick={HandleButtonClick}>
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
        <div className='BlogPost-Like-Container'>
          <div className='BlogPost-Heart' onClick={HandleLikeClick}>
            <FavoriteIcon />
          </div>
          <div>
            <span>{currentPost.likes && currentPost.likes.length}</span>
            <span>Likes</span>
          </div>
          <div>
            <span>{currentPost.comments && currentPost.comments.length}</span>
            <span>Comments</span>
          </div>
        </div>
      </div>
      <div className="BlogPost-Comments">
        <div className="BlogPost-Comments-Top">
          <h2>Comments</h2>
          <Button color="#0071C2" fontColor="white" onClick={HandleCommentButtonClicked}>
            Comment
          </Button>
        </div>
        {
          currentPost.comments &&
          currentPost.comments.map((comment, index) => (
            <CommentCard
              key={currentPost.comments.length - index - 1}
              post_id={currentPost.post_id}
              {...comment}
            />
          ))
        }
        <form className="BlogPost-Comment-Input" onSubmit={HandleCommentSubmit}>
          <img src={currentUser.photoURL} />
          <input type="text" placeholder="Write a comment" ref={commentRef} />
          <Button color="#0071C2" fontColor="white" onClick={HandleCommentSubmit} type="submit">Post</Button>
        </form>
      </div>

      <div className="BlogPost-CloseIcon" onClick={props.CloseBlogPost}>
        <CloseIcon />
      </div>
      <div className="BlogPost-Background" onClick={HandleBGClick}>
        <div className="BlogPost-Image-CloseIcon">
          <CloseIcon />
        </div>
      </div>


    </BlogPostConatainer>
  );
}

export default BlogPost;
