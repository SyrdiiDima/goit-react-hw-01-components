

import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name,isOnline}) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};