import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class MonthTabsRouter extends React.Component {
 constructor(){
  super();
  this.state={style:{'font-size': '10px'}}
 }
render(){
  if(this.props.tabId == 'All'){
   return <Link to={{pathname: '/'+this.props.year + '/0'}} >
     <p style={this.state.style}>Show All</p>
    </Link>
  }
else{
   return <Link to={{pathname: '/'+this.props.year+ '/' +this.props.tabId  }} >
     <p style={this.state.style}>{this.props.tabId} {this.props.year}</p>
    </Link>
  }
}
}
export default MonthTabsRouter;