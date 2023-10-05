import type { AddMemberProps } from "../@types/members";

const AddMember = ({
  setMembers,
  setTextInput,
  members,
  textInput,
}: AddMemberProps) => {
  const addMember = () => {
    const member = {
      name: textInput,
    };
    const updatedMembers = [...members, member];
    localStorage.setItem("members", JSON.stringify(updatedMembers));
    setMembers(updatedMembers);
    console.log(updatedMembers);
  };

  return (
    <div className="bg-[#f2f2f2] flex items-center justify-between mt-5 h-14 px-5 max-w-[40rem] w-full rounded-md">
      <input
        type="text"
        placeholder="Add member"
        className="bg-transparent w-full outline-none"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button
        onClick={addMember}
        className="bg-[#8269e7] text-white rounded-md px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default AddMember;
