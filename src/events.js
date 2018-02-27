import React from 'react';
import PropTypes from 'prop-types';
import events from './data/events.json';





class Events extends React.Component {

    static PropTypes = {
        events: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            events: [],
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

    render() {
        console.log(this);

        return(
            <div>
                <ul>
                    {this.state.events.map((event, index) => {
                    
                        const date = new Date(event.date);

                        if(date >= Date.now()) {
                            return (
                                <li key={index}>
                                Nazwa: {event.name} <br />
                                Gdzie: {event.place} <br />
                                Data: {event.date} <br />
                                Godzina: {event.time} <br /> <br />
                                </li>
                            );
                        }
                    })}
                </ul>
                <button onClick={this.onClickClear}>Wyczyść</button>
                <button onClick={this.showEvents}>Pokaz wszystkie wydarzenia</button>
            </div>
        )  
    }
}
    


export default Events;