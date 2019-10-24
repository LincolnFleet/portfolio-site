import React, {useState} from 'react';

export default function useResumeModal() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    };

    return (
        {isOpen, toggleOpen}
    );
};