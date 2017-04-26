import React from "react";
import MyButton from './MyButton';
import MyHeader from './MyHeader';

export default class Layout extends React.Component {
	render() {
	    return(
	        <div>
	            <MyHeader header="Header"/>
	            <MyButton />
	        </div>
	    );
	}
}