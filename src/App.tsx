import { Wrapper, Header, Input, Body, Footer } from "./components";

import { TaskDataProvider } from "./context/TasksContext";

function App() {
  return (
    <TaskDataProvider>
      <Wrapper>
        <Header />
        <Input />
        <Body />
        <Footer />
      </Wrapper>
    </TaskDataProvider>
  );
}

export default App;
