import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light", //Can give variables
    darkTheme: () => {},
    lightTheme: () => {}, //As well as methods
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}