import BlogPostConatainer from "../Styles/BlogPost.styles";
import CommentCard from "../Components/CommentCard";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "../Components/Button";
function BlogPost(props) {
  const [images, setImages] = useState([
    { url: "https://images.unsplash.com/photo-1573383756717-fb66cd3bfae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", active: false },
    { url: "data:image/jpeg;base64,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", active: false }
  ]);


  const HandleCommentButtonClicked = e =>{
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
    document.querySelector(".BlogPost-Comment-Input input").focus();
  }

  const HandleImageClick = (e) => {
    //If images doesn't have an active image
    const index = parseInt(e.target.getAttribute("index"));
    const newImages = [...images];
    newImages.map(image => image.active = false);
    newImages[index].active = true;
    setImages(newImages);
    document.querySelector(".BlogPost-Background").style.display = "block";
  }

  const HandleBGClick = () => {
    const newImages = [...images];
    newImages.map(image => image.active = false);
    setImages(newImages);
    document.querySelector(".BlogPost-Background").style.display = "none";
  }

  const HandleButtonClick = (side) => {
    const imagesContainer = document.querySelector(".BlogPost-ImagesContainer");
    if (side == "Left") {
      imagesContainer.scrollLeft -= 280;
    }
    else {
      imagesContainer.scrollLeft += 280;
    }
  };


  return (
    <BlogPostConatainer>

      <div className="BlogPost-Background" onClick={HandleBGClick}>
        <div className="BlogPost-CloseIcon">
          <CloseIcon />
        </div>
      </div>

      <main>
        <div className="BlogPost-Main">
          <h1>My Journey to Fewa Lake</h1>
          <div className="BlogPost-InfoContainer">
            <img src="https://i.scdn.co/image/ab67616d00001e02814d6aef9f54a1ff3e32f2d0" />
            <div className="BlogPost-FlexContainer">
              <span>by </span>
              <h4 className="BlogPost-AuthorName">Sanket Lamsal</h4>
              <p className="BlogPost-Date">22 March, 2022</p>
            </div>
          </div>
          <div className="BlogPost-Content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis diam vitae purus ultricies, nec vehicula libero molestie. Donec elit diam, efficitur a pellentesque et, pellentesque at massa. Fusce rhoncus urna vitae tortor hendrerit dignissim. Ut volutpat sapien vitae vestibulum facilisis. Vivamus semper, est ac suscipit consequat, tellus odio pellentesque leo, ac condimentum erat ex ut libero. Nulla interdum fringilla consectetur. Sed ut interdum augue.  Mauris ex nisl, accumsan vel tristique vel, hendrerit ac elit. Morbi non nisi viverra, fringilla lacus vitae, consequat neque. Nullam iaculis lobortis tellus a lobortis. Curabitur ut fringilla turpis. Ut porttitor sem a tincidunt euismod. Nulla ut auctor erat. Suspendisse lacinia diam leo, vitae malesuada erat molestie nec. Nam non tincidunt massa. Morbi id venenatis arcu. Donec a tempus justo, sed fringilla mi. Integer ut luctus nulla.  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum elementum ipsum enim, eu porttitor libero ultrices in. Suspendisse nec dictum nibh. Etiam rutrum turpis in libero luctus placerat. Sed tincidunt sollicitudin vulputate. Vestibulum tempus dapibus finibus. Vivamus vulputate suscipit diam non euismod. Nunc orci velit, bibendum vitae urna non, venenatis malesuada risus.  Ut vestibulum quis enim et rhoncus. Sed eu tincidunt neque. Aliquam sed nulla tincidunt, ultrices dui et, aliquam libero. Suspendisse potenti. Proin ac dui accumsan, faucibus leo vitae, malesuada mauris. Nulla eu ultricies eros, sit amet sodales turpis. Nunc ac luctus ligula. Maecenas fringilla libero et venenatis viverra.
          </div>
          <div className="BlogPost-Gradiants">
            <button onClick={() => HandleButtonClick("Left")} direction="Left" ><ArrowForwardIosIcon /></button>
            <div className="BlogPost-ImagesContainer">
              {
                images.map((image, index) => {
                  return (
                    <img src={image.url} key={index} index={index} onClick={HandleImageClick} className={image.active ? "SelectedImage" : ""} />
                  );
                })
              }
              <button onClick={HandleButtonClick}><ArrowForwardIosIcon /></button>
            </div>
          </div>
        </div>
      </main>
      <div className="BlogPost-Comments">
        <div className="BlogPost-Comments-Top">
          <h2>Comments</h2>
          <Button color="#0071C2" onClick = {HandleCommentButtonClicked} >Comment</Button>
        </div>
        <CommentCard image={images[images.length - 1].url} comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk laskjdflkasdfjl asdflkhasdfljhasdflkjhasd fjksdahf ajkdsfha sdlfjkhasdf kjahsdflkajsdf lkjasdfhlkasdfj hsadklfjdslafkj;lasdfk jal;skdfj ;lasfkj;as dlfkjasdf; lkjadsf;l kasjdf;lkas dfj;lkadsfj ;ladskfj ads;lfkjas ;dflkjasdf; lkjadsf;lkjadsf" name="Sanket Lamsal"  ID={20}/>
        <CommentCard image={images[0].url} name="Subash Khatri" comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk" replies={[{ userID: 12345, content: "You are so bad learn to speak english first :)" }, { userID: 32123, content: "Good Comment :)" }]} ID={30} />
        <CommentCard image={images[0].url} name="Subash Khatri" comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk" replies={[{ userID: 12345, content: "You are so bad learn to speak english first :)" }, { userID: 32123, content: "Good Comment :)" }, { userID: 32123, content: "The place was nice :P" }]}  ID={40}/>
        <CommentCard
          image={images[1].url}
          ID={10}
          name="Pratham Bhattarai"
          comment="API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API."
          replies={[
            { userID: 12345, content: "You are so bad learn to speak english first :)" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "The place was nice :P" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "Good Comment :)" },
            { userID: 32123, content: "Good Comment :)" },
          ]}
        />
        <CommentCard image={images[1].url} name="Pratham Bhattarai" comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk" ID={1} />
        <CommentCard comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk"  ID={2}/>
        <CommentCard comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk" ID = {3}/>
        <CommentCard comment="asldkfjasldkfjasldkjflasdkjflkjasdflkjaslkfdjasdlkfjasldkfjlasdkjflakjdsflasjdkflk" ID={4}/>
        <div className="BlogPost-Comment-Input">
          <img src={images[images.length-1].url}/>
          <input type="text" placeholder="Write a comment" />
          <Button color="#0071C2">Post</Button>
        </div>
      </div>
    </BlogPostConatainer>
  )
}

export default BlogPost;