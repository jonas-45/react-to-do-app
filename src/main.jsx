import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoApp from "@/components/TodoApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<TodoApp />);