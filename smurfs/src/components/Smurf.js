import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const Smurf = ({ getSmurf, smurfs, isFetching }) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);

    if(isFetching) {
        return <p>smurfing...</p>
    };

    return (
        <div>
            {smurfs.map( (smurf) => {
                return (
                    <div>
                        <p>Smurf Name: {smurf.name}</p>
                        <p>Smurf Age: {smurf.age}</p>
                        <p>Smurf Height: {smurf.height}</p>
                    </div>
                );
            })};
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { getSmurf })(Smurf);