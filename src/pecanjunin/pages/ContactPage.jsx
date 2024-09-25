


// FORMULARIO DE CONTACTO CUANDO SEPA BACK END
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
      <h2 className="mb-3">Contáctanos</h2>
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
    </div>
  );
}