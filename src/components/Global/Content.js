import React, { Component } from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';
class Content extends Component {
  constructor(){
    super();
    // this.state={
    //   count:0,
    //   number1:0,
    //   number2:0,
    //   result:0
    // };
    // this.handleCountClick=this.handleCountClick.bind(this);
    // this.handleChangeInput=this.handleChangeInput.bind(this);
    // this.handleResultClick=this.handleResultClick.bind(this);

  }
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  // componentDidMount(){

  // }

  // handleCountClick(e){
  //   console.log(e.target.id);
  //   e.target.id ==="add" ? this.setState({count:this.state.count + 1}):"";
  //   e.target.id ==="sustraer" ? this.setState({count:this.state.count - 1}):"";
  //   e.target.id ==="reset" ? this.setState({count:this.state.count=0}):"";
  // }

  // handleChangeInput(e){
  //   console.log(e.target.id);
  //   e.target.id==="number1"? this.setState({number1:Number(e.target.value)}):this.setState({number2:Number(e.target.value)})
  // }

  // handleResultClick(e){
  //   this.setState({result:this.state.number1 + this.state.number2})
  // }


  render() {
    const { body } = this.props;
    return (
      <div className="Content">
           {body}
      
        {/* <h1>Sono il contenuto!</h1>
        <h1>Count:{this.state.count}</h1>
        <button id="add" onClick={this.handleCountClick}>+</button>
        <button id="sustraer" onClick={this.handleCountClick}>-</button>
        <button id="reset" onClick={this.handleCountClick}>reset</button>
        <hr></hr>
        <input id="number1" type="number"value={this.state.number1} onChange={this.handleChangeInput}></input>
        <input id="number2" type="number"value={this.state.number2} onChange={this.handleChangeInput}></input>
        <button id="result" onClick={this.handleResultClick}>result</button> {this.state.result} */}
      </div>
    );
  }
}

export default Content;
