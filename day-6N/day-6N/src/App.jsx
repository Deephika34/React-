import "./App.css";
import Body from "./Components/body";
import Header from "./Components/header";
import { ToastContextProvider } from "./Components/context/ToastContext";
import Footer from "./Components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <ToastContextProvider>
        <Header />
        <Body />
        <Footer />
      </ToastContextProvider>
    </>
  );
};

export default App;