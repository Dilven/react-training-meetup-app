import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/details.js';
  
class Details extends React.Component {
   
    componentDidMount() {
        const itemId = this.props.match.params.itemId; 
        this.props.showDetails(itemId)
    };

    componentDidUpdate() {
        if(this.props.itemId !== this.props.match.params.itemId) {
            this.props.showDetails(this.props.match.params.itemId);            
        }
    };

    render() {
        const {name,place,date,time} = this.props.event;
        return (
            <div>
                <strong>Nazwa: </strong>{name}<br />
                <strong>Miejsce: </strong>{place}<br />
                <strong>Data: </strong>{date}<br />
                <strong>Godzina: </strong>{time}<br />
            </div>
        );
    };
  };


const mapStateToProps = (state) => {
    return {
        ...state.details
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (itemId) => dispatch(actions.showDetails(itemId)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);