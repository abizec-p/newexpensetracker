import Transaction from "./Transaction"
import "./ranking.css"

export default function Ranking({transaction}){



    return(

    
        <section className="ranking-container">

            <div className="">
                                <h2>Top Expenses</h2>

            {transaction
            .filter(txn => txn.type === "expense")
            .sort((a,b)=> b.amount - a.amount) 
            .slice(0,3)         
            .map((txn, index)=> (

                <div className="ranking-row"> 

                <div>
                <h1>${txn.amount}</h1>
                <h3>{txn.title}</h3>
                </div>
                <div>
                    <h1>#{index + 1}</h1>
                </div>
                </div>
                





            ))}
            </div>








        </section>

    )

}