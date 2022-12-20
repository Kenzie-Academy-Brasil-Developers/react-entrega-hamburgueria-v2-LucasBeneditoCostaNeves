import { RotasPrincipais } from "./Routes";
import { api } from "./Service";
import GlobalStyle from "./Style/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RotasPrincipais />
    </div>
  );
}

export default App;
