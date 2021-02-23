import "./AddComments.css";
import RatingStars from "./RatingStars";
const AddComments = () => {
  return (
    <div className="Input_box">
      <form className="Input_form">
        <label>
          <h3>Oceń i skomentuj</h3>
        </label>
        <RatingStars />
        <textarea></textarea>
        <input className="Input_submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddComments;
