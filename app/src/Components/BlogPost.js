import BlogPostConatainer from '../Styles/BlogPost.styles';
import CommentCard from './CommentCard';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from './Button';
import { useEffect } from 'react';
import { useDatabase } from '../DatabaseContext';

function BlogPost(props) {
  const [blogData, setBlogData] = useState({});
  const [images, setImages] = useState([{url:"", active: false}]);

  const getPostData = () => {
    const newPhotos = [...images];
    props.posts.forEach(post => {
      if (post.post_id == props.post_id) {
        setBlogData(post);
        post.photos.forEach(url => {
          newPhotos.push({ url, active: false });
        })
        setImages(newPhotos);
      }
    })
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
            <img src="https://i.scdn.co/image/ab67616d00001e02814d6aef9f54a1ff3e32f2d0" />
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
        <CommentCard
          image={images[images.length - 1].url}
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk laskjdflkasdfjl asdflkhasdfljhasdflkjhasd fjksdahf ajkdsfha sdlfjkhasdf kjahsdflkajsdf lkjasdfhlkasdfj hsadklfjdslafkj;lasdfk jal;skdfj ;lasfkj;as dlfkjasdf; lkjadsf;l kasjdf;lkas dfj;lkadsfj ;ladskfj ads;lfkjas ;dflkjasdf; lkjadsf;lkjadsf"
          name="Sanket Lamsal"
          ID={20}
        />
        <CommentCard
          image={images[0].url}
          name="Subash Khatri"
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          replies={[
            {
              userID: 12345,
              content: 'You are so bad learn to speak english first :)',
            },
            { userID: 32123, content: 'Good Comment :)' },
          ]}
          ID={30}
        />
        <CommentCard
          image={images[0].url}
          name="Subash Khatri"
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          replies={[
            {
              userID: 12345,
              content: 'You are so bad learn to speak english first :)',
            },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'The place was nice :P' },
          ]}
          ID={40}
        />
        <CommentCard
          image={images[0].url}
          ID={10}
          name="Pratham Bhattarai"
          comment="API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API."
          replies={[
            {
              userID: 12345,
              content: 'You are so bad learn to speak english first :)',
            },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'The place was nice :P' },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'Good Comment :)' },
            { userID: 32123, content: 'Good Comment :)' },
          ]}
        />
        <CommentCard
          image={images[0].url}
          name="Pratham Bhattarai"
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          ID={1}
        />
        <CommentCard
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          ID={2}
        />
        <CommentCard
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          ID={3}
        />
        <CommentCard
          comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"
          ID={4}
        />
        <div className="BlogPost-Comment-Input">
          <img src={images[images.length - 1].url} />
          <input type="text" placeholder="Write a comment" />
          <Button color="#0071C2" fontColor="white">Post</Button>
        </div>
      </div>
    </BlogPostConatainer>
  );
}

export default BlogPost;
