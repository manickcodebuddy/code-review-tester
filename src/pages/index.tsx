import React from "react";
import TodoCard from "./components/TodoCard";
import TodoButton from "./components/TodoButton";

const HomePage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(search.length > 10) {
      setSearch("Maximum limit reached");
    }
  }, []);
  return (
    <div>
      <h1>This is Code review tester app</h1>
      <p>This is a subtitle</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <div>
        <TodoCard>Go to mall</TodoCard>
        <TodoCard>Brush teeth</TodoCard>
        <TodoCard>Sleep</TodoCard>
        <TodoCard>Wake Up</TodoCard>
      </div>
      <div>
        <TodoButton />
      </div>
    </div>
  );
};

export default HomePage;
