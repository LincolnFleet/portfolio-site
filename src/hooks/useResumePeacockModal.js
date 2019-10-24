import React, {useState} from 'react';

export default function useResumePeacockModal() {
    const [peacockIsOpen, setPeacockIsOpen] = useState(false);

    function togglePeacock() {
        setPeacockIsOpen(!peacockIsOpen);
    };

    return (
        {peacockIsOpen, togglePeacock}
    );
};