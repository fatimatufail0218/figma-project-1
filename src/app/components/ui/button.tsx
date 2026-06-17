import React from "react";

const Button = ({text}: { text: string }) =>{
    return(
        <div className="bg-white font-black font-roboto font-bold border-0 rounded-4xl text-center h-auto py-2 px-6 w-fit text-[12px] md:text-[18px]">
            {text}
        </div>
    )
}

export default Button