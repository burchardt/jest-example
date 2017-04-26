import React from "react";

export class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true}
    }

    toggleState() {
        this.setState({open : !this.state.open});
    };

    getButtonText() {
       return this.state.open ? "Open" : "Close";
    }

    render() {
        const buttonStyle = {
            "fontSize": "25px",
            "backgroundColor": "lightblue"
        };

        return(
            <div>
                <button id="myButton"
                    className="btn"
                    style={buttonStyle}
                    onClick={this.toggleState.bind(this)}
                >
                {this.getButtonText()}
                </button>
            </div>
        );
    }
}