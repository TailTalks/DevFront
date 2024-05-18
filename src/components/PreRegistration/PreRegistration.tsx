import React from 'react';
import PreregistrationPigs from '../../assets/preregistrationPigs.jpg'
import closeIcon from '../../assets/icon-close.svg'

interface PreRegistrationProps {
	closeModal: Function,
}

const PreRegistration: React.FC<PreRegistrationProps> = ({closeModal}) => {
	return (
			<div className='relative mx-auto w-[532px] h-[730px] flex flex-col justify-between items-center bg-[#FFFFFF] rounded-2xl py-[50px]'>
				<img src={PreregistrationPigs} alt="" className='w-[442px] h-[237px] rounded-2xl' />
				<div className='absolute right-[-110px] top-0 bg-white rounded-full p-6 cursor-pointer' onClick={() => closeModal()}>
					<img className='' src={closeIcon} alt="" />
				</div>
				<div className='mx-[45px]'>
					<h3 className='text-2xl font-medium text-center'>
					Укажите ваш e-mail
					</h3>
					<p className='font-Rubik Variable font-light text-lg text-[#666666] text-center'>
					Мы пришлем вам приглашения, как только наша социальная сеть для домашних животных будет готова
					</p>
				</div>
				<form action="" className='w-[409px] h-[212px] flex flex-col'>
					<div className='w-[409px] h-[59px] bg-orangeGradient rounded-2xl p-1 mb-[15px]'>
						<input type="text" placeholder='E-mail' className='w-full h-full bg-clip-border rounded-xl focus:outline-none py-[20px] px-[25px]'/>
					</div>
					<div className='w-[409px] h-[59px] bg-orangeGradient rounded-2xl p-1 mb-[15px]'>
						<input type="text" placeholder='Логин (необязательно)' className='w-full h-full bg-clip-border rounded-xl focus:outline-none py-[20px] px-[25px]'/>
					</div>
					<button className='font-sans font-bold text-lg w-[409px] h-[59px] rounded-2xl bg-orangeGradient'>
						Отправить
					</button>
				</form>
			</div>
	);
};

export default PreRegistration;