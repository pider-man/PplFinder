import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ usersList, isLoading, isOnlyFavs }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
    setUsers(
      isOnlyFavs ? usersList.filter((u) => favorites.includes(u.login.username)) : usersList
    );
  }, [usersList, isOnlyFavs, favorites]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleFav = (user) => {
    let newArr = JSON.parse(localStorage.getItem("favorites"));
    const index = newArr.indexOf(user);
    index > -1 ? newArr.splice(index, 1) : newArr.push(user);
    setFavorites(newArr);
    localStorage.setItem("favorites", JSON.stringify(newArr));
  };

  return (
    <S.List>
      {users.map((user, index) => {
        return (
          <React.Fragment key={user.login.username}>
            <S.User
              key={user.login.username}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={
                  index === hoveredUserId || favorites.includes(user.login.username)
                }
              >
                <IconButton onClick={() => handleFav(user.login.username)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
            {usersList.length - 1 !== index && <Divider />}
          </React.Fragment>
        );
      })}
      {isLoading && (
        <S.SpinnerWrapper>
          <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
        </S.SpinnerWrapper>
      )}
    </S.List>
  );
};

export default UserList;
