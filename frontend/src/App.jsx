import { useEffect } from "react";
import userStore from "../store/storeManagement";
import "./index.css";
import html2pdf from 'html2pdf.js';

function App() {
  // const { data, loading, error, fetchData } = userStore();

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-50">
  //       <div className="text-xl font-medium">Loading...</div>
  //     </div>
  //   );

  // if (error)
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-red-50">
  //       <div className="text-xl font-medium text-red-600">Error: {error}</div>
  //     </div>
  //   );

  const generatePDF = () => {
    const element = document.getElementById('pdf-content');
    html2pdf()
      .set({
        margin: 0.5,
        filename: 'surat_pemberitahuan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
      })
      .from(element)
      .save();
  };
  return (
    <>
      {/* <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Data dari API</h1>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div> */}
      <div className="w-full h-screen" id="pdf-content">
        <div className="w-full h-full bg-yellow-300 relative">
          <div className="w-10 h-10 absolute top-0 left-5 bg-red-400"></div>
          <div className="w-10 h-10 absolute bottom-0 right-5 bg-blue-400"></div>
      </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </>
  );
}

export default App;
