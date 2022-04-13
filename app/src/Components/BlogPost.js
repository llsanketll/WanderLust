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

function BlogPost(props) {
  const { currentUser } = useAuth();
  const { UploadData, getAllComments } = useDatabase();
  const [blogData, setBlogData] = useState({});
  const [images, setImages] = useState([]);
  const newImages = []
  const commentRef = useRef(null);

  const getPostData = async () => {
    props.posts.forEach(async post => {
      if (post.post_id != props.post_id) return;
      const comments = await getAllComments(post.post_id);
      setBlogData({ ...post, comments });
      post.photos.forEach(image => {
        newImages.push({ url: image, active: false });
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
    await UploadData(dataToUpload, `Post/${blogData.post_id}/Comments`);
    commentRef.current.value = '';
    window.scrollTo(0, document.body.scrollHeight);
    getPostData();
  }

  return (
    <BlogPostConatainer>
      <div className="BlogPost-CloseIcon" onClick={props.CloseBlogPost}>
        <CloseIcon />
      </div>
      <div className="BlogPost-Background" onClick={HandleBGClick}>
        <div className="BlogPost-Image-CloseIcon">
          <CloseIcon />
        </div>
      </div>

      <div className='BlogPost-Top'>
        <div className="BlogPost-Main">
          <h1 className="BlogPost-Title">{blogData.title}</h1>
          <div className="BlogPost-InfoContainer">
            {
              blogData.uid &&
              <ProfileImg uid={blogData.uid} />
            }
            <div className="BlogPost-FlexContainer">
              <span>by </span>
              <h4 className="BlogPost-AuthorName">{blogData.name}</h4>
              <p className="BlogPost-Date">{new Date(blogData.date).toDateString()}</p>
            </div>
          </div>
          <div className="BlogPost-Content">{blogData.description}</div>
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
      </div>
      <div className="BlogPost-Comments">
        <div className="BlogPost-Comments-Top">
          <h2>Comments</h2>
          <Button color="#0071C2" fontColor="white" onClick={HandleCommentButtonClicked}>
            Comment
          </Button>
        </div>
        {
          blogData.comments &&
          blogData.comments.map((comment, index) => (
            <CommentCard
              key={index}
              image={comment.photoURL}
              name={comment.name}
              text={comment.text}
              commentID={comment.id}
              date={comment.date}
              post_id={blogData.post_id}
              replies={comment.replies}
              GetReplies={getPostData}
            />
          ))
        }
        <form className="BlogPost-Comment-Input" onSubmit={HandleCommentSubmit}>
          <img src={currentUser.photoURL} />
          <input type="text" placeholder="Write a comment" ref={commentRef} />
          <Button color="#0071C2" fontColor="white" onClick={HandleCommentSubmit} type="submit">Post</Button>
        </form>
      </div>
    </BlogPostConatainer>
  );
}

export default BlogPost;
