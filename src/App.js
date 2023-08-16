import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";
import CardComponent from "./components/Card";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CardComponent />
      </div>
    </QueryClientProvider>
  );
}
