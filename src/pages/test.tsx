import React from 'react';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }

    componentDidMount() {
        alert('hi')
    }

    render() {
        return (
            <div className="main-section">
                <h1>sosi xyu pidor</h1>
            </div>
        );
    }
}

export default Test;
