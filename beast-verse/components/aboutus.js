import React from "react";
import Image from "next/image";

function AboutUs(){
    return <div className="grid grid-flow-row grid-rows-2">
        <div className="ml-[2vw]">
            <h2 className="text-[5vw] font-Monstserrat font-semibold mb-10 text-white">About Us</h2>
            <h3 className="text-[2.7vw] font-Monstserrat font-semibold mb-3 text-white">What is Beast Verse?</h3>
            <p className="w-[50%] font-Montserrat text-[1.2vw] text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div>
            <Image src="../assets/1.png class"></Image>
        </div>
    </div>
}

export default AboutUs;