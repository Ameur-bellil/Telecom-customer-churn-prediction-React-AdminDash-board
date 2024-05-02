import "./WidgetSm.css";

import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Customers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ameur Bellil</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chadi Ben Rejeb</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZVJoAAsMFxjfTKyMuZKSxkfZ76lF9ExFSp1jRuT2sQ&s"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Salah Ben Ahmed</span>
            <span className="widgetSmUserTitle">Mechanical Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">khalil Ben Ahmed</span>
            <span className="widgetSmUserTitle">student</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://c.vanceai.com/assets/images/common/introduce_23-2c356678ee.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Wejden Achouri</span>
            <span className="widgetSmUserTitle">Teacher</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
