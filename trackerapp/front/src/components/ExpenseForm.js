import React from 'react';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.onDateChange = this.onDateChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onMethodChange = this.onMethodChange.bind(this);
        this.onToWhomChange = this.onToWhomChange.bind(this);
        this.onNeedWantChange = this.onNeedWantChange.bind(this);
        this.onNotesChange = this.onNotesChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date: props.expense ? props.expense.date : '',
            amount: props.expense ? props.expense.amount : 0,
            method: props.expense ? props.expense.method : '',
            towhom: props.expense ? props.expense.towhom : '',
            needwant: props.expense ? props.expense.needwant: '',
            notes: props.expense ? props.expense.notes: '',

            error: ''
        };
    }

    onDateChange(e) {
        const date = e.target.value;
        this.setState(() => ({ date: date }));
    }

    onAmountChange(e) {
        const amount = parseFloat(e.target.value);
        this.setState(() => ({ amount: amount }));
    }

    onMethodChange(e) {
        const method = e.target.value;
        this.setState(() => ({ method: method }));
    }

    onToWhomChange(e) {
        const towhom = e.target.value;
        this.setState(() => ({ towhom: towhom }));
    }

    onNeedWantChange(e) {
            const needwant = e.target.value;
            this.setState(() => ({ needwant: needwant }));
    }

    onNotesChange(e) {
                const notes = e.target.value;
                this.setState(() => ({ notes: notes }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.date || !this.state.amount || !this.state.method || !this.state.towhom || !this.state.needwant ) {
            this.setState(() => ({ error: 'Please set all values.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitExpense(
                {
                    date: this.state.date,
                    amount: this.state.amount,
                    method: this.state.method,
                    towhom: this.state.towhom,
                    needwant: this.state.needwant,
                    notes: this.state.notes
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-expense-form'>

                    <input type="date" placeholder="date" autoFocus
                        value={this.state.date}
                        onChange={this.onDateChange} />
                    <br />

                    <input type="number" placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <br />

                    <input type="text" placeholder="method"
                        value={this.state.method}
                        onChange={this.onMethodChange} />
                    <br />

                    <input type="text" placeholder="towhom"
                        value={this.state.towhom}
                        onChange={this.onToWhomChange} />
                    <br />

                    <input type="text" placeholder="needwant"
                        value={this.state.needwant}
                        onChange={this.onNeedWantChange} />
                    <br />

                    <input type="text" placeholder="notes"
                        value={this.state.notes}
                        onChange={this.onNotesChange} />
                    <br />

                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}