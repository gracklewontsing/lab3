import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var querystring = require('querystring');
class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      amount: '',
      method: '',
      day: '',
      month: '',
      year: '',
      towhom: '',
      needwant: '',
      notes: '',
      messageFromServer: '',
      modalIsOpen: false
    }
this.update = this.update.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.expense.id,
      notes: this.props.expense.notes,
      amount: this.props.expense.amount,
      day: this.props.expense.day,
      month: this.props.expense.month,
      year: this.props.expense.year,
      method: this.props.expense.method,
      towhom: this.props.expense.towhom,
      needwant: this.props.expense.needwant
    });
  }
componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.expense.id,
      notes: nextProps.expense.notes,
      month:nextProps.expense.month,
      year:nextProps.expense.year
    })
  }
openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
closeModal() {
    this.setState({
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
handleSelectChange(e) {
    if (e.target.name == "month") {
      this.setState({
        month: e.target.value
      });
    }
    if (e.target.name == "year") {
      this.setState({
        year: e.target.value
      });
    }
  }
handleTextChange(e) {
    if (e.target.name == "notes") {
        this.setState({
          notes: e.target.value
        });
      }
      if (e.target.name == "amount") {
        this.setState({
          amount: e.target.value
        });
      }
      if (e.target.name == "day") {
              this.setState({
                day: e.target.value
              });
            }
      if (e.target.name == "towhom") {
              this.setState({
                towhom: e.target.value
              });
      }
      if (e.target.name == "needwant") {
              this.setState({
                needwant: e.target.value
              });
      }
      if (e.target.name == "method") {
              this.setState({
                method: e.target.value
              });
      }
  }
onClick(e) {
    this.update(this);
  }
update(e) {
    var expense = {
        method: e.state.method,
        towhom: e.state.towhom,
        needwant: e.state.needwant,
        notes: e.state.notes,
        amount: e.state.amount,
        day: e.state.day,
        month: e.state.month,
        year: e.state.year
    }
    
    axios.post('http://localhost:8080/expense',expense).then(function(response) {
      e.setState({
        messageFromServer: response.data
      });
});
  }
render() {
    if(this.state.messageFromServer == ''){
      return (
        <div>
          <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
            className="Modal">
<Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year }} style={{ textDecoration: 'none' }}>
            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
          </Link><br/>
<fieldset>
           <label for="notes">Notes:</label><input type="text" id="notes" name="notes" value={this.state.notes} onChange={this.handleTextChange}></input>
           <label for="method">Method:</label><input type="text" id="method" name="method" value={this.state.method} onChange={this.handleTextChange}></input>
           <label for="needwant">Need or Want?:</label><input type="text" id="needwant" name="needwant" value={this.state.needwant} onChange={this.handleTextChange}></input>
           <label for="towhom">To whom?:</label><input type="text" id="towhom" name="towhom" value={this.state.towhom} onChange={this.handleTextChange}></input>
           <label for="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
           <label for="day">Day:</label><input type="number" id="day" name="day" value={this.state.day} onChange={this.handleTextChange}></input>
           <label for="month">Month:</label><select id="month" name="month" value={this.state.month} onChange={this.handleSelectChange}>
                <option value="1" id="Jan">January</option>
                <option value="2" id="Feb">February</option>
                <option value="3" id="Mar">March</option>
                <option value="4" id="Apr">April</option>
                <option value="5" id="May">May</option>
                <option value="6" id="Jun">June</option>
                <option value="7" id="Jul">July</option>
                <option value="8" id="Aug">August</option>
                <option value="9" id="Sep">September</option>
                <option value="10" id="Oct">October</option>
                <option value="11" id="Nov">November</option>
                <option value="12" id="Dec">December</option>
             </select>
           <label for="year">Year:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
                <option value="2017" id="17">2017</option>
                <option value="2018" id="18">2018</option>
                <option value="2019" id="19">2019</option>
                <option value="2020" id="20">2020</option>
             </select>
          </fieldset>
<div className='button-center'>
              <br/>
              <Button bsStyle="warning" bsSize="small" onClick={this.onClick}>Update</Button>
            </div>
          </Modal>
        </div>
      )
    }
    else{
      return (
        <div>
         <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Add Expense"
           className="Modal">
<div className='button-center'>
              <h3>{this.state.messageFromServer}</h3>
              <Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year}} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
              </Link>
            </div>
          </Modal>
        </div>
        )
      }
  }
}
export default Update;