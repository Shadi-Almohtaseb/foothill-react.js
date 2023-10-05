import { Dispatch, SetStateAction } from "react";

export interface Member {
    name: string;
}

export interface AddMemberProps {
    setMembers: React.Dispatch<React.SetStateAction<any[]>>;
    setTextInput: Dispatch<SetStateAction<string>>;
    members: Member[];
    textInput: string;
}

type MemberProps = {
    p1: string;
    p2: number;
}

type ToArray<T> = {
    [K in keyof T]: T[K][];
}

type y = ToArray<MemberProps>;

type x = keyof MemberProps;