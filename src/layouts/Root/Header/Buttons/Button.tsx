// Imports

import { useAnchorRouter, UseAnchorRouterFunction } from "../../../../utils/hooks/use-anchor-router";
import { IParentProps } from "../../../../utils/types";



// Types

interface IProps extends IParentProps<string>{
    href: string;
}



// Component

export default ({ href, children }: IProps): React.ReactNode => {

    const navigate: UseAnchorRouterFunction = useAnchorRouter();

    return (
        <li>
            <a href={href} onClick={navigate}>
                {children}
            </a>
        </li>
    );
};