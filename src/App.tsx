import Header from "./components/layout/Header";
import Herosection from "./components/layout/Herosection";
import Content from "./components/layout/Content";
import { FilterProvider } from "./context";

function App() {
  return (
    <FilterProvider>
      <Header />
      <Herosection />
      <Content />
    </FilterProvider>
  );
}

export default App;
