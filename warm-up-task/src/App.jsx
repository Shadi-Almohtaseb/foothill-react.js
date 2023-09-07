import Members from "./components/Members.jsx";
import Search from "./components/Search.jsx";
import AddMember from "./components/AddMember.jsx";
import { useState } from "react";

function App() {
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members") || "[]")
  );
  const [textInput, setTextInput] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Search />
      <AddMember
        setMembers={setMembers}
        setTextInput={setTextInput}
        members={members}
        textInput={textInput}
      />
      {members.map((member, index) => (
        <Members key={index} member={member} />
      ))}
    </div>
  );
}

export default App;
