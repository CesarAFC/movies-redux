import { useState } from "react";

function useLocalStorage(key, initialValue=null) {

    let localStorageData = localStorage.getItem(key);
    let parsedData;
    
    if(!localStorageData) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedData = initialValue;
    } else {
        parsedData = JSON.parse(localStorageData);
    }
    
    const [value, setValue] = useState(parsedData);

    const saveData = (newData) => {
        const stringfiedData = JSON.stringify(newData);
        localStorage.setItem(key, stringfiedData)
        setValue(newData);
    }

    return [value, saveData];
}

export default useLocalStorage;