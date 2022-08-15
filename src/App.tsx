import React, { useEffect, useState } from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { Items } from "./components/Items/Items";

function App() {
	const [itms, setItms] = useState([""]);
	const [result, setResult] = useState([""]);
	const [value, setValue] = useState("");

  useEffect(()=>{
    const arr = ["Apple", "Banana", "Kiwi", "Strawberry", "Avocado"]
    setItms(arr)
    setResult(arr)
  }, [])
  

	const handleType = (e: any) => {
		setValue(e.target.value);
		searchFilter(e.target.value)
	};

	const searchFilter = (val: string) => {
		const rest = itms.filter((item) => item.toLowerCase().includes(val.toLowerCase()));
    setResult(rest)
	};
	return (
		<>
			<SearchInput onType={handleType} value={value} />
			<Items items={result} />
		</>
	);
}

export default App;
