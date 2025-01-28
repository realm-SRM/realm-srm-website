import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import Mainlogo from '../../assets/realm.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function AccCard(props){

    const [isPlaying, setIsPlaying] = useState(false); //Initially set to playing
    const [volume, setVolume] = useState(0.5);  // Initial volume set to 50%
    const [muted, setMuted] = useState(false);  // Initially not muted

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const toggleMute = () => {
        setMuted(!muted);
    };


    return(
        <div className="AccCard bg-[#26235C] h-full items-start justify-center rounded-3xl px-2 py-2 border-black border-[5px] " >
            <div className='Topper flex flex-row gap-3 justify-start ' >
                <img src={Mainlogo} className=" w-[3vw] " />
                <div className='text-[#FFDEC4] text-xs xl:text-lg  ' >
                    <p>Realm SRM</p>
                    <p>Accelerator</p>
                </div>
            </div>

            <div className='Profile ' >

                <div className='Photo flex justify-center ' >
                    <img src={props.pfp} className=' lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]  '  />
                </div>

                <div className='Name flex justify-center text-white text-md ' >
                    {props.name}
                </div>

                <div className='Tagline text-center text-[#A79AE0] text-xs ' >
                    {props.tagline}
                </div>

                <div className='flex flex-col text-center lg:text-xs xl:text-sm text-white justify-center ' >
                    <p>{props.skill1}</p>
                    <p>{props.skill2}</p>
                    <p>{props.skill3}</p>
                </div>

            </div>

           

            <div className='MusicThingy flex flex-row justify-center lg:gap-0 xl:gap-5 text-white mb-4 ' >
                    <ReactPlayer 
                    className="pb-20 hidden" 
                    url={props.music} 
                    width="10vw" 
                    playing={isPlaying} 
                    controls={true}
                    volume={volume}
                    muted={muted} 
                    />
                    <button onClick={togglePlay}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon /> }
                    </button>

                    <div className="volume-controls pt-1 ">
                        <input
                            type="range"
                            id="volume"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>

                    <button onClick={toggleMute}>
                        {muted ? <VolumeOffIcon /> :<VolumeUpIcon /> }
                    </button>

            </div>

            <div className='Socials flex justify-center text-white gap-5 ' >
                    <a href={props.github} target="_blank"><button><GitHubIcon /></button></a>
                    <a href={props.insta} target="_blank"><button><InstagramIcon /></button></a>
                    <a href={props.linkedin} target="_blank"><button><LinkedInIcon /></button></a>
                    <button ><ShareIcon /></button>
            </div>

        </div>
    );
}