import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import scss from "./Asia.module.scss";
import Modal from "./Modal";

const url =
	"https://api.elchocrud.pro/api/v1/7289f647e3a61db4e2d8d860449c887d/Country";

const Asia = () => {
	const [todo, setTodo] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [modal, setModal] = useState(false);

	const openModal = (country) => {
		setSelectedCountry(country);
		setModal(true);
	};

	const closeModal = () => {
		setSelectedCountry(null);
		setModal(false);
	};

	const getTodos = async () => {
		const response = await axios.get(url);
		setTodo(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className={scss.parent}>
			{todo.map((item) => (
				<div className={scss.parent_1} key={item.id}>
					<div className={scss.h1_p}>
						<h1>{item.title}</h1>
						<p>{item.capital}</p>
					</div>
					<img className={scss.img} src={item.img} alt={item.title} />
					<div className={scss.button_open}>
						<button onClick={() => openModal(item)}>Open Modalka</button>
					</div>
				</div>
			))}

			<Modal modal={modal}>
				{selectedCountry && (
					<div>
						<h2>{selectedCountry.title}</h2>
						<p>{selectedCountry.capital}</p>
						<img
							className={scss.iimg}
							src={selectedCountry.map}
							alt="map of country"
						/>
						<div className={scss.button_close}>
							<button  onClick={closeModal}>
								close
							</button>
						</div>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default Asia;
