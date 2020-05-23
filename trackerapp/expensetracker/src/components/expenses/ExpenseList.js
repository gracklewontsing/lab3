import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import { Tab, Tabs } from 'react-bootstrap';
import YearTabsRouter from './tabs/yearTabsRouter';
import MonthTabs from './tabs/monthTabs';
import styles from '../../css/App.css';
import UserService from '../auth/service/User.service';

export default class ExpenseList extends React.Component {
constructor() {
    super();
  this.state = {selectedMonth:'All', selectedYear: 2020, data: [], activeTab:2020 };
    //this.getData = this.getData.bind(this);
}

componentWillReceiveProps(nextProps) {
    if(nextProps.history.location.search){
    var search = nextProps.history.location.search;
    search = search.substring(1);
    var searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    this.setState({activeTab: parseInt(searchObj.year)});
    this.setState({selectedYear: searchObj.year});
    this.setState({selectedMonth: searchObj.month});

    this.getData(this, searchObj.year, searchObj.month);
  }else{
      this.getData(this, 2020, 'All');
    }
}

componentDidMount(){
        UserService.getExpenses(this.selectedYear, this.selectedMonth)
              .then( response => {
                this.setState({
                          content: response.data
                });
      });
}

handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab,
       selectedYear: selectedTab
     });
}

render() {
    return (
      <div>
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={2020} title={<YearTabsRouter year='2020'/>}><MonthTabs year='2020' monthlyActiveTab={this.state.selectedMonth}/></Tab>
        </Tabs>
        <Add selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} />
        <table>
          <thead>
            <tr>
            <th></th>
            <th className='desc-col'>Day</th>
            <th className='desc-col'>Month</th>
            <th className='desc-col'>Year</th>
            <th className='desc-col'>Amount</th>
            <th className='desc-col'>Method</th>
            <th className='desc-col'>To Whom</th>
            <th className='desc-col'>Need or Want?</th>
            <th className='desc-col'>Notes</th>
            <th className='button-col'>Update|</th>
            <th className='button-col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((exp) => {
                return <tr>
                <td className='counterCell'></td>
                <td className='button-col'>{exp.day}</td>
                <td className='button-col'>{exp.month}</td>
                <td className='button-col'>{exp.year}</td>
                <td className='button-col'>{exp.amount}</td>
                <td className='button-col'>{exp.method}</td>
                <td className='button-col'>{exp.towhom}</td>
                <td className='button-col'>{exp.needwant}</td>
                <td className='desc-col'>{exp.notes}</td>
                <td className='button-col'><Update expense={exp}/></td>
                <td className='button-col'><Delete expense={exp} /></td>
                </tr>
              })
            }
            </tbody>
        </table>
      </div>
    );
  }
}