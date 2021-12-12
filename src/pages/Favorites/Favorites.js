import React from "react";
import Text from "components/Text";
import FavoriteList from "components/UserList/FavoriteList";
import * as S from "./style";

const Favorites = () => {

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <FavoriteList />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
