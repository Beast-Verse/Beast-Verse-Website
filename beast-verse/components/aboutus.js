import React from "react";
import Image from "next/image";
import Ice from "../assets/Ice.png"

function AboutUs(){
    return <div  className="pl-[2vw] w-screen pt-10 bg-slate-900 ">

        <h2 className="text-[4.5vw] font-Montserrat font-semibold text-white">What is <span className="font-Ruslan">Beast Verse</span></h2>

        <div className="grid grid-flow-col grid-cols-2">
            <div className="pl-[3vw]">
                <p className="font-Montserrat text-[1.2vw] pt-4 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>

            <div className="mx-auto">
            <iframe className="rounded-2xl border-8 border-double border-white" width="560" height="315" src="https://www.youtube.com/embed/EQGig40g5wM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
}

export default AboutUs;