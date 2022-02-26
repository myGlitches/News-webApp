import { useContext } from "react"
import { FaAlignJustify, FaGripHorizontal } from "react-icons/fa"
import NewsContext from "../../context/NewsContext"

function ToggleState() {
  const { color, color2, changeColor, changeColor2 } = useContext(NewsContext)

  return (
    <>
      <div className="toggleTileContainer">
        <div className="toggleTitle">View Toggle</div>
        <div className="toggleTransitionContainer">
          <div className="toggleTransition">
            <div onClick={changeColor} className={color}>
              <FaGripHorizontal />
            </div>
            <div onClick={changeColor2} className={color2}>
              <FaAlignJustify />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToggleState
