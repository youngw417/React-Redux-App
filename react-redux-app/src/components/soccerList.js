import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSoccer} from '../actions';
import SoccerItem from './soccerItem';
import Loader from 'react-loader-spinner';



function SoccerList(props) {

const {getSoccer } =  props;
useEffect(() => {

  getSoccer();

},[getSoccer])
   

  


    return (
        <div className = 'soccer-list'>
            {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
            { props.data.map( (each, index) =>
             <SoccerItem key = {index}  history = {props.history} each ={each} />
                )}
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        current: state.current,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSoccer})(SoccerList);
