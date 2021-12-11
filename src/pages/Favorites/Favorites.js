import React from "react";
import Text from "components/Text";
import Users from "components/UserList/Users";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { useEffect } from "react";
import { useState } from "react";

const Favorites = () => {
  const { users, isLoading } = usePeopleFetch();
  const [favUsers, setFavUsers] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    let newFavUsers = users;
    newFavUsers = newFavUsers.filter((u) => favorites.includes(u.login.username));
    setFavUsers(newFavUsers);
  }, [favUsers]);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <Users usersList={users} isLoading={isLoading} isOnlyFavs={true} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
