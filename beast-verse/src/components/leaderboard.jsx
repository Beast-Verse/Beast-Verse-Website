import Web3 from "web3";
import { useState , useEffect} from "react";
import contractABI from "./abi";
import contractad from "./address";
const web3 = new Web3(window.ethereum);

var contract = null;

var ABI = contractABI;
var ADDRESS = contractad;


function Leaderboard(){
    const[owner, setOwner] = useState([]);
	const[total, setTotal] = useState();
var val = 0;
var anotherval = 1;
    contract = new web3.eth.Contract(ABI, ADDRESS)

    const hello = async() =>{
    
        var tot = parseInt(await contract.methods.totalSupply().call());

        setTotal(tot);

    const ownerlist = [];
        const loopenter = [];
    for(let i=1; i<total; i++){

        var owners = await contract.methods.ownerOf(i).call();



        if(loopenter.includes(owners) == false){
            
            loopenter[val] = owners;

			var balance = await contract.methods.balanceOf(loopenter[val]).call();
			var points = 0; 
            for(let j=0; j<balance; j++){
				
                const tokenURI = await contract.methods.tokenURI(anotherval).call();
					const metadata = `https://ipfs.io/ipfs/${tokenURI.substr(7)}`;

					const meta = await fetch(metadata);
					const json = await meta.json();
					const name = json["name"];

                if(name[0] === "C"){
                    points = points + 1;

                }
                else if(name[0] === "R"){
                    points = points + 2;

                }
                else if(name[0] === "E"){
                    points = points + 3;

                }
                else if(name[0] === "L"){
                    points = points + 4;

                }
				anotherval++;}
            ownerlist.push({points, owners, balance});
       
        }
ownerlist.sort((a,b) =>{
    return b.points - a.points;
});
val++;

    }
    // console.log(ownerlist);
    

setOwner(ownerlist);
}

// hello();

useEffect(()=>{
    hello();
},[total]
)

    return <div className="bg-gradient-to-b  from-slate-800 to-slate-600 min-h-[100vh]">
        
        <h1 className="font-Montserrat text-blue-400 text-center font-semibold text-[5vw]">LEADERBOARD</h1>
     <table className="w-[60%] mx-auto mt-10">
        <thead >
            <tr>
                <th className="rounded-tl-2xl font-Montserrat text-[1.5vw] py-3 text-white bg-blue-400">Address</th>
                <th className="w-[10vw] font-Montserrat text-[1.5vw] text-white bg-blue-400">Points</th>
                <th className=" rounded-tr-2xl w-[15vw] font-Montserrat text-[1.5vw] text-white bg-blue-400">Total Holding</th>
            </tr>
        </thead>
        <tbody>
            
            {owner.map((data)=>(<tr className="text-[1.2vw] text-center h-[3vw] border-b-[1px] border-white/40 font-bold font-Montserrat text-white"><td>{data.owners}</td><td>{data.points}</td><td>{data.balance}</td></tr>))}
          
        </tbody>
     </table>
    </div>
}

export default Leaderboard;