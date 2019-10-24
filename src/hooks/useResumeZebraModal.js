import React, {useState} from 'react';

export default function useResumeZebraModal() {
    const [zebraIsOpen, setZebraIsOpen] = useState(false);

    function toggleZebra() {
        setZebraIsOpen(!zebraIsOpen);
        console.log('zebra toggled', zebraIsOpen);
    };

    return (
        {zebraIsOpen, toggleZebra}
    );
};