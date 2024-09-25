import { Audio, AbsoluteFill, OffthreadVideo, staticFile, Sequence } from 'remotion';
import { Logo } from './Logo';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-green-100 items-center justify-center">


			


			<AbsoluteFill>

				<div style={{  transform: `translateX(300px) rotate(45deg)`  }}>
					<OffthreadVideo src={staticFile("000.webm")} startFrom={60} />;
				</div>
			</AbsoluteFill>


			<AbsoluteFill>
				<div style={{  mixBlendMode: 'hard-light', transform: `translateX(0px) rotate(145deg)` }}>
					<OffthreadVideo src={staticFile("000.webm")} playbackRate={2} startFrom={160} />;
				</div>
			</AbsoluteFill>



			<AbsoluteFill>
				<div style={{ transform: `translateX(550px) rotate(15deg)` }}>
					<OffthreadVideo src={staticFile("000.webm")} playbackRate={3} startFrom={260} />;
				</div>
			</AbsoluteFill>


			<AbsoluteFill>
				<div style={{ transform: `translateX(-450px) rotate(180deg)` }}>
					<OffthreadVideo src={staticFile("000.webm")} playbackRate={3} startFrom={260} />;
				</div>

				
			</AbsoluteFill>



			<div className="m-10" />
			<Logo logoColor={propThree} />
			<div className="m-3" />
			<Title titleText={propOne} titleColor={propTwo} />
			<Subtitle />

			<Audio src={staticFile("000.wav")} />

			<Audio src={staticFile("wood.mp3")} />

			<Sequence from={100}>
				<Audio src={staticFile("000.wav")} />
			</Sequence>

			<Sequence from={200}>
				<Audio src={staticFile("000.wav")} />
			</Sequence>

			<Sequence from={300}>
				<Audio src={staticFile("000.wav")} />
			</Sequence>







		</AbsoluteFill>
	);
};
