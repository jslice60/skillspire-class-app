import React, {Component} from 'react';
import './StockComponentCSS.css'
class StockComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 0
        }
        this.addButton = this.addButton.bind(this);
        this.minusButton = this.minusButton.bind(this);
        this.changeButton = this.changeButton.bind(this);
    }
    addButton() {
        this.setState({
            count: 1
        })
    }
    minusButton() {
        this.setState({
            count: -1
        })
    }
    changeButton(changer) {
        console.log(changer);
        console.log("this.state.count", this.state.count);
        if(changer === 'plus') {
            this.setState({
            count: this.state.count + 1
        })
        } else if (changer === 'minus') {
            this.setState({
                count: this.state.count - 1
            })
        } else if (changer === 'reset') {
            this.setState({
                count: 0
            })
        }
    }
    componentDidMount() {
        console.log("Stock Component Updated!");
        //callFunction(); //API call
    }
    componentDidUpdate() {
        console.log("Updated!");

    }
    render() {
    console.log("J Render!");
return (
    <div>
      <div className="stockContainer">
        <h1>Inventory for cereal: {this.props.name}</h1>
        <div>
        <button onClick={() => this.changeButton('plus')}> + </button>
        <button onClick={() => this.changeButton('minus')}> - </button>
        <button onClick={() => this.changeButton('reset')}> RESET </button>
        </div>
        <h1> {this.state.count} </h1>
       </div>
    </div>
)
}
}
export default StockComponent1;