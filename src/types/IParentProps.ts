import { ReactNode } from "react";

export default interface IParentProps<T = ReactNode> {
    children?: T;
}