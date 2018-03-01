import React from 'react';
import PropTypes from 'prop-types';

const FiltrationList = (props) => {

        return(
            <div>
                <form>
                    <input type="text" placeholder="Szukaj..." onChange={props.onInputChange} value={props.filter}/>
                </form>
            </div>
        );
    }

FiltrationList.propTypes = {
    filter: PropTypes.string.isRequred,
    onFilterChange: PropTypes.func.isRequred
}

export default FiltrationList