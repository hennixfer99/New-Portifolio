import "./App.css";
import Header from "./Components/Header/Header";
import Routes from "./routes/route";
function App() {
    return (
        <>
            <Header />
            <main className="content">
                <Routes />
            </main>
        </>
    );
}

export default App;
