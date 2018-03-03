import React from 'react';
import fetch from 'isomorphic-fetch';
  
class Details extends React.Component {
 
    constructor(props) {

        super(props);
        this.state = {
            event: {},
        }

    }

    componentDidMount() {
        const itemId = this.props.match.params.itemId;
        fetch('http://frontendinsights.com/events.json')
        .then((response) => response.json())
        .then((events) => {
            const event = events.find(element =>element.id === parseInt(itemId,10));
        this.setState({event});
    }); 

    }

    render() {

        console.log(this.state.event);

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