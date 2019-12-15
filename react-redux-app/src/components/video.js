import React from 'react';
import { connect } from 'react-redux';

function video(props) {

    const element  = document.querySelector('.video-node');
    console.log('element', element);
    element.innerHTML = props.embed ;
 
    return (
        <div>
          <h3>Title: {props.title}</h3>
          <p>Date: {props.date.substring(0, 10)} </p>
          {/* <div className = 'video-node'>
     
        </div>  */}
        </div>
    )
}

const mapStateToProps = ({current}) => {
    return {
        title: current.title,
        embed: current.embed,
        date: current.date
    }
}

export default connect(mapStateToProps, {  })(video)
