// import React from 'react'
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, updateTodo } from "../features/todo/todoSlice";

// const UpdateTodo = () => {

//     const todos = useSelector((state) => state.todos);
//     const dispatch = useDispatch();
//     const [editId, setEditId] = useState(null);
//     const [newText, setNewText] = useState("");
  
//     const handleUpdate = (id) => {
//       dispatch(updateTodo({ id, newText }));
//       setEditId(null); // Exit edit mode after updating
//     };
//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-gray-900 rounded-lg shadow-md">
//       <h2 className="text-white text-lg font-semibold mb-4">Todos</h2>

//       {todos.length === 0 ? (
//         <p className="text-gray-400 text-center">No todos available.</p>
//       ) : (
//         <ul className="list-none">
//           {todos.map((todo) => (
//             <li
//               className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//               key={todo.id}
//             >
//               {editId === todo.id ? (
//                 // Show input field when editing
//                 <input
//                   type="text"
//                   value={newText}
//                   onChange={(e) => setNewText(e.target.value)}
//                   className="px-2 py-1 rounded bg-zinc-700 text-white border border-gray-600"
//                 />
//               ) : (
//                 <div className="text-white">{todo.text}</div>
//               )}

//               <div className="flex gap-2">
//                 {editId === todo.id ? (
//                   <button
//                     onClick={() => handleUpdate(todo.id)}
//                     className="text-white bg-green-500 border-0 py-1 px-3 rounded hover:bg-green-600"
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       setEditId(todo.id);
//                       setNewText(todo.text);
//                     }}
//                     className="text-white bg-blue-500 border-0 py-1 px-3 rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                 )}

//                 <button
//                   onClick={() => dispatch(removeTodo(todo.id))}
//                   className="text-white bg-red-500 border-0 py-1 px-3 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default UpdateTodo