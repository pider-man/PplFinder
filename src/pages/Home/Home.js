import React from "react";
import { usePeopleFetch } from "hooks";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
