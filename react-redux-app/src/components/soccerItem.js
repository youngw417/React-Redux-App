import React from "react";
import { connect } from "react-redux";
import { getPlay } from "../actions";
function soccerItem(props) {
  const handleClick = e => {
    e.preventDefault();
    props.getPlay(props.each);
    props.history.push('/video');
    // window.location.href = "./video";
  };
  return (
    <div className="soccer-item">
      <h3>Title: {props.each.title}</h3>
      <p>Date: {props.each.date.substring(0, 10)}</p>

      <img src={props.each.thumbnail} alt="thumbnail" onClick={handleClick} style = {{ cursor: 'pointer'}} />
    </div>
  );
}
const mapStateToProps = ({ current }) => {
  return {
    current: current.title,
    embed: current.embed,
    date: current.date
  };
};

export default connect(mapStateToProps, { getPlay })(soccerItem);
