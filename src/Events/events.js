import React from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList.js';
import FiltrationList from './FiltrationList.js';
import AddEvent from './AddEvent.js';
import Loader from '../Loader.js';


import fetch from 'isomorphic-fetch';

class Events extends React.Component {
    

    static PropTypes = {
        events: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            events:[],
            eventsShow:[],
            filter:'',
            newEventName:'',
            newEventNameValid:false,
            newEventTime:'',
            newEventTimeValid:false,
            newEventPlace:'',
            newEventPlaceValid:false,
            newEventDate:'',
            newEventDateValid:false,
            isLoading:true
        };
        this.onClickClear = this.onClickClear.bind(this);
        this.showEvents = this.showEvents.bind(this);
    }

    componentDidMount() {
    
        fetch('http://frontendinsights.com/events.json')
            .then((response) => response.json())
            .then((events) => {
            this.setState({events, eventsShow:events, isLoading:false})
        });   
    }

    onClickClear(event) {
        event.preventDefault();        
        this.setState({events:[]});
    }

    showEvents(event) {
        event.preventDefault();        
        this.setState({events:this.state.eventsShow});
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
        this.setState({
            [field]: newValue,
            [field + 'Valid']: newValue.length > 0
        });
    }
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
        } = this.state;

        const maxId = Math.max(...events.map(item => item.id));

        const newEvent = {
            id:maxId + 1,
            name: newEventName,
            place: newEventPlace,
            date: newEventDate,
            time: newEventTime
        }

        if(newEventNameValid && newEventPlaceValid && newEventDateValid && newEventTimeValid) {
            events.push(newEvent);
            this.setState({events});  
            this.setState({newEventName:'', newEventPlace:'', newEventTime:''})
        }
    }

    render() {
        return (
        <div>
            <FiltrationList onInputChange={this.onFilterChange.bind(this)} filter={this.state.filter}/>
            <Loader isLoading={this.state.isLoading}><EventList onClickClear={this.onClickClear.bind(this)} showEvents={this.showEvents.bind(this)} deleteEvent={this.deleteEvent.bind(this)} events={this.state.events} filter={this.state.filter}/></Loader>
            <AddEvent 
            newEventName={this.state.newEventName}
            newEventNameValid={this.state.newEventNameValid}
            newEventDateValid={this.state.newEventDateValid}
            newEventPlaceValid={this.state.newEventPlaceValid}
            newEventTimeValid={this.state.newEventTimeValid}
            onInputNewEvent={this.onInputNewEvent.bind(this)}
            onAddEvent={this.onAddEvent.bind(this)}/>
        </div>
        )
    }   
}

export default Events;