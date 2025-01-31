import Mainlogo from '../../assets/realm.svg';
import Standby from '../../assets/Standby.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from '@mui/icons-material/Share';
import html2canvas from 'html2canvas';
import { useState } from 'react';

export default function PositionCard({ domain, name, tagline, image, github, insta, linkedin, pos }){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    const handleShareClick = () => {
        setTimeout(() => {
            html2canvas(document.getElementById('position-card'), {
                scale: 1, // Make sure to increase scale for clarity
                logging: true,
                useCORS: true,
            }).then(canvas => {
                const image = canvas.toDataURL('image/png');
                console.log(image)
                setImageUrl(image);
                setIsModalOpen(true);
            });
        }, 0);
    };

    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'position-card.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
            <div className="pos-card bg-[#0E1218] border-black border-8 w-[250px] h-[40vh] lg:w-[19vw] lg:h-[43vh] xl:w-[17vw] xl:h-[43vh] rounded-3xl " id="position-card"   >
                <div className="Ranks pt-3 pl-3 flex flex-row gap-1 text-white text-xs relative " >
                    <img src={Mainlogo} className=" w-[30px] lg:w-[2vw] " />

                    <div className="w-1 h-[4vh] border-l-2 border-white" />
                    
                    <div className="Deets flex flex-col " >
                        <div className="flex flex-row gap-1" >
                            <div className='p-0 m-0   ' >Realm Srm</div>
                            <div className="w-1 h-[2vh] border-l-2 border-white" />
                            <div className='p-0 m-0  ' >{domain}</div>
                        </div>
                        <div>
                            {pos}
                        </div>
                    </div>

                </div>
                
                <div className="PhotoTag pt-0 lg:pt-5 pl-1 pr-1 flex flex-row items-end">
                    <div className="pt-1 flex flex-col gap-2 w-[150px] h-[12vh] lg:w-[10vw] lg:h-[12vh] bg-[#3E3838] bg-opacity-30 relative -mr-24 z-20 rounded-[40px]">
                        <div className="flex flex-col items-center justify-center h-full px-4 -mt-1">
                            <p className="text-white text-sm text-nowrap">{name}</p>
                            <p className="text-[11px] text-white opacity-50 text-center mt-1">{tagline}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end mb-4 relative z-10">   
                        <img src={image} className=" w-[150px] h-[150px] lg:w-[20vh] lg:h-[20vh] rounded-full bg-blue-950 border-[7px] border-[#8257E5]">
                            </img>
                    </div>
                </div>

                <div className="Socials py-4 lg:py-4 2xl:py-8 flex flex-row justify-center gap-7 text-white  " >
                    <a href={github} target="_blank"><button><GitHubIcon /></button></a>
                    <a href={insta} target="_blank"><button><InstagramIcon /></button></a>
                    <a href={linkedin} target="_blank"><button><LinkedInIcon /></button></a>
                    <button onClick={handleShareClick} ><ShareIcon /></button>
                </div>


                {isModalOpen && (
                    <>

                <div 
                    className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50"
                    onClick={() => setIsModalOpen(false)}
                />

                <div className="modal fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="modal-content max-w-[400px] bg-blue-950 p-4 rounded-lg text-center">
                        <h2 className="text-xl mb-4 text-white ">Download Position Card</h2>
                        <img src={imageUrl} alt="Position Card Screenshot" className="w-full h-full mb-4" />
                        <div className='flex flex-row justify-center gap-4' >
                        <button onClick={handleDownload} className="bg-[#8257E5] text-white px-4 py-2 rounded-lg">
                            Download Image
                        </button>
                        <button onClick={() => setIsModalOpen(false)} className=" bg-red-900 text-white px-4 py-2 rounded-lg">
                            Close
                        </button>

                        </div>
                    </div>
                </div>

                </>
            )}

            </div>

    );
}