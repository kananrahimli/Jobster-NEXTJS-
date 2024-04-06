// // pages/_app.js
// 'use client'
// import { useEffect } from "react";

// function App({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     // fetch üzerine interceptor ekleyerek global olarak yapılandırma
//     const originalFetch = window.fetch;
//     window.fetch = function (...args) {
//       // Tokeni al
//       const token = localStorage.getItem("token");
//       // Token varsa, Authorization başlığı olarak ekleyin
//       if (token) {
//         args[1] = {
//           ...args[1],
//           headers: {
//             ...args[1]?.headers,
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY5YjNmNzNkZDUzNGNhZmUyMmU5OWIiLCJpYXQiOjE3MTIxMzkxNTgsImV4cCI6MTcxMjIyNTU1OH0.emE16rRut9-T17l3Q-szMdui2Z_Q-1YuQQmq3zHDMDg`,
//           },
//         };
//       }
//       return originalFetch(...args);
//     };
//   }, []);

//    return <div>{children}</div>;
// }

// export default App;
