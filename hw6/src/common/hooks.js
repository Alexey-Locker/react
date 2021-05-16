import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue = "") {
    const [value, setValue] = useState(localStorage.getItem(key) || defaultValue);
    useEffect(() => {
        localStorage.setItem(key, value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return [value, setValue];
}