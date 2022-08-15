import React from "react";

interface Props {
	onType: (e: any) => void;
	value: string;
}
export const SearchInput = ({ onType, value }: Props) => {
	return <input type="text" onChange={onType} value={value} />;
};
