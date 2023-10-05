import { Member } from "../@types/members";

const Members = ({ name }: Member) => {
  return (
    <div className="flex items-center justify-center gap-6 max-w-[40rem] w-full shadow-lg bg-[#f2f2f2] rounded-md mt-10 py-2 px-5">
      <img
        width="34"
        height="34"
        src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png"
        alt="person-male--v3"
      />
      <span className="bg-[#f2f2f2] rounded-md w-full outline-none">
        {name}
      </span>
      <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5" />
    </div>
  );
};

export default Members;
