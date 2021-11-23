import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newBand } from '../actions/bandActions';
import { v4 as uuidv4 } from 'uuid';

class BandNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: uuidv4(),
            chord: '',
            instrument: '',
            album: '',
            genre: '',
            likes: 0,
            name: ''
        };
        this.onChange = this.onChange.bind(this);
        this.defaultZero = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) { this.setState({ [event.target.name]: event.target.value });}
    defaultZero(event) { this.setState({ 0: event.target.value });}

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        const band = {
            chord: this.state.chord,
            instrument: this.state.instrument,
            album: this.state.album,
            genre: this.state.genre,
            likes: this.state.likes, 
            name: this.state.name,
            uid: this.state.uid
        };
        this.props.newBand(band);
        console.log(band)
        this.setState({
            uid: '',
            chord: '',
            instrument: '',
            album: '',
            genre: '',
            likes: '',
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <div>Name:</div>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="chord" value={this.state.chord} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="instrument" value={this.state.instrument} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="album" value={this.state.album} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="genre" value={this.state.genre} onChange={this.onChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

BandNew.propTypes = {
    newBand: PropTypes.func.isRequired,
}

export default connect(null, { newBand })(BandNew);