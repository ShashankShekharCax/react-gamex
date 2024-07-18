import React, { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h2>{heading}</h2>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index} // Using index as key for simplicity
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item + '>' + index}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
