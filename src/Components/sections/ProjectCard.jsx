export default function ProjectCard(props) {
    return(
        <div className="w-[18vw] bg-[#39477F] h-full rounded-2xl shadow-2xl px-2 flex flex-col transition hover:-translate-y-4 hover:ease-in-out " >
            <div className="Image flex justify-center pt-5 " >
                <img src={props.image} className=" lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] rounded-full " />
            </div>

            <div className="ProjectDetails flex flex-col justify-center pt-5 " >

                <p className="text-center lg:text-xl xl:text-2xl text-white font-bold " >{props.name}</p>
                <p className="text-center text-white lg:text-sm xl:text-md  " >{props.description}</p>

            </div>

            <div className=" Links flex lg:gap-1 xl:gap-2 justify-center mb-5 mt-auto " >
                <a href={props.repo} ><button className=" bg-[#F15191] lg:text-sm xl:text-lg text-white lg:px-5 xl:px-8 py-2 rounded-full " >Repo</button></a>
                <a href={props.projectLink} ><button className=" bg-[#F15191] lg:text-sm xl:text-lg text-white lg:px-5 xl:px-8 py-2 rounded-full " >Project</button></a>
            </div>

        </div>
    );
}