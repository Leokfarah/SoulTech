import { ChangeEventHandler } from "react";

export interface User {
    name: string,
    email: string,
    password: string,
    notes: Notes[],
}

export interface Notes {
    titulo: string,
    descricao: string,
    status: boolean,
    id: string | number,
}

export interface SoulHeaderProps {
    titulo: string,
    href: string,
}

export interface InputProps {
    id: string,
    label: string,
    type: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}