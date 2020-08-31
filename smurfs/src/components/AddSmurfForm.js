import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            smurf: {
                name: "",
                age: "",
                height: ""
            }
        };
    };

    handleChanges = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    addSmurf = () => {
        this.props.addSmurf(this.state.smurf);
        this.setState({
            smurf: {
                name: "",
                age: "",
                height: ""
            }
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.handleChanges}
                        value={this.state.smurf.name}
                    />
                    <input 
                        type="text"
                        name="age"
                        placeholder="age"
                        onChange={this.handleChanges}
                        value={this.state.smurf.age}
                    />
                    <input 
                        type="text"
                        name="height"
                        placeholder="height"
                        onChange={this.handleChanges}
                        value={this.state.smurf.height}
                    />
                    <button>Add a smurf!</button>
                </form>
            </div>
        );
    };
};

export default connect(null, { addSmurf })(AddSmurfForm);