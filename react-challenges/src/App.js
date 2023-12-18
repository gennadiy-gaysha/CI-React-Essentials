import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import Content from "./components/Content";
// import ContentHooks from "./components/ContentHooks";
// import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;
