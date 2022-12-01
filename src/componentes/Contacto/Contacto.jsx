import React from "react";
import { useForm } from "react-hook-form";
import "./Contacto.css"

/* me parecio mejor dejarlo asi y no colocar tanto bootstrap */

const Contacto = () => {

  const { register, formState: { errors }, handleSubmit } = useForm("");

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <img src="http://santisimatrinidad.edu.ar/wp-content/uploads/2019/11/contacto-background-min.jpg" alt="" srcset="" />
      <div className="containerContact">


        <div className="contacto">
          <form className="contact" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <h2> Contactenos </h2>
              <label> Nombre </label>
              <input type="text" {...register('nombre', { required: true })} />
              {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>}
            </div>

            <div>
              <label> Apellido </label>
              <input type="text" {...register('apellido', { required: true })} />
            </div>

            <div>
              <label> Email </label>
              <input type="text" {...register('email', { pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} />
              {errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>}
            </div>

            <div>
              <label for="message"> Mensaje </label>
              <textarea name="message" id="message" cols="25" rows="10"></textarea>
            </div>

            <input className="button" type="submit" value="Enviar" />
          </form>
        </div>
      </div>

    </>
  )
}

export default Contacto;