import React from "react";
import ReactDOM from "react-dom/client";
import WelcomeModal from "./app/components/WelcomeModal";
import Menu from "./app/components/Menu";
import Blog from './app/components/Blog';
import "./app/styles/style.css";

const menuItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/services", title: "Services" },
  { href: "/contacts", title: "Contacts" },
];

const blogPosts = [
  {
    title: 'Заголовок поста',
    data: 'xx-xx-20xx',
    postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas vero repellendus error. Alias vitae ullam assumenda! Excepturi, ullam, sequi veritatis officia dolores doloribus doloremque modi commodi, ut dolore rerum!',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Заголовок поста',
    data: 'xx-xx-20xx',
    postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas vero repellendus error. Alias vitae ullam assumenda! Excepturi, ullam, sequi veritatis officia dolores doloribus doloremque modi commodi, ut dolore rerum!',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Заголовок поста',
    data: 'xx-xx-20xx',
    postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas vero repellendus error. Alias vitae ullam assumenda! Excepturi, ullam, sequi veritatis officia dolores doloribus doloremque modi commodi, ut dolore rerum!',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Заголовок поста',
    data: 'xx-xx-20xx',
    postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas vero repellendus error. Alias vitae ullam assumenda! Excepturi, ullam, sequi veritatis officia dolores doloribus doloremque modi commodi, ut dolore rerum!',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeModal />
        <Menu items={menuItems} />
        <Blog postList={blogPosts} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
