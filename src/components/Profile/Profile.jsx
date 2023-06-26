import PropTypes from 'prop-types';
import {
  ProfileStats,
  ProfileDescription,
  ProfileImg,
  ProfileInfo,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStats>
      <ProfileDescription>
        <ProfileImg src={avatar} alt={username} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </ProfileDescription>

      <ProfileInfo>
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ProfileInfo>
    </ProfileStats>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
