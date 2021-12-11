import React, { useEffect, useState } from "react";
import Users from "./Users";
import CheckBox from "components/CheckBox";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [usersList, setUsersList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setUsersList(users);
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

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="Australia" onChange={handleFilter} label="Australia" />
        <CheckBox value="Canada" onChange={handleFilter} label="Canada" />
        <CheckBox value="Brazil" onChange={handleFilter} label="Brazil" />
        <CheckBox value="Germany" onChange={handleFilter} label="Germany" />
        <CheckBox value="United States" onChange={handleFilter} label="United States" />
      </S.Filters>
      <Users usersList={usersList} isLoading={isLoading} isOnlyFavs={false} />
    </S.UserList>
  );
};

export default UserList;
