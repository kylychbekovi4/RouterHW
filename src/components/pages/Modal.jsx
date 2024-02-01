import scss from "./Modal.module.scss";

const Modal = ({ modal, isClose, children }) => {
	if (!modal) {
		return null;
	}

	return (
		<>
			<div onClick={isClose} className={scss.sanjar}>
				<div className={scss.children}>{children}</div>
			</div>
		</>
	);
};

export default Modal;
