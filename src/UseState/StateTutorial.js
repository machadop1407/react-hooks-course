import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

/*

useState is commonly used in conjunction with other hooks like useEffect to fetch data from an API 
and store it in the component's state.

Another example: -

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

In this example, the users state is initialized as an empty array. 
When the component mounts, the useEffect hook fetches data from an API and updates the users state with the fetched data. 
The component then renders the list of users using the state.

*/
