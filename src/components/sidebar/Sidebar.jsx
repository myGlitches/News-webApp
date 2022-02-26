import pic from "../../assets/ProfilePic.jpg"
import ToggleState from "./ToggleState"
import Feedback from "./Feedback"
import { useState } from "react"
import FeedbackForm from "./FeedbackForm"

function Sidebar() {
  const [active, setActive] = useState()
  const [SidebarStyle, setSidebarStyle] = useState("sidebarContainer")
  const [hideandShow, setHideandShow] = useState(<ToggleState />)
  const [feedbackSubmit, setFeedbackSubmit] = useState("feedbackSubmit")

  const change = () => {
    if (active == null) {
      setActive(
        <div className="feedbackForm">
          <FeedbackForm />
        </div>
      )
      setSidebarStyle("sidebarFeedbackContainer")
      setHideandShow()
      setFeedbackSubmit("feedbackSubmitChange")
    } else {
      setActive()
      setSidebarStyle("sidebarContainer")
      setHideandShow(<ToggleState />)
      setFeedbackSubmit("feedbackSubmit")
    }
  }

  return (
    <div className={SidebarStyle}>
      <div className="sidebarDivs">
        <div className="sidebarItems">
          {/* Profile Card */}
          <div className="profileCard">
            {/* Profile Pic */}
            <div className="profilepicContainer">
              <img className="profilePic" src={pic} alt="profilepic" />
            </div>
            {/* Profile Details */}
            <div className="userdetailsContainer">
              <div>
                <h5>Hi, Reader</h5>
              </div>
              <div className="userdetailsTextFont">Here's your news!</div>
            </div>
          </div>
          {hideandShow}
          <div className="feedbackcardContainer">
            <Feedback />
            <div className="feebdackSubmitContainer">
              <button onClick={change} className={feedbackSubmit}>
                We are listening
              </button>
            </div>
          </div>
        </div>
        {active}
      </div>
    </div>
  )
}

export default Sidebar
