import { useState } from "react";
import Search from "./components/Search";
import Members from "./components/Members";
import { Member } from "./@types/members";
import AddMember from "./components/AddMember";

function App() {
  const [members, setMembers] = useState<Member[]>(
    JSON.parse(localStorage.getItem("members") || "[]")
  );

  const [textInput, setTextInput] = useState("");

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
        <Members key={index} name={member.name} />
      ))}
    </div>
  );
}

export default App;
