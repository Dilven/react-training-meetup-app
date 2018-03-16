import React from 'react';

const FiltrationList = (props) => {

        return(
            <div>
                <form>
                    <input type="text" placeholder="Szukaj..." onChange={props.onInputChange} value={props.filter}/>
                </form>
            </div>
        );
    };

export default FiltrationList