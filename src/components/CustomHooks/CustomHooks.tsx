import {useState} from "react";

function useLoading(initialLoading: boolean = false) {
    const [isLoading, setIsLoading] = useState<boolean>(initialLoading);

    return {
        isLoading,
        setIsLoading
    }
}

type UserProps = {
    name: string;
}

const UserComponent: React.FC<UserProps> = ({ name }) => {
    const { isLoading, setIsLoading } = useLoading(false);

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <p>Hola, {name}</p>
                <button onClick={() => setIsLoading(true)}>Simular loading</button>
            </div>
        );
    }

};

export const ParentComponent = () => {
    return <UserComponent name="@je_amaya"/>;
};
