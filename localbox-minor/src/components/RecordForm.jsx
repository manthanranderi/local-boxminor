import { useState, useEffect } from "react";

function RecordForm({ addRecord, updateRecord, editRecord }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editRecord) {
      setName(editRecord.name);
      setEmail(editRecord.email);
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("All fields are required");
      return;
    }

    if (editRecord) {
      updateRecord({
        id: editRecord.id,
        name: name,
        email: email
      });
    } else {
      const newRecord = {
        id: Date.now(),
        name: name,
        email: email
      };

      addRecord(newRecord);
    }

    setName("");
    setEmail("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>{editRecord ? "Edit Record" : "Add Record"}</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        {editRecord ? "Update" : "Add"}
      </button>

    </form>
  );
}

export default RecordForm;