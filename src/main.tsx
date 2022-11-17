import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom'
import { App } from "~/components/root/App";
import "./styles/index.css";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />);
