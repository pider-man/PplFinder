import React, { useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import Text from "components/Text";
import Users from "./Users";
import * as S from "./style";

const FavoriteList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    let favs = [];
    if (localStorage.getItem("favorites")) {
      favs = JSON.parse(localStorage.getItem("favorites"));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    setUsersList(favs);
  }, []);

  const handleFav = (user) => {
    let newArr = JSON.parse(localStorage.getItem("favorites"));
    let index = -1;
    for (let i = 0; i < newArr.length; i++) {
      if (user.login.uuid === newArr[i].login.uuid) {
        index = i;
      }
    }
    index > -1 ? newArr.splice(index, 1) : newArr.push(user);
    localStorage.setItem("favorites", JSON.stringify(newArr));
    setUsersList(newArr);
  };

  if (usersList.length === 0) {
    return <Text size="22px">No Favorites</Text>;
  }

  return (
    <S.UserList>
      <Users usersList={usersList} handleFav={handleFav} showOnlyFavs={true} />
    </S.UserList>
  );
};

export default FavoriteList;
