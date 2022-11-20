import React from 'react';
import style from './login.module.scss';
import Matteo from '../../assets/matteo.png';
import LogoFb from '../../assets/Facebook.png';
import LogoGoogle from '../../assets/Google.png';
import { useState } from 'react';
import { useEffect } from 'react';

export function Login() {
	const [pin, setPin] = useState('');
	const [password, setPassword] = useState('');
	const [passwordType, setPasswordType] = useState('password');
	const [remember, setRemember] = useState(false);

	useEffect(() => {
		if (pin === '') {
			setPassword('');
		}
	}, [pin]);

	return (
		<div className={style.container}>
			<div className='right-side'>
				<img className={style.container__matteo} src={Matteo} alt='matteo' />
			</div>
			<div className={style.leftSide}>
				<h1 className={style.leftSide__texth1}>Login your account </h1>
				<div className={style.leftSide__mb}>
					<input
						name='pin'
						className={style.leftSide__form}
						type='text'
						placeholder='PIN'
						value={pin}
						onChange={(e) => {
							if (/^[A-Za-z0-9]{0,7}$/.test(e.target.value)) {
								setPin(e.target.value.toUpperCase());
							}
						}}
					/>

					<input
						className={style.leftSide__form}
						type={passwordType}
						placeholder='Password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						onKeyPress={(e) => {
							e.stopPropagation();
							if (e.code === 'KeyS' && e.shiftKey === true) {
								setPasswordType((previousType) => {
									return previousType === 'password' ? 'text' : 'password';
								});
							}
						}}
					/>

					<input
						type='checkbox'
						id='checkbox'
						checked={remember}
						onChange={(e) => {
							setRemember(e.target.checked);
						}}
					/>
					<label htmlFor='checkbox'>Remember Me</label>

					<span>
						<a className={style.leftSide__ml} href='/forgot'>
							Forget Password?
						</a>
					</span>
				</div>

				<button
					className={style.leftSide__button}
					onClick={() => {
						if (!pin) {
							alert('PIN is empty');
						} else {
							const user = {
								username: pin,
								password,
								remember,
							};

							alert(JSON.stringify(user, null, 2));

							setPin('');
							setPassword('');
							setRemember(false);
							setPasswordType('password');
						}
					}}
				>
					Login
				</button>

				<p className={style.leftSide__or}>Or</p>

				<a className={style.leftSide__buttonGoogle} href='/google'>
					<img src={LogoGoogle} alt='' /> Login with Google
				</a>
				<br />
				<br />
				<a className={style.leftSide__buttonFacebook} href='/apple'>
					<img src={LogoFb} alt='' /> Login with Facebook
				</a>

				<a href='/create-account'>
					<p>
						Don't have an account? <b>Click Here</b>
					</p>
				</a>
			</div>
		</div>
	);
}
