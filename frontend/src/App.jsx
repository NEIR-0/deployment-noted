import { useEffect } from "react";
import userStore from "../store/storeManagement";
import "./index.css";

function App() {
  const { data, loading, error, fetchData } = userStore();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data dari API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
