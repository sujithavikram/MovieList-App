import React from 'react';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasWatched: false,
        }
        this.handleWatchClickButton = this.handleWatchClickButton.bind(this);
    }
    handleWatchClickButton(e) {
        e.preventDefault();
        var newWatch = !this.state.hasWatched; 
        this.setState({hasWatched : newWatch});
        this.props.movieObj.watch = newWatch;
        this.props.cb();
    }
    render() {
        const divStyle = {
            color: 'black',
            border: '1px solid black',
            padding: '10px',
            width: '200px'
        };

        return (
            <div style={divStyle}>
                <span>{this.props.movieName}</span>
                <span>
                    <button onClick={this.handleWatchClickButton}>{this.state.hasWatched ? "Watched" : "To Watch"}</button>
                </span>
                </div>
        )
    }
}

