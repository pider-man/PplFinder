import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const Users = ({
  usersList,
  favorites,
  isLoading,
  handleFav,
  showOnlyFavs,
  handleMouseEnter,
  handleMouseLeave,
  hoveredUserId,
}) => {
  return (
    <S.List>
      {usersList.map((user, index) => {
        return (
          <React.Fragment key={user.login.username}>
            <S.User
              key={user.login.username}
              onMouseEnter={() => !showOnlyFavs && handleMouseEnter(index)}
              onMouseLeave={() => !showOnlyFavs && handleMouseLeave()}
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
                  index === hoveredUserId || showOnlyFavs
                    ? usersList.includes(user)
                    : favorites.find((u) => u.login.uuid === user.login.uuid)
                }
              >
                <IconButton onClick={() => handleFav(user)}>
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

export default Users;
