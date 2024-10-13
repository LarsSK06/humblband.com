// Interfaces

export interface IParentProps<T = React.ReactNode>{
    children?: T;
}

export interface IAny<T = any>{
    [key: string | number]: T;
}