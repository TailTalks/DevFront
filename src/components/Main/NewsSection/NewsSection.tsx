import React from 'react';
import NewsItem from '../../Main/NewsSection/NewsItem';
import newsImg1 from '../../../assets/pictures/main/news-img-1.jpg'
import newsImg2 from '../../../assets/pictures/main/news-img-2.jpg'
import newsImg3 from '../../../assets/pictures/main/news-img-3.jpg'

interface NewsSectionProps {
	
}

const NewsSection: React.FC<NewsSectionProps> = () => {
	return (
		<div className='mt-[140px] mx-auto xl:bg-roadmap-stars bg-center'>
						<h2 className='font-sans font-medium text-5xl dark:text-white text-black-80'>
						Наши новости
						</h2>
						<div className='mt-[30px]'>
							<NewsItem 
							image={newsImg1} 
							header='Сообщество Tail Talks в Telegram' 
							article='Все, что вам нужно знать о Tail Talks: Присоединяйтесь к нашему активному сообществу в Telegram' 
							date='16 апреля 2024'/>
							<NewsItem 
							image={newsImg2} 
							header='Ваш питомец заслуживает быть в блокчейне!' 
							article='Зафиксируйте самые яркие моменты жизни вашего питомца в цифровой эпохе, превратив его фото в NFT' 
							date='16 апреля 2024'/>
							<NewsItem 
							image={newsImg3} 
							header='Принимай участие в конкурсах' 
							article='Организуем фотоконкурсы и другие мероприятия, предоставляя возможность для творчества и получения наград, что также мотивирует к лучшему уходу за питомцами' 
							date='16 апреля 2024'/>
						</div>
					</div>
	);
};

export default NewsSection;