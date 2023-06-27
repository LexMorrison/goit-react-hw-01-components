import PropTypes from 'prop-types';
import {
  StatisticWrap,
  StatisticList,
  StatisticItem,
} from './Statistic.styled';

import { getRandomHexColor } from '../Helpers/ColorGenerator';
export const Statistics = ({ title = '', stats }) => {
  return (
    <StatisticWrap>
      {title && <h2 className="title">{title}</h2>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <StatisticItem key={id} color={color}>
              <span className="label">{label}: </span>
              <span className="percentage">{percentage}%</span>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
