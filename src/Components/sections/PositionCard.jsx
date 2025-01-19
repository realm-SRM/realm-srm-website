import Mainlogo from '../../assets/realm.svg';
import Standby from '../../assets/Standby.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from '@mui/icons-material/Share';

export default function PositionCard(props){
    return(
        <div className="bg-black rounded-[50px] w-[260px] h-[300px] flex items-center justify-center " >
            <div className="pos-card bg-[#0E1218] w-[240px] h-[278px] rounded-[50px] ">
                <div className="Ranks pt-5 pl-3 flex flex-row gap-1 text-white text-xs " >
                    <img src={Mainlogo} className="w-[30px] h-[30px] " />

                    <div className="w-1 h-[30px] border-l-2 border-white" />
                    
                    <div className="Deets flex flex-col " >
                        <div className="flex flex-row gap-1" >
                            <div>Realm Srm</div>
                            <div className="w-1 h-[15px] border-l-2 border-white" />
                            <div>{props.domain}</div>
                        </div>
                        <div>
                            {props.pos}
                        </div>
                    </div>

                </div>
                
                <div className="PhotoTag pt-5 pl-2 pr-2 flex flex-row items-end " >
                    <div className="pt-1 flex flex-col gap-2 w-[130px] h-[110px] bg-gradient-to-b from-[rgba(0,0,0,0.15)] via-[rgba(70,69,69,0.5)] to-[rgba(62,56,56,0.6)] relative -mr-10 z-20 rounded-full " >
                        <p className="text-white text-md flex justify-center pt-3 " >Devanshu</p>
                        <p className="text-[11px] text-white opacity-50 flex items-center text-center " >Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
                    </div>
                    <div className="flex flex-1 justify-end relative z-10 " >   
                        <img src={Standby} className="w-[150px] h-[150px] rounded-full bg-blue-950 border-[10px] border-[#8257E5] " />
                    </div>
                </div>

                <div className="Socials pt-4 flex flex-row justify-center gap-7 text-white  " >
                    <a href={props.github} target="_blank"><button><GitHubIcon /></button></a>
                    <a href={props.insta} target="_blank"><button><InstagramIcon /></button></a>
                    <a href={props.linkedin} target="_blank"><button><LinkedInIcon /></button></a>
                    <a href=""><button><ShareIcon /></button></a>
                </div>

            </div>      
        </div>
    );
}