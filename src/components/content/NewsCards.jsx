import { useEffect, useState, useContext } from "react"
import { FaTrash } from "react-icons/fa"
import CardNews from "../cards/CardNews"
import NewsContext from "../../context/NewsContext"

function NewsCards() {
  const { deletePost } = useContext(NewsContext)
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    setPosts(data.slice(0, 6))
    setLoading(false)
  }

  return (
    <div className="flexTry2">
      {post.map((post) => (
        <div className="allnewsCardsDiv" key={post.id}>
          <CardNews key={post.id} post={post} />
        </div>
      ))}
    </div>
  )
}

export default NewsCards
