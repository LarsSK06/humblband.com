// Imports

import { NavigateFunction, useNavigate } from "react-router-dom";

// Types

export type UseAnchorRouterEvent =
    React.MouseEvent<HTMLAnchorElement>;

export type UseAnchorRouterFunction =
    (event: UseAnchorRouterEvent) => void;



// Functions

export function useAnchorRouter(): UseAnchorRouterFunction{

    const navigate: NavigateFunction = useNavigate();

    return (event: UseAnchorRouterEvent): void => {
        event.preventDefault();

        navigate(event.currentTarget.href);
    };
}