import { useRouter } from "next/navigation";

export default () => {
    const router = useRouter();
    
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        router.push(event.currentTarget.href);
    };
};