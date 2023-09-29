export namespace MemberNS {
    export interface Member {
        name: string;
    }
    export interface AddMemberProps {
        setMembers: React.Dispatch<React.SetStateAction<any[]>>;
        setTextInput: Dispatch<SetStateAction<never[]>>;
        members: Member[];
        textInput: string[];
    }
}