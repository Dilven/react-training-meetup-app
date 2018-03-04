import React from 'react';
import events from './data/events.json'
  
class Details extends React.Component {
 
    constructor(props) {

        super(props);
        this.state = {
            event: {},
        }

    }

    getEvent () {
        const itemId = this.props.match.params.itemId;
        const event = events.find(element =>element.id === parseInt(itemId,10));
        
        return event;
        
    }

    componentDidMount() {
            this.setState({event:this.getEvent()});
        

    }

    componentDidUpdate() {
        const event = this.getEvent();

        if(event.id!==this.state.event.id) {
            this.setState({event});
        }
    }

    render() {


        const {name,place,date,time} = this.state.event;
        
        return (
            <div>
                <strong>Nazwa: </strong>{name}<br />
                <strong>Miejsce: </strong>{place}<br />
                <strong>Data: </strong>{date}<br />
                <strong>Godzina: </strong>{time}<br />
            </div>
    
        )
    }
  }

  export default Details;