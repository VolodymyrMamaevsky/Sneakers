function App() {
	return (
		<div className="wrapper">
			<header>
				<div className="headerLeft">
					<img width={40} height={40} src="/img/logo.png" alt="logo" />
					<div className="headerInfo">
						<h3>Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="headerRight">
					<li>
						<img width={18} height={18} src="/img/cart.svg" alt="cart" />
						<span>1205грн.</span>
					</li>
					<li>
						<img width={18} height={18} src="/img/user.svg" alt="user" />
					</li>
				</ul>
			</header>
			<div className="content">
				<h1>Все кроссовки</h1>
				....
			</div>
		</div>
	);
}

export default App;
