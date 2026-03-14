💻 LocalBox Miner
📌 Project Overview

LocalBox Miner is a React-based offline data management application designed to demonstrate core React concepts such as state management, component communication, event handling, and CRUD operations.

The application allows users to add, view, edit, and delete records while storing data locally using the browser's localStorage.

No backend server or API is required. All operations run directly inside React, making it a lightweight example of an offline-first dashboard application.

🚀 Features

Add new records (Name & Email)

Display records in a structured table

Edit existing records

Delete individual records

Clear all records

LocalStorage data persistence

Dynamic UI updates using React state

🧩 Project Structure
localbox-miner
│
├── src
│   ├── components
│   │   ├── RecordForm.jsx
│   │   ├── RecordList.jsx
│   │   └── RecordRow.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
└── index.html
⚙️ Component Modules
1️⃣ RecordForm

Handles adding and updating records using controlled form inputs.

Functions:

Form validation

Add record

Edit record

Concepts used:

React useState

Controlled inputs

Form submission handling

2️⃣ RecordList

Displays all records inside a table layout.

Functions:

Renders list of records

Passes data to RecordRow component

Concepts used:

List rendering using .map()

Conditional rendering

3️⃣ RecordRow

Represents a single row in the record table.

Functions:

Display record data

Provide Edit and Delete actions

Concepts used:

Props

Event argument passing

🎯 Event Handling

The application uses React event handling to manage user interactions.

Event	Purpose
onChange	Updates input fields
onSubmit	Adds or updates a record
onClick	Edit, Delete, Clear records

Example:

onClick={() => deleteRecord(record.id)}
📦 LocalStorage Integration

The application uses browser localStorage to store records.

Functions implemented:

Load stored records when the application starts

Save records whenever data changes

Remove stored records when clearing all data

Example:

localStorage.setItem("records", JSON.stringify(records))

This ensures data persists even after refreshing the page.

🎭 Conditional Rendering

The UI dynamically changes based on application state.

Examples:

Show "No Records Found" when there are no records

Switch between Add Mode and Edit Mode

Display validation errors

Show confirmation before clearing all records

📊 Dashboard Overview

The interface dynamically displays:

Record Form

Record Table

Edit/Delete Actions

Validation Feedback

Stored data from localStorage

All updates occur instantly using React state.

🛠️ Technologies Used

React.js

JavaScript (ES6)

HTML5

CSS3

Browser localStorage

▶️ How to Run the Project

Clone the repository

git clone https://github.com/your-username/localbox-miner.git

Navigate to project folder

cd localbox-miner

Install dependencies

npm install
Start the development server

npm run dev

Open in browser

http://localhost:5173
