import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/details.js';
  
class Details extends React.Component {
   
    componentDidMount() {
        this.props.getDataDetails();
    };

    componentDidUpdate() {
        if(this.props.shouldFind || this.props.match.params.itemId !== this.props.eventId) {
            const id = this.props.match.params.itemId;
            this.props.showDetails(id)
        }
    };

    render() {
        console.log(this.props.event)
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
        showDetails: (eventId) => dispatch(actions.showDetails(eventId)),
        getDataDetails: () => dispatch(actions.getDataDetails()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);