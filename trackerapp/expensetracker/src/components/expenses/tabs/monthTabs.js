import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import MonthTabsRouter from './monthTabsRouter'
import YearTabsRouter  from './yearTabsRouter'

class MonthTabs extends React.Component {
 constructor(){
  super();
  this.state = {activeTab:''};
  this.handleSelect = this.handleSelect.bind(this);
}
componentWillReceiveProps(nextProps) {
    this.setState({activeTab:this.props.year+''+nextProps.monthlyActiveTab});
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab
     });
 }
render(){
  return <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.year+'/All'} title={<MonthTabsRouter tabId='All' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Jan'} title={<MonthTabsRouter tabId='1' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Feb'} title={<MonthTabsRouter tabId='2' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Mar'} title={<MonthTabsRouter tabId='3' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Apr'} title={<MonthTabsRouter tabId='4' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/May'} title={<MonthTabsRouter tabId='5' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Jun'} title={<MonthTabsRouter tabId='6' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Jul'} title={<MonthTabsRouter tabId='7' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Aug'} title={<MonthTabsRouter tabId='8' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Sep'} title={<MonthTabsRouter tabId='9' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Oct'} title={<MonthTabsRouter tabId='10' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Nov'} title={<MonthTabsRouter tabId='11' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'/Dec'} title={<MonthTabsRouter tabId='12' year={this.props.year}/>}></Tab>
    </Tabs>
}
}
export default MonthTabs;