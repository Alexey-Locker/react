import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "../../common/hooks";

export const themeContext = createContext(null);
themeContext.displayName = "ThemeContext";

export function useTheme() {

    return useContext(themeContext);
}
export function TheamProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("theme", "white")

    const typesColors = useMemo(() => ["white", "black", "lunar"], [])
    const toggleTheme = useCallback((id) => {
        setTheme(typesColors[id])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const context = useMemo(() => ({
        toggleTheme,
        theme,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [theme])

    return (
        <themeContext.Provider value={ { ...context, typesColors } }>
            { children }
        </themeContext.Provider>
    )
}
