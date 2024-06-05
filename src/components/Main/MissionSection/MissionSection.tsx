import React from 'react';
import MissionCat1440 from '../../../assets/pictures/main/mission_cat_1440.jpg'
import MissionCat1024 from '../../../assets/pictures/main/mission_cat_1024.jpg'

interface MissionSectionProps {
	
}

const MissionSection: React.FC<MissionSectionProps> = () => {
	return (
		<div id='mission' className='flex justify-between w-full h-[355px] 3xl:h-[550px] mt-36 gap-x-4'>
          <div className='w-1/2 3xl:pr-96'>
            <div className='w-[380px] 3xl:w-auto h-16 font-sans text-[#000000] dark:text-white text-5xl 3xl:text-7xl font-medium'>Наша миссия</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Это не просто социальная сеть, это место, где каждый питомец становится звездой, а каждый владелец находит друга.</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Мы стремимся к созданию комьюнити, где общение между питомцами и их владельцами происходит естественно и радостно, 
              способствуя социальному развитию и благополучию любителей домашних животных.
            </div>
          </div>
						<picture className='w-[440px] h-[330px] lg:w-[590px] lg:h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl 3xl:rounded-3xl'>
						<source media="(min-width:1024px)" srcSet={MissionCat1024} />
  					<source media="(min-width:1440px)" srcSet={MissionCat1440} />
						<img className='w-[440px] h-[330px] lg:w-[590px] lg:h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl 3xl:rounded-3xl' src={MissionCat1440} alt='MissionCat' />
						</picture>

        </div>
	);
};

export default MissionSection;