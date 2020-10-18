import { errorAnimationDuration } from '@/utils/constants';

export const showWarning = function(error, errorElement, animationDuration = null) {
	errorElement.innerText = error;
	errorElement.classList.remove('errorAnimation');
	errorElement.classList.remove('displayNone');
	errorElement.classList.add('errorAnimation');
	const timeout = animationDuration ? animationDuration : errorAnimationDuration;
	setTimeout(() => {
		errorElement.classList.add('displayNone');
	}, timeout);
};

export const displayEndGameMessage = function(playerWon) {
	playerWon ? alert('You win!') : alert('You lose!');
};
