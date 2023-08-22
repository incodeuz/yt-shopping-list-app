import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    setList([...list, { id: list.length + 1, title: value, isChecked: false }]);
    setValue("");
  };

  const deleteItem = (ids) => {
    const sortedList = list.filter((item) => item.id !== ids);
    setList(sortedList);
  };

  const checkItem = (ids) => {
    setList(
      list.map((item) =>
        item.id === ids ? { ...item, isChecked: true } : item
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Shopping List</h1>

      <div className="input-container">
        <input
          type="text"
          className="item-input"
          placeholder="Add an item"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <button className="add-button" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <ul className="item-list">
        {list.map((item) => (
          <li className="item">
            <span
              style={{
                textDecoration: item.isChecked ? "line-through" : "none",
              }}
            >
              {item.title}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => checkItem(item.id)}
              />
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
