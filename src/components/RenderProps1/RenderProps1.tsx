type ChildComponentProps = {
    render: (name: string) => JSX.Element;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {
    const name = '@je_amaya'
    return (
        <div>
            {render(name)}
        </div>
    );
};

export const ParentComponent = () => {

    return (
        <ChildComponent render={(name) => <p>Hola, {name}!</p>} />
    );
};
