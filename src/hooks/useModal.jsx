import Modal from "react-modal";

function useModal(
  openModal,
  setOpenModal,
  { title, message, buttonText1, buttonText2, callback }
) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "var(--background)",
          color: "var(--text)",
        },
      }}
    >
      <div className="modal">
        <h2>{title}</h2>
        <div>{message}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <button
            onClick={() => setOpenModal(false)}
            style={{
              marginTop: ".7em",
              backgroundColor: "var(--clr-error-400)",
              border: "none",
              padding: ".5em",
              borderRadius: ".3em",
              fontWeight: 600,
              cursor: "pointer",
              width: "7em",
            }}
            className="hover"
          >
            {buttonText1}
          </button>
          {buttonText2 ? (
            <button
              onClick={callback}
              style={{
                marginTop: ".7em",
                backgroundColor: "var(--clr-primary-400)",
                border: "none",
                padding: ".5em",
                borderRadius: ".3em",
                fontWeight: 600,
                cursor: "pointer",
                width: "7em",
              }}
              className="hover"
            >
              {buttonText2}
            </button>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}

export { useModal };
