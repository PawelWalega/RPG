import { errorAnimationDuration } from '@/utils/constants';

export const showWarning = function(error, errorElement) {
	errorElement.innerText = error;
	errorElement.classList.remove('errorAnimation');
	errorElement.classList.remove('displayNone');
	errorElement.classList.add('errorAnimation');
	setTimeout(() => {
		errorElement.classList.add('displayNone');
	}, errorAnimationDuration);
};

export const displayEndGameMessage = function(playerWon) {
	playerWon ? alert('You win!') : alert('You lose!');
};
