import GameTitle from '../../components/ui/GameTitle';
import LinkButton from '../../components/ui/LinkButton';

const AuthOpportunity = () => {
	return (
		<div className="bg-center bg-cover bg-mind-game-background flex flex-col items-center justify-center text-center font-play">
			<GameTitle className='font-audiowide text-main-light text-[2.5rem] md:text-[3.7rem] md:max-w-[495px] mb-5 mt-9' />
			<h2 className="text-main-gray text-[0.9rem] md:text-[1.35rem] font-play"> The Mind is more than just a game. It's an <br /> experiment, a journey, a team <br /> experience </h2>

			<LinkButton path="/auth" text="Log in" classname='bg-main-light rounded-[30px] w-24 m-4 mt-10 drop-shadow-3xl' />
			<LinkButton path="/auth/signup" text="Sign up" classname='bg-main-light rounded-[30px] w-24 mb-16 drop-shadow-3xl' />
		</div>
	)
}

export default AuthOpportunity;