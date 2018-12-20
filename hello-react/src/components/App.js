import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {

static defaultProps={
    name:()=>{
        console.log("this")
    },
    number : 0
 };

render() {
     return (
        <div>
                {this.props.name}
            </div>
        );
    }
}

App.propTypes = {
        number:PropTypes.number,
        name:PropTypes.name.isRequired               
};

export default App;