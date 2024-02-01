import { useLocation } from "react-router-dom";
import scss from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Links = [
	{
		name: "Asia",
		href: "/asia",
	},
	{
		name: "Europe",
		href: "/europe",
	},
	{
		name: "America",
    href: "/america",
	}
];

const Header = () => {
	const location = useLocation();
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<ul>
							{Links.map((item, index) => (
								<li key={index}>
									<NavLink
										to={item.href}
										className={
											location.pathname === item.href
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className={scss.terminal_loader}>
				<div className={scss.terminal_header}>
					<div className={scss.terminal_title}>COUNTRIES</div>
					<div className={scss.terminal_controls}>
						<div className={scss.control.close}></div>
						<div className={scss.control.minimize}></div>
						<div className={scss.control.maximize}></div>
					</div>
				</div>
				<div className={scss.text}>WELCOME...</div>
			</div>
		</header>
	);
};

export default Header;
