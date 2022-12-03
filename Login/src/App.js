import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render() {
        const menuItems = [
            { href: "/", title: "Home" },
            { href: "/about", title: "About" },
            { href: "/services", title: "Services" },
            { href: "/contacts", title: "Contacts" },
        ]
        return <div>
            <Menu items={menuItems} />
            <Login />
        </div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);