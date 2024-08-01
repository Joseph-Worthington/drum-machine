import React, {useEffect, useState} from 'react';
import Button from '../utility/Button'
import SoundBar from '../utility/SoundBar'

const Console = () => {
	const [volume, setVolume] = useState(0.5)

	const buttons = [
		{
			'key'					: 'Q',
			'audio-file'	: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
			'name'				: 'Heater 1'
		},
		{
			'key'					: 'W',
			'audio-file'	: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
			'name'				: 'Heater 2'
		},
		{
			'key'					: 'E',
			'audio-file'	: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
			'name'				: 'Heater 3'
		},
		{
			'key'					: 'A',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
			'name'				: 'Heater 4'
		},
		{
			'key'					: 'S',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
			'name'				: 'Clap'
		},
		{
			'key'					: 'D',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
			'name'				: 'Open-HH'
		},
		{
			'key'					: 'Z',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
			'name'				: 'Kick-n\'-Hat'
		},
		{
			'key'					: 'X',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
			'name'				: 'Kick'
		},
		{
			'key'					: 'C',
			'audio-file'	:  'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
			'name'				: 'Closed-HH'
		}
	]

	useEffect(() => {
		document.addEventListener('keydown', onKeyClick, true)
	})

	const onKeyClick = (e) => {
		buttons.map(
			(button) => {
				if(button.key === e.key.toUpperCase()){
					return playAudioFile(button['audio-file'])
				}else{
					return '';
				}
			}
		)
	}

	const resolveButtonPress = (e) => {
		playAudioFile(e.target.firstElementChild.currentSrc)
	}

	const playAudioFile = (audioFile) => {
		let audio = new Audio(audioFile)
		audio.volume = volume;
		audio.play()
	}

	const volumeChange = (e) => {
		setVolume(e.target.valueAsNumber)
	}

  return (
    <div id="drum-machine" className="bg-slate-900 p-10">
      <div className="button-grid grid grid-cols-3 gap-5">
        {buttons.map((key) => (
          <Button
            key={key.key}
            buttonKey={key.key}
            audio={key['audio-file']}
            buttonPress={resolveButtonPress}
          />
        ))}
      </div>
			<div className='drum-controls'>
				<SoundBar value={volume} onChange={volumeChange}/>
				<p className='text-white'>{volume * 100}</p>
			</div>
    </div>
  );
};

export default Console;