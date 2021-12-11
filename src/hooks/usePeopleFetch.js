import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      fetchUsers();
    }else{
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    setUsers(response.data.results);
    localStorage.setItem("users", JSON.stringify(response.data.results));
    localStorage.setItem("favorites", JSON.stringify([]));
  }

  return { users, isLoading, fetchUsers };
};
