import React from "react";

interface Props {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ status, setStatus }: Props) => {
    return <div>Navigation</div>;
};

export default Navigation;
