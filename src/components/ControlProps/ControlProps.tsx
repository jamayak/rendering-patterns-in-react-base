import * as React from "react";

type ToggleProps = {
    isToggled?: boolean;
    onToggle?: (value: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({isToggled = false, onToggle}) => {
    const [internalToggle, setInternalToggle] = React.useState(isToggled);
    const toggle = () => {
        const newToggle = !internalToggle;
        setInternalToggle(newToggle);

        if (onToggle) {
            onToggle(newToggle);
        }
    }
    return (
        <button onClick={toggle}>
            {internalToggle ? 'ON' : 'OFF'}
        </button>
    );
}

export const ParentComponent = () => {
    const [toggleState, setToggleState] = React.useState(false);
    return (
        <div>
            <p>Toggle is {toggleState ? 'ON' : 'OFF'}</p>
            <Toggle isToggled={toggleState} onToggle={setToggleState} />
        </div>
    );
};
