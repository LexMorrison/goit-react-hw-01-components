import PropTypes from 'prop-types';
import { TransactionValue } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TransactionValue>{type}</TransactionValue>
      <TransactionValue>{amount}</TransactionValue>
      <TransactionValue>{currency}</TransactionValue>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
