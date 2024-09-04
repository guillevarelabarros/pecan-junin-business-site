// ACÁ FALTA PONER LO DEL SUBMIT. Ver cómo se hace, en la lección 125 dice que lo muestra como se hace en la lección de Gift Expert App.


import { useForm } from '../hooks/useForm';

export const ContactPage = () => {

  const { formState, onInputChange, onResetForm, name, email, message } = useForm({
        name: '',
        email: '',
        message: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
    console.log('Datos enviados:', formState);
    // Resetear el formulario después de enviarlo
    onResetForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={ name }
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={ email }
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={ message }
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      <div className="mt-4">
        <h4>Gestión de Compras</h4>
        <p>Para gestionar tus compras, puedes contactarnos de las siguientes maneras:</p>
        <ul>
          <li><strong>Formulario:</strong> Completa el formulario arriba y te responderemos a la brevedad.</li>
          <li><strong>WhatsApp:</strong> Envía un mensaje al número <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer">+54 2364 658923</a> (solo mensajes, no atendemos llamadas).</li>
          <li><strong>Instagram:</strong> Mándanos un mensaje a nuestra cuenta de <a href="https://www.instagram.com/pecanjunin" target="_blank" rel="noopener noreferrer">Instagram</a>.</li>
          {/* <li><strong>Facebook:</strong> Contáctanos a través de nuestra página de <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564890774998" target="_blank" rel="noopener noreferrer">Facebook</a>.</li> */}
        </ul>
      </div>
    </div>
  );
}





































// import React, { useState } from 'react';

// export const ContactPage = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
//     console.log('Datos enviados:', formData);
//     // Resetear el formulario después de enviarlo
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Contáctanos</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Nombre</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Correo electrónico</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">Mensaje</label>
//           <textarea
//             className="form-control"
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Enviar</button>
//       </form>
//       <div className="mt-4">
//         <h4>Gestión de Compras</h4>
//         <p>Para gestionar tus compras, puedes contactarnos de las siguientes maneras:</p>
//         <ul>
//           <li><strong>Formulario:</strong> Completa el formulario arriba y te responderemos a la brevedad.</li>
//           <li><strong>WhatsApp:</strong> Envía un mensaje al número <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer">+54 2364 658923</a> (solo mensajes, no atendemos llamadas).</li>
//           <li><strong>Instagram:</strong> Mándanos un mensaje a nuestra cuenta de <a href="https://www.instagram.com/pecanjunin" target="_blank" rel="noopener noreferrer">Instagram</a>.</li>
//           {/* <li><strong>Facebook:</strong> Contáctanos a través de nuestra página de <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564890774998" target="_blank" rel="noopener noreferrer">Facebook</a>.</li> */}
//         </ul>
//       </div>
//     </div>
//   );
// }

















// import React, { useState } from 'react';

// export const ContactPage = () => {

//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: ''
//     });

//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
//     console.log('Datos enviados:', formData);
//     // Resetear el formulario después de enviarlo
//     setFormData({ name: '', email: '', message: '' });
//   };
//   return (
//     <div className="container mt-5">
//       <h2>Contáctanos</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Nombre</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Correo electrónico</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">Mensaje</label>
//           <textarea
//             className="form-control"
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Enviar</button>
//       </form>
//     </div>
//   );
// }






