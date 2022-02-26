import { createContext, useState } from "react";
import CardList from '../components/content/CardList'
import Sidebar from "../components/sidebar/Sidebar";
import CardNews from "../components/cards/CardNews";
import NewsCards from "../components/content/NewsCards";

const NewsContext = createContext()

export const NewsProvider = ({children}) => {

    const [post, setPosts] = useState([])

    // Delete Post
  const deletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setPosts(post.filter((post) => post.id !== id))
    }
  }

  // Toggle Cards Goes here  
  const [color, setColor] = useState("cardToggle")
  const [color2, setColor2] = useState("listToggle")

  const changeColor = () => {
    setColor("colorChanger")
    setColor2("colorChanger2")
  }

  const changeColor2 = () => {
    setColor("cardToggle")
    setColor2("listToggle")
  }

    return(
        <NewsContext.Provider value={{
            post,
            color,
            color2,
            changeColor,
            changeColor2,
            deletePost,
        }}>
            {children}
        </NewsContext.Provider>
    )

}

export default NewsContext