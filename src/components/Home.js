import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../actions/bandActions';

class Home extends Component {
    componentDidMount() {
        this.props.fetchBands();
    }

    render() {
        console.log(this.props);
        const listOfBands = this.props.bands.map((band) => {
            return (
                <div key={band.id}>
                    <div>
                        { band.name }{' '}
                        { band.chord }{' '}
                        { band.instrument }{' '}
                        { band.album }{' '}
                        { band.genre }{' '}
                        { band.likes }<br />
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h3>List of Bands</h3>
                <p>{ listOfBands }</p>
            </div>
        )
    }
}

Home.propTypes = {
    fetchBands: PropTypes.func.isRequired,
    bands: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    bands: state.bands.bands
});

export default connect(mapStateToProps, { fetchBands })(Home);