import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8oSQD85-AgSX2BGjm6XOCIv9xCH5rsT_4FiHIYz0lbX_wcyy26NIddQhCoq0UTnXv-U&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rim ben Ali</span>
          </td>
          <td className="widgetLgDate">15 Apr 2024</td>
          <td className="widgetLgAmount">$102</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6b7z1i9sBpO7-GwDzttPw3X3NAWJLa2KAdrGTXn7Ug&s"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Fatma bousseha</span>
          </td>
          <td className="widgetLgDate">14 Feb 2024</td>
          <td className="widgetLgAmount">$90</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://techbriefly.com/wp-content/uploads/2023/02/What-is-generative-AI-Tools-images-and-more-examples-2.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Samir hamdi </span>
          </td>
          <td className="widgetLgDate">2 Feb 2024</td>
          <td className="widgetLgAmount">$80</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://preview.redd.it/tried-to-generate-a-random-face-with-ai-now-i-have-to-worry-v0-indsbidh39la1.jpg?width=640&crop=smart&auto=webp&s=9020f96f8079f3518c6617f97a6362b2fbeb744b"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">jihen belkhir</span>
          </td>
          <td className="widgetLgDate">29 jan 2024</td>
          <td className="widgetLgAmount">$127</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
