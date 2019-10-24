import React, {useState} from 'react';

export default function useResumeModal() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
        console.log('resume toggled', isOpen);
    };

    return (
        {isOpen, toggleOpen}
    );
};