import "./App.css";
import Header from "./Components/Header/Header";
import Routes from "./routes/route";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        root.classList.add("theme-transition");
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        const timeoutId = window.setTimeout(() => {
            root.classList.remove("theme-transition");
        }, 450);

        return () => window.clearTimeout(timeoutId);
    }, [theme]);

    function toggleTheme() {
        setTheme((previousTheme) =>
            previousTheme === "light" ? "dark" : "light",
        );
    }

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="content">
                <Routes />
            </main>
        </>
    );
}

export default App;
