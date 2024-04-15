import React, { useEffect, useRef, useState } from "react";
import Pills from "./Pills";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());
  const inputRef = useRef(null); //we did this beacuse after selecting user, we dont't have to click on the search bar again
  //   console.log(searchTerm);

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      try {
        const fetchedData = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        );
        const jsonData = await fetchedData.json();
        // console.log(jsonData);
        setSuggestions(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [searchTerm]);

  const handleSelectedUsers = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUsersSet(new Set([...selectedUsersSet, user.id]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus(); //we did this beacuse after selecting user, we dont't have to click on the search bar again
  };

  const handleRemoveSelectedUser = (selectedUser) => {
    const updatedUsers = selectedUsers.filter(
      (selected) => selected.id != selectedUser.id
    );
    setSelectedUsers(updatedUsers);

    const updatedId = new Set(selectedUsersSet);
    updatedId.delete(selectedUser.id);
    setSelectedUsersSet(updatedId);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveSelectedUser(lastUser);
      setSuggestions([]);
    }
  };

  console.log(selectedUsers);

  //   console.log(suggestions);

  return (
    <div className="flex flex-col gap-4 justify-center mt-20 relative px-20">
      <h1 className="text-center text-3xl font-bold">
        Multi-Selector Search bar
      </h1>
      {/* pills component */}
      <div className="mt-20 border rounded-lg p-2 flex flex-row flex-wrap gap-2">
        <div className="flex gap-2 flex-wrap">
          {" "}
          {selectedUsers.map((selectedUser) => (
            <Pills
              key={selectedUser.id}
              image={selectedUser.image}
              firstName={selectedUser.firstName}
              lastName={selectedUser.lastName}
              onClick={() => handleRemoveSelectedUser(selectedUser)}
            />
          ))}
        </div>

        <input
          type="text"
          ref={inputRef}
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" border rounded-lg flex items-center flex-wrap gap-2 outline-none border-none p-2"
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* search suggestions  */}

      <ul className=" p-4 w-56 max-h-96 overflow-y-scroll no-scrollbar">
        {suggestions?.users?.map((user) => {
          return !selectedUsersSet.has(user.id) ? (
            <li
              key={user.id}
              className="flex gap-4 items-center py-2 border-b cursor-pointer"
              onClick={() => handleSelectedUsers(user)}
            >
              <img
                src={user.image}
                alt="name"
                className="w-10 h-10 rounded-full"
              />
              <span>
                {user.firstName} {user.lastName}
              </span>
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
