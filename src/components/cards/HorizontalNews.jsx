import photo from "../../assets/ProfilePic.jpg"

function HorizontalNews({ post }) {
  return (
    <>
      <div>
        <div key={post.id}>
          <div className="cardListContainer">
            <div className="newsPhotoContainer">
              <img className="newsPhoto" src={photo} alt="newsPic" />
            </div>
            <div className="newsContent">
              <div className="newscardText">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
              <div className="moreDetails">
                <h6 className="date">Thursday 24 February 2022 11:36 IST </h6>
                <button className="readMore">Read more...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HorizontalNews
