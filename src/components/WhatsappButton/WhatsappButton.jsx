import "./WhatsappButton.css";

const WhatsappButton = () => {

  const numero = "5511964501791";
  const mensagem = "Olá! Gostaria de fazer um pedido.";

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;