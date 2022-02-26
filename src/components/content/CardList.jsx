import { useEffect, useState, useContext } from "react"
import { AiOutlineCloseCircle as Close } from "react-icons/ai"
import HorizontalNews from "../cards/HorizontalNews"
import NewsContext from "../../context/NewsContext"

function CardList() {
  const { deletePost } = useContext(NewsContext)
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    setPosts(data.slice(0, 4))
    setLoading(false)
  }

  return (
    <div className="flexTry">
      {post.map((post) => (
        <div key={post.id} className="cardandDeleteContainer">
          <HorizontalNews key={post.id} post={post} />
          <button className="deleteIcon">
            <Close />
          </button>
        </div>
      ))}
    </div>
  )
}

export default CardList
