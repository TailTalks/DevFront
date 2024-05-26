import React from 'react';
import MissionCat from '../../../assets/pictures/main/MissionCat.jpg'

interface MissionSectionProps {
	
}

const MissionSection: React.FC<MissionSectionProps> = () => {
	return (
		<div id='mission' className='flex justify-between w-full h-[355px] 3xl:h-[550px] mt-36'>
          <div className='w-1/2 2xl:grow 3xl:pr-96'>
            <div className='w-[380px] 3xl:w-auto h-16 font-sans text-[#000000] dark:text-white text-5xl 3xl:text-7xl font-medium'>Наша миссия</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Это не просто социальная сеть, это место, где каждый питомец становится звездой, а каждый владелец находит друга.</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Мы стремимся к созданию комьюнити, где общение между питомцами и их владельцами происходит естественно и радостно, 
              способствуя социальному развитию и благополучию любителей домашних животных.
            </div>
          </div>
          <div className='w-1/2'>
						<img className='w-[590px] h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl 3xl:rounded-3xl' src={MissionCat} alt='MissionCat' />
					</div>

        </div>
	);
};

export default MissionSection;