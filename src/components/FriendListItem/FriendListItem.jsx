import PropTypes from 'prop-types';
import { CgRadioChecked } from 'react-icons/cg';
import { FriendListContent } from './FriendListItem.styled';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendListContent>
      <span className="status">
        {isOnline ? (
          <CgRadioChecked color={'green'} />
        ) : (
          <CgRadioChecked color={'red'} />
        )}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendListContent>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
