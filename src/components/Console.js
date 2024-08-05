import React, {useEffect, useState} from 'react';
import Button from '../utility/Button'
import SoundBar from '../utility/SoundBar'
import Control from '../utility/Control'
import Display from './Display';

const Console = () => {
	const [volume, setVolume] = useState(0.5)
	const [previousVolume, setPreviousVolume] = useState()
	const [displayValue, setDisplayValue] = useState('')
	const [muteText, setMuteText] = useState('On')

	const buttons = [
		{
			'key'							: 'Q',
			'audio-file'			: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
			'name'						: 'Heater 1',
		},
		{
			'key'							: 'W',
			'audio-file'			: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
			'name'						: 'Heater 2',
		},
		{
			'key'							: 'E',
			'audio-file'			: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
			'name'						: 'Heater 3',
		},
		{
			'key'							: 'A',
			'audio-file'			:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
			'name'						: 'Heater 4',
		},
		{
			'key'							: 'S',
			'audio-file'			:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
			'name'						: 'Clap',
		},
		{
			'key'							: 'D',
			'audio-file'			:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
			'name'						: 'Open-HH',
		},
		{
			'key'							: 'Z',
			'audio-file'			:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
			'name'						: 'Kick-n\'-Hat',
		},
		{
			'key'							: 'X',
			'audio-file'			:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
			'name'						: 'Kick',
		},
		{
			'key'							: 'C',
			'audio-file'			: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
			'name'						: 'Closed-HH',
		}
	]

	useEffect(() => {
		document.addEventListener('keydown', onKeyClick, true)
	})

	const onKeyClick = (e) => {
		const key = e.key.toUpperCase();
		buttons.map(
			(button) => {
				if(button.key === key){
					playAudioFile(button['audio-file']);
					changeDisplay(button['name']);
					let buttonClicked = document.getElementById(key)
					buttonClicked.classList.add('bg-slate-400')
					setTimeout(() => {
						buttonClicked.classList.remove('bg-slate-400')
					}, 150)

				}
				return '';
			}
		)
	}

	const resolveButtonPress = (e) => {
		playAudioFile(e.target.firstElementChild.currentSrc)
		buttons.map(
			(button) => {
				if(button.key === e.target.id){
					changeDisplay(button['name'])
					return '';
				}else{
					return '';
				}
			}
		)
	}

	const playAudioFile = (audioFile) => {
		console.log(audioFile)
		let audio = new Audio(audioFile)
		audio.volume = volume;
		audio.play()
	}

	const changeDisplay = (nameValue) => {
		setDisplayValue(nameValue)
	}

	const volumeChange = (e) => {
		setVolume(e.target.valueAsNumber)
	}

	const muteOnClick = () => {
		setPreviousVolume(volume);
		if(volume  === 0){
			setVolume(previousVolume)
			setMuteText('On')
		}else{
			setVolume(0)
			setMuteText('Off')
		}
	}

  return (
		<div className='bg-slate-900 p-10 m-[10vw]'>
			<h1 className='text-5xl text-slate-50 pb-10'>Drum Machine</h1>
			<div id="drum-machine" className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="button-grid grid grid-cols-3 gap-5 min-w-fit">
					{buttons.map((key) => (
						<Button
							key					={key.key}
							buttonKey		={key.key}
							audio				={key['audio-file']}
							buttonPress	={resolveButtonPress}
						/>
					))}
				</div>
				<div className='drum-controls flex justify-center items-center flex-col gap-10 bg-slate-600 min-w-fit py-20'>
					<Control onClick={muteOnClick} value={muteText} />
					<Display value={displayValue} />
					<SoundBar value={volume} onChange={volumeChange}/>
				</div>
			</div>
		</div>
  );
};

export default Console;