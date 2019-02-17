import React, { Component } from 'react';
import Loader from 'react-loader-spinner';


class Loaderx extends Component {
    render() {
        return(
        <div className="loader">
         <Loader 
            type="Triangle"
            color="#00BFFF"
            height="100"	
            width="100"
         />
        </div>
        );
       }
}

export default Loaderx;
