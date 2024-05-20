import React, {useState} from 'react';

interface GoalsSectionProps {
	
}

const goals = [
	{id: 1, text:'Социализация и общение'},
	{id: 2, text:'Здоровье и активность'},
	{id: 3, text:'Участие в конкурсах'},
	{id: 4, text:'Образование и информирование'},
	{id: 5, text:'Поддержка и советы'},
	{id: 6, text:'NFT и блокчейн'},
	{id: 7, text:'Благотворительность и помощь нуждающимся животным'},
	{id: 8, text:'Экологическое сознание'},
]

const GoalsSection: React.FC<GoalsSectionProps> = () => {

	const [show, setShow] = useState();
	
	return (
		<div>
			<h3 className='font-Rubic variable font-semibold text-lg bg-clip-text text-transparent bg-bread'>
			Общие цели и философия нашего сообщества
			</h3>
			<h2 className='font-sans font-medium dark:text-white text-[34px]'>
			Сообщество Tail Talks
			</h2>
			<div></div>
		</div>
	);
};

export default GoalsSection;