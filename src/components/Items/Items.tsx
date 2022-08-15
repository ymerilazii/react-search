import React from "react";

interface Props {
	items: Array<string>;
}
export const Items = (props: Props) => {
	const { items } = props;
    
	return (
        <>
        {items.length > 0? items.map((item, index) =>{
            return <div key={index}>{item}</div>
        }) : <div>No items</div>}
        </>
    )
};
