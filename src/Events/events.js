import React from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList.js';
import FiltrationList from './FiltrationList.js';
import AddEvent from './AddEvent.js';
import Loader from '../Loader.js';
import { connect } from 'react-redux';
import * as actions from '../actions/events';

class Events extends React.Component {
    

    static PropTypes = {
        events: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            eventsShow:[],
        };
        this.onClickClear = this.onClickClear.bind(this);
        this.showEvents = this.showEvents.bind(this);
    };

    onClickClear(event) {
        event.preventDefault();        
        this.props.clearEvents();
    };

    showEvents(event) {
        event.preventDefault();        
        this.setState({events:this.state.eventsShow});
    };

    deleteEvent(index,event) {
        event.preventDefault();
        this.props.deleteEvent(index);
    };

    onFilterChange(event) {
        event.preventDefault();
        const newValue = event.currentTarget.value;
        this.props.filteredEvents(newValue);        
    };

    onInputNewEvent(field, event) {
        const newValue = event.currentTarget.value;
        this.props.inputNewEvent(field, newValue)
    };
    onAddEvent(event) {
        event.preventDefault();

        const {
            events,
            newEventName,
            newEventPlace,
            newEventTime,
            newEventDate,
            newEventNameValid,
            newEventPlaceValid,
            newEventTimeValid,
            newEventDateValid,
        } = this.props.events;

        const maxId = Math.max(...events.map(item => item.id));

        const newEvent = {
            id:maxId + 1,
            name: newEventName,
            place: newEventPlace,
            date: newEventDate,
            time: newEventTime
        }
        
        var newEvents = [...events];
        if(newEventNameValid && newEventPlaceValid && newEventDateValid && newEventTimeValid) {
            newEvents.push(newEvent);
        this.props.addEvent(newEvents);
        }
    }

    render() {
        return (
        <div>
            <FiltrationList onInputChange={this.onFilterChange.bind(this)} filter={this.state.filter}/>
            <Loader isLoading={this.props.events.isLoading}><EventList onClickClear={this.onClickClear.bind(this)} showEvents={this.showEvents.bind(this)} deleteEvent={this.deleteEvent.bind(this)} events={this.props.events.events} filter={this.props.events.filter}/></Loader>
            <AddEvent 
            newEventName={this.props.events.newEventName}
            newEventNameValid={this.props.events.newEventNameValid}
            newEventDateValid={this.props.events.newEventDateValid}
            newEventPlaceValid={this.props.events.newEventPlaceValid}
            newEventTimeValid={this.props.events.newEventTimeValid}
            onInputNewEvent={this.onInputNewEvent.bind(this)}
            onAddEvent={this.onAddEvent.bind(this)}/>
        </div>
        )
    }   
}

const mapStateToProps= (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearEvents: () => dispatch(actions.clearEvents()),
        deleteEvent: (id) => dispatch(actions.deleteEvent(id)),
        filteredEvents: (value) => dispatch(actions.filteredEvents(value)),
        inputNewEvent: (field, newValuve) => dispatch(actions.inputNewEvent(field, newValuve)),
        addEvent: (newEvents) => dispatch(actions.addEvent(newEvents)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
