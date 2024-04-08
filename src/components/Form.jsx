import "../styles/form.css";

function Form() {
  return (
    <div>
      <form action="" method="post" className="contact">
        <label htmlFor="name">Nom & prénom</label>
        <input type="text" name="name" id="" />

        <label htmlFor="email">Adresse email</label>
        <input type="email" name="email" id="" />

        <label htmlFor="name">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Ecrire votre message..."></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
export default Form;
