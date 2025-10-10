import "./transaction.css"






export default function Transaction({transaction, setTransaction}){


    const handledelete= async (id) => {
        try{
            const res = await fetch(`https://newexpensetracker-sz4m.onrender.com/api/form/${id}`,{
                method: "DELETE",
            });
        
        if(!res.ok) throw new Error("Failed to delete")

setTransaction(prev => prev.filter(txn => txn._id !== id));


        } catch(err){
            console.error(err)
        }

    }
   
    return(
        <section className="transaction-container">
            <div >
                    <div  className="transaction-heading">
                        <h3>Recent Transaction</h3>
                        <div className="transaction-heading-right">
                        <p>Debit</p>
                        <p>Credit</p>
                        </div>

                    </div>
            
            <div className="main-transaction-container">
                {Array.isArray(transaction) && 
                transaction
                .slice()
                .reverse()
                
                
                .map((txn) => 
                    <div key={txn._id} className="transaction-row">
                        <div className="left-part">
                            <div><h3>{txn.title}</h3></div>
                            <div><p>{new Date(txn.date).toLocaleDateString()}</p></div>
                        </div>
                        <div className="transaction-rightpart">
                            <div className="transaction-income">
                         {txn.type === "income" ? 
                        (<p>+{txn.amount}</p>):(<p></p>)                    
                        
                        
                        }
                        </div>
                        <div className="transaction-expense">
                         {txn.type === "expense" ? 
                        (<p>-{txn.amount}</p>):(<p></p>)                    
                        
                        
                        }
                        </div>

                            
                        </div>
                        <div className="delete-edit">
                            <button onClick={handledelete}>delete</button>
                        </div>
                    </div>
            )
}
                      </div>
              


            </div>

        </section>
    )



}

export function CaluclateTotal(transaction = []){
        console.log("transaction:", transaction); // <-- inspect value

      if (!Array.isArray(transaction)) transaction = [];

        const totalIncome = transaction
        .filter(txn => txn.type === "income")
        .reduce((sum,txn)=> sum + txn.amount, 0)

        const totalExpense = transaction
        .filter(txn => txn.type === "expense")
        .reduce((sum,txn)=> sum + txn.amount,0)

        return{totalExpense,totalIncome, Balance: totalIncome - totalExpense}



    }
