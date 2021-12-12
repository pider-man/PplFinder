import React, { useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import Text from "components/Text";
import Users from "./Users";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [usersList, setUsersList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [hoveredUserId, setHoveredUserId] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites"));
    setUsersList(users);
    setFavorites(favs);
  }, [users]);

  const handleFilter = (val) => {
    let newArr = filteredCountries;
    const index = newArr.indexOf(val);
    index > -1 ? newArr.splice(index, 1) : newArr.push(val);
    setFilteredCountries(newArr);

    let newUsersList = users;
    if (filteredCountries.length > 0) {
      newUsersList = newUsersList.filter((u) =>
        filteredCountries.includes(u.location.country)
      );
    }
    setUsersList(newUsersList);
  };

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
    setFavorites(newArr);
  };

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="Australia" onChange={handleFilter} label="Australia" />
        <CheckBox value="Canada" onChange={handleFilter} label="Canada" />
        <CheckBox value="Brazil" onChange={handleFilter} label="Brazil" />
        <CheckBox value="Germany" onChange={handleFilter} label="Germany" />
        <CheckBox value="United States" onChange={handleFilter} label="United States" />
      </S.Filters>
      {usersList.length === 0 && !isLoading ? (
        <S.List>
          <Text size="22px">No Users</Text>
        </S.List>
      ) : (
        <Users
          usersList={usersList}
          favorites={favorites}
          isLoading={isLoading}
          hoveredUserId={hoveredUserId}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleFav={handleFav}
        />
      )}
    </S.UserList>
  );
};

export default UserList;
