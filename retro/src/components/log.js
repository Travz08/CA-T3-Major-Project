import React, { Component } from 'react';

const retrospectAPI =`https://namenotesapi.herokuapp.com/posts`


class Title extends Component {

    componentDidMount() {
        fetch(retrospectAPI)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    retroData: d
                })
            })
    }

    render() {
        return (
            <div>
                <p>Loading..</p>
            </div>
        )
    }
}

export default Title;