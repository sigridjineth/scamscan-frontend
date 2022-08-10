import Button from '@src/components/common/Button';
interface Modal {
  children?: string;
  _onClick?: () => {};
  btnText?: string;
  modalTitle?: string;
  modalContent?: string;
  modalBtn?: string;
  modalId: string;
}

function Modal(props: Modal) {
  const { children, _onClick, btnText, modalTitle, modalContent, modalBtn, modalId } = props;

  return (
    <div className="flex-none">
      <label htmlFor={modalId} className="btn modal-button font-black text-white text-xl">
        {btnText}
      </label>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal cursor-pointer">
        <label className="modal-box bg-[#202020] relative z-10 w-fit max-w-none" htmlFor={modalId}>
          <div className="mx-20 my-12 mb-16">
            <h3 className="font-semibold text-4xl text-center mb-1">{modalTitle}</h3>
            <p className="py-4 text-xl opacity-50 text-center mb-8">{modalContent}</p>
            <Button small _onClick={_onClick}>
              {modalBtn}
            </Button>
          </div>
        </label>
      </label>
    </div>
  );
}

export default Modal;
