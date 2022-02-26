import photo from "../../assets/ProfilePic.jpg"

function CardNews({ post }) {
  return (
    <>
      <div key={post.id} className="cardNewsContainer">
        <div className="cardNewsMainTextContainer">
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 20)}...</p>
        </div>
        <h6>Thursday 24 February 2022 11:36 IST </h6>
        <div className="cardNewsPhotoContainer">
          <img className="cardNewsPhoto" src={photo} alt="newsPic" />
        </div>
      </div>
    </>
  )
}

export default CardNews
