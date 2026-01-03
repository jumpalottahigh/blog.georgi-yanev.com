import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const LS_KEY_GY_BLOG_DARK_MODE = 'gy-blog-dark-mode'

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const lsState = JSON.parse(localStorage.getItem(LS_KEY_GY_BLOG_DARK_MODE))
            if (lsState) {
                document.body.classList.add('dark-mode')
                return true
            }
        }
        return false
    })

    const toggleTheme = () => {
        const newMode = !darkMode
        setDarkMode(newMode)

        if (newMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

        localStorage.setItem(LS_KEY_GY_BLOG_DARK_MODE, JSON.stringify(newMode))
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
