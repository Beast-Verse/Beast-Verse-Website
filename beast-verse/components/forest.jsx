import React from "react";
import Infotemp from "../components/infotemp"
import Island from "../assets/2.png"
import SS1 from "../assets/5.jpg"
import SS2 from "../assets/6.jpg"
import SS3 from "../assets/7.jpg"
import SS4 from "../assets/8.jpg"

function Forest(){
    return <div>
    <Infotemp first="Freaky" second="Forest" color="text-green-400" image={Island} ss1={SS1} desc1="This is the Milkyway Galaxy" ss2={SS2} desc2="This is a Forest Illustration" ss3={SS3} desc3="I didn't see the picture" ss4={SS4} desc4="Didn't see this one either" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
    </div>
}

export default Forest;