import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from "../Contexts/ContextProvider.jsx";
import Button from '../component/Button.jsx';

const Brand = '/public/skillnotes.svg';
const copyright = new Date().getFullYear();

const Welcome = () => {
	const { token } = useStateContext();

	if (token) return <Navigate to="/feed/" />

	return (
			<div className='start-container'>
				<main className="start-row d-lg-flex mb-3">
					<section className="start-brand-box">
						<figure className="start-figure">
							<img src={Brand} alt="SkillNotes-logo-svg" />
						</figure>
					</section>
					<section className='d-flex justify-content-center'>
						<aside className="row start-section">
							<div>
								<h1>
									<strong>Explicitly for Developers,
										<br />
										Headhunters
										and 
										Human
										<br />
										Resources Managers
										</strong>
								</h1>
								<h2>
									<b></b>
								</h2>
								<div className="start-btn-box">
									<div className="mb-3">
										<div className='pb-2 fhlh2'>
											<b>Join today.</b>
										</div>
										<Button title='Create account' link='/signup' style='btn-dark' />
										<br />
										<div id='start-policy'>By signing up, you agree to the <Link target='_blank' rel='noopener noreferrer nofollow' to='tos' title='Terms of Service'>Terms of Service</Link> and <Link target='_blank' rel='noopener noreferrer nofollow' to='privacy' title='Privacy Policy'>Privacy Policy</Link>, including <Link target='_blank' rel='noopener noreferrer nofollow' to='cookies' title='Cookie Use'>Cookie Use</Link>.</div>
									</div>
									<div className="mb-3 d-flex">
										<hr className="w-100 me-2" />
										or
										<hr className="w-100 ms-2" />
									</div>
									<div className="mb-3">
										<div className='pb-2 fhlh3'>
											<b>Already have an account?</b>
										</div>
										<Button title='Sign in' link='/login' style='btn-light border' />
									</div>
								</div>
							</div>
						</aside>
					</section>
				</main>
				<footer className="footer w-100 row justify-content-center">
					<Link target='_blank' rel='noopener noreferrer nofollow' title='About' to='about' className='footer-link col-auto'>About</Link>
					<Link target='_blank' rel='noopener noreferrer nofollow' title='Privacy Policy' to='privacy' className='footer-link col-auto'>Privacy Policy</Link>
					<Link target='_blank' rel='noopener noreferrer nofollow' title='Cookie Policy' to='cookie' className='footer-link col-auto'>Cookie Policy</Link>
					<Link target='_blank' rel='noopener noreferrer nofollow' title='Imprint' to='imprint' className='footer-link col-auto'>Imprint</Link>
					<span className='footer-link col-auto'>&copy; {copyright} SkillNotes</span>
				</footer>
			</div>
	);
}

export default Welcome;