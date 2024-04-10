import React from "react";
import "./App.css"
import Header from "./assets/components/header"
import MultiplyFromDenominations from "./assets/components/counter";

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <MultiplyFromDenominations />
            </main>
        </div>
    );
};