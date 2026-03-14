import { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import "./App.css";

function App() {

  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const deleteRecord = (id) => {
    const newRecords = records.filter((item) => item.id !== id);
    setRecords(newRecords);
  };

  const startEdit = (record) => {
    setEditRecord(record);
  };

  const updateRecord = (updatedRecord) => {
    const updatedList = records.map((item) =>
      item.id === updatedRecord.id ? updatedRecord : item
    );

    setRecords(updatedList);
    setEditRecord(null);
  };

  const clearAllRecords = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all records?");
    if (confirmClear) {
      setRecords([]);
      localStorage.removeItem("records");
    }
  };

  return (
    <div className="container">

      <h1>LocalBox Miner</h1>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editRecord={editRecord}
      />

      <button className="clear-btn" onClick={clearAllRecords}>
        Clear All Records
      </button>

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
      />

    </div>
  );
}

export default App;