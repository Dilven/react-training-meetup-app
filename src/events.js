import React from 'react';
import PropTypes from 'prop-types';
import events from './data/events.json';
import EventList from './EventList.js';
import FiltrationList from './FiltrationList.js'

class Events extends React.Component {
    

    static PropTypes = {
        events: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            events: [],
            filter:''
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
        console.log(newValue);
        
        this.setState({ filter: newValue });
    }

    render() {
        return (
        <div>
            <FiltrationList onInputChange={this.onFilterChange.bind(this)} value={this.state.filter}/>
            <EventList onClickClear={this.onClickClear.bind(this)} showEvents={this.showEvents.bind(this)} deleteEvent={this.deleteEvent.bind(this)} events={this.state.events} filter={this.state.filter}/>
        </div>
        )
    }   
}

export default Events;