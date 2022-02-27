import CardList from "./CardList"
import NewsCards from "./NewsCards"
import { useContext } from "react"
import NewsContext from "../../context/NewsContext"

function Content() {
  const { color, color2 } = useContext(NewsContext)

  return (
    <>
      <div className="newsContainer">
        {color === "colorChanger" ? <NewsCards /> : <CardList />}
      </div>
    </>
  )
}

export default Content
