import { useEffect } from "react";
import userStore from "../store/storeManagement";
import "./index.css";

function App() {
  const { data, loading, error, fetchData } = userStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-xl font-medium">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <div className="text-xl font-medium text-red-600">Error: {error}</div>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Data dari API</h1>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-sm whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
