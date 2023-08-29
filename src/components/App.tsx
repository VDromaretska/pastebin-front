import "./App.css";
import { Header } from "./Header";
import { NewPaste } from "./NewPaste";
import { RecentPasteList } from "./RecentPasteList";

function App() {
    return (
        <div className="App">
            <Header />
            <NewPaste />
            <RecentPasteList />
        </div>
    );
}

export default App;
