import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toEqual(0);
});

test('Should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toEqual(195);
});

test('Should correctly add up multiple expense', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(114195);
});