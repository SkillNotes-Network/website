import { Link } from 'react-router-dom';
import Brand from './../../../public/vite.svg';

const Navbar = ({ children }) => {
	const onLogout = (e) => {
		e.preventDefault();

	}

	return (
			<nav className='navbar navbar-expand-lg bg-white bg-gradient border-bottom'>
				<div className='container'>
					<div className='d-flex'>
						<Link to='/' className='navbar-brand'>
							<img src={Brand} alt='notes-logo-svg' width='30' height='30' />
						</Link>
						<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarSupportedContent'>
							<form className='d-flex' role='search'>
								<input className='mx-2 px-4' type='search' placeholder='Search' aria-label='Search' />
							</form>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<Link title='Start' className='nav-link active' aria-current='page' to='/'>Start</Link>
								</li>
								<li className='nav-item'>
									<Link title='Network' className='nav-link' to='/network/'>Network</Link>
								</li>
								<li className='nav-item'>
									<Link title='Messages' className='nav-link' to='/messages/'>Messages</Link>
								</li>
								<li className='nav-item'>
									<Link title='Notifications' className='nav-link' to='/notifications/'>Notifications</Link>
								</li>
							</ul>
						</div>
						<ul className='navbar-nav ms-3 ms-sm-0 mb-2 mb-lg-0'>
							<li className='nav-item dropdown'>
								<button className='nav-link dropdown-toggle d-block' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									<img src={ children.img } alt={ children.name + '-profile-jpg' } width='30' height='30' />
									<br />
									Yours
								</button>
								<ul className='dropdown-menu'>
									<li>
										<Link className='dropdown-item d-flex' to='/account/profile/'>
											<img src={ children.img } alt={ children.name } width='30' height='30' />
											<strong>Profile</strong>
											<span className='user-infobox'></span>
										</Link>
									</li>
									<li><hr className='dropdown-divider' /></li>
									<li><strong>Account</strong>
										<Link className='dropdown-item' to='/account/settings/'>Settings &amp; Data Protection</Link>
										<Link className='dropdown-item' to='/account/help/'>Help</Link>
										<Link className='dropdown-item' to='/account/language/'>Language</Link>
									</li>
									<li><hr className='dropdown-divider' /></li>
									<li><strong>Manage</strong>
										<Link className='dropdown-item' to='/account/posts/'>Posts &amp; activities</Link>
									</li>
									<li><hr className='dropdown-divider' /></li>
									<li><a className='dropdown-item' href='#' onClick={onLogout}>Logout</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	);
}

export default Navbar;