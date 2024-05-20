import React from 'react';

interface GoalsNameProps {
	name: string
}

const GoalsName: React.FC<GoalsNameProps> = ({name}) => {
	return (
		<div className='font-Rubic variable'>
			{name}
		</div>
	);
};

export default GoalsName;