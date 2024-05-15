import { createContext, useState } from "react";

export const Themecontext = createContext();

const Theme = ({children}) => {

    const [theme, setTheme] = useState(true);

    const handleThemeChange = () => {
        setTheme(!theme)
    }


    return (
        <>
            <Themecontext.Provider value={{theme,handleThemeChange}}>
                {children}
            </Themecontext.Provider>
        </>
    )
}

export default Theme;