import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 60,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 34.34,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 94.34,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should correctly render ExpensesSummare with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummare with multiple expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23512340987}/>);
    expect(wrapper).toMatchSnapshot();
});