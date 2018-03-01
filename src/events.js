import React from 'react';
import PropTypes from 'prop-types';
import events from './data/events.json';
import EventList from './EventList.js';
import FiltrationList from './FiltrationList.js'
import AddEvent from './AddEvent.js'

class Events extends React.Component {
    

    static PropTypes = {
        events: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            events: [],
            filter:'',
            newEventName:'',
            newEventTime:'',
            newEventPlace:'',
            newEventDate:''
        };
        this.onClickClear = this.onClickClear.bind(this);
        this.showEvents = this.showEvents.bind(this);
    }

    componentDidMount() {
        this.setState({events})
    }

    onClickClear(event) {
        event.preventDefault();        
        this.setState({events:[]});
    }

    showEvents(event) {
        event.preventDefault();        
        this.setState({events});
    }

    deleteEvent(index,event) {
        event.preventDefault();
        const choiceEvents = this.state.events.filter(element =>element.id !== index);
        this.setState((prevState,props) => {
            return {events: choiceEvents};
        });
    }

    onFilterChange(event) {
        event.preventDefault();
        const newValue = event.currentTarget.value;
        this.setState({ filter: newValue });
    }

    onInputNewEvent(field, event) {
        const newValue = event.currentTarget.value;
        this.setState({[field]: newValue});
    }
    onAddEvent(event) {
        event.preventDefault();

        const {
            events,
            newEventName,
            newEventPlace,
            newEventTime,
            newEventDate,
        } = this.state;

        const maxId = Math.max(...events.map(item => item.id));

        const newEvent = {
            id:maxId + 1,
            name: newEventName,
            place: newEventPlace,
            date: newEventDate,
            time: newEventTime
        }
        events.push(newEvent);
        this.setState({events});
        this.setState({newEventName:'', newEventPlace:'', newEventTime:''})
    }

    render() {
        return (
        <div>
            <FiltrationList onInputChange={this.onFilterChange.bind(this)} filter={this.state.filter}/>
            <EventList onClickClear={this.onClickClear.bind(this)} showEvents={this.showEvents.bind(this)} deleteEvent={this.deleteEvent.bind(this)} events={this.state.events} filter={this.state.filter}/>
            <AddEvent 
            onInputNewEvent={this.onInputNewEvent.bind(this)} newEventTime={this.state.newEventTime}          
            onAddEvent={this.onAddEvent.bind(this)}/>
        </div>
        )
    }   
}

export default Events;