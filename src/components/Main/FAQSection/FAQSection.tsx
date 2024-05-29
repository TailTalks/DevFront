import React from 'react';
import FAQItem from './FAQItem';

interface FAQSectionProps {
	
}

const FAQ = [
	{id: '1', question:'Какие функции будут доступны в социальной сети для животных Tail Talks?', answer: 'Здесь будет ответ' },
	{id: '2', question:'Смогу ли я создать профиль для нескольких своих животных?', answer: 'Здесь будет ответ' },
	{id: '3', question:'Как я могу найти других пользователей с похожими интересами?', answer: 'Здесь будет ответ' },
	{id: '4', question:'Каковы правила сообщества и что запрещено к публикации?', answer: 'Здесь будет ответ' },
	{id: '5', question:'Есть ли функции для помощи бездомным животным или тем, кто ищет новый дом?', answer: 'Здесь будет ответ' },
]

const FAQSection: React.FC<FAQSectionProps> = () => {

	return (
		<div className='mt-[140px]'>
			<h3 className='font-Rubic variable font-semibold text-lg bg-clip-text text-transparent bg-bread'>
			ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
			</h3>
			<h2 className='font-sans dark:text-white font-medium text-5xl mt-2.5'>
			FAQ
			</h2>
			<div className='mt-[30px]'>
				{FAQ.map( faq => 
					<FAQItem key={faq.id} question={faq.question} answer={faq.answer}/>
				)}
			</div>			
		</div>
	);
};

export default FAQSection;