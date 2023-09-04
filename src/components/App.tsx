import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { NewPasteView } from "./NewPasteView";
import { RecentPasteList } from "./RecentPasteList";
import axios from "axios";

export const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://pastebin-upf5.onrender.com"
        : "http://localhost:4000";

export interface PasteItem {
    id: number;
    title: string;
    description: string;
    posted_time: Date;
}

function App() {
    const [pasteList, setPasteList] = useState<PasteItem[]>([]);
    useEffect(() => {
        fetchAndStorePastes();
    }, []);
    async function fetchAndStorePastes() {
        try {
            const response = await axios.get(baseUrl + "/pastes");
            const responseData: PasteItem[] = response.data;
            setPasteList(responseData);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    }
    return (
        <div className="App">
            <Header />
            <NewPasteView fetchAndStorePastes={fetchAndStorePastes} />
            <RecentPasteList pasteList={pasteList} />
        </div>
    );
}

export default App;
