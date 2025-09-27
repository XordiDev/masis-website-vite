import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home.tsx";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;