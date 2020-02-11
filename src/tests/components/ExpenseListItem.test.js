import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses', () => {
    const expenseItem = expenses[1];
    const wrapper = shallow(<ExpenseListItem {...expenseItem}/>);
    expect(wrapper).toMatchSnapshot();
});