import React from 'react';
import ReactDom from 'react-dom';
import GoogleMapReact from 'google-map-react';

class App extends React.Component {

    static defaultProps = {
        center: {
            lat: 49.90,
            lng: -97.14
        },
        zoom: 11
    };

    render () {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <p>Plan your trip here</p>
                <Info />
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                />>
            </div>
        )
    }
}

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(`Form Value: ${this.state.from} and to ${this.state.to}`);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" name="from" value={this.state.from} onChange={this.handleChange} />
                    <input type = "text" name="to" value={this.state.value}  onChange={this.handleChange} />
                    <button className="button">Go</button>
                </form>
            </div>
        );
    }
}

// class MapView extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>Render Google maps to ensure address accuracy</p>
//                 <div className="googleMap" >
//                     map render
//                 </div>
//             </div>
//         );
//     }
// }

ReactDom.render(<App />, document.getElementById('app'));
