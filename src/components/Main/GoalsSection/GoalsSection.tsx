import React, {useState, useEffect} from 'react';
import { preloadImage } from '../../helpers/imagePreloader';
import GoalsName from './GoalsName';
import Goal from './Goal';
import goalPic_1 from '../../../assets/pictures/main/goals/goal-1.jpg'
import goalPic_2 from '../../../assets/pictures/main/goals/goal-2.jpg'
import goalPic_3 from '../../../assets/pictures/main/goals/goal-3.jpg'
import goalPic_4 from '../../../assets/pictures/main/goals/goal-4.jpg'
import goalPic_5 from '../../../assets/pictures/main/goals/goal-5.jpg'
import goalPic_6 from '../../../assets/pictures/main/goals/goal-6.jpg'
import goalPic_7 from '../../../assets/pictures/main/goals/goal-7.jpg'
import goalPic_8 from '../../../assets/pictures/main/goals/goal-8.jpg'

interface GoalsSectionProps {
	
}

const goalsNames = [
	{id: '1', text:'Социализация и общение'},
	{id: '2', text:'Здоровье и активность'},
	{id: '3', text:'Участие в конкурсах'},
	{id: '4', text:'Образование и информирование'},
	{id: '5', text:'Поддержка и советы'},
	{id: '6', text:'NFT и блокчейн'},
	{id: '7', text:'Благотворительность и помощь нуждающимся животным'},
	{id: '8', text:'Экологическое сознание'}
]

const goalsBody = [
	{id: '1', url:`${goalPic_1}`, text:'Помогаем владельцам находить друзей для своих питомцев, что способствует их социальному развитию и укрепляет связь между животными и людьми.'},
	{id: '2', url:`${goalPic_2}`, text:'Стимулируем владельцев к регулярным прогулкам и активным играм, что важно для физического и эмоционального благополучия питомцев.'},
	{id: '3', url:`${goalPic_3}`, text:'Организуем фотоконкурсы и другие мероприятия, предоставляя возможность для творчества и получения наград, что также мотивирует к лучшему уходу за питомцами.'},
	{id: '4', url:`${goalPic_4}`, text:'Делимся актуальной информацией о правильном уходе и здоровье животных, помогая владельцам быть более осведомленными и ответственными.'},
	{id: '5', url:`${goalPic_5}`, text:'Создаем среду для обмена опытом и получения советов, что особенно ценно для новых владельцев питомцев.'},
	{id: '6', url:`${goalPic_6}`, text:'Предлагаем создание NFT из фотографий питомцев, что может быть не только увлекательным, но и прибыльным хобби, подчеркивающим уникальность каждого животного.'},
	{id: '7', url:`${goalPic_7}`, text:'Организуем акции и сборы средств для поддержки бездомных и больных животных, способствуя созданию заботливого сообщества.'},
	{id: '8', url:`${goalPic_8}`, text:'Организуем акции и сборы средств для поддержки бездомных и больных животных, способствуя созданию заботливого сообщества.'},
]

const imageList = [
	`${goalPic_1}`,
	`${goalPic_2}`,
	`${goalPic_3}`,
	`${goalPic_4}`,
	`${goalPic_5}`,
	`${goalPic_6}`,
	`${goalPic_7}`,
	`${goalPic_8}`,
]

const GoalsSection: React.FC<GoalsSectionProps> = () => {

	const [show, setShow] = useState('');

	useEffect(() => {
    const preload = async () => {
      const promises = imageList.map((src) => preloadImage(src));
      await Promise.all(promises);
    };

    preload();
  }, [imageList]);
	
	return (
		<div className='mt-[140px] flex items-center justify-around'>
			<div>
				<h3 className='font-Rubic variable font-semibold text-lg bg-clip-text text-transparent bg-bread'>
				Общие цели и философия нашего сообщества
				</h3>
				<h2 className='font-sans font-medium dark:text-white text-[34px] mt-[10px]'>
				Сообщество Tail Talks
				</h2>
				<div className=''>
					{goalsNames.map((goal) =>
					<GoalsName
						key={goal.id}
						name={goal.text}
						showGoal={() => setShow(goal.id)}
						hideGoal={() => setShow('')}/>
					)}
				</div>
			</div>
			<div className='w-[453px] h-[404px]'>
				{show && goalsBody.filter(goal => goal.id === show).map((g => 
					<Goal key={g.id} pictureURL={g.url} text={g.text} />))}
			</div>
		</div>
	);
};

export default GoalsSection;