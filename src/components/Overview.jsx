import "./overview.css";
import { CaluclateTotal} from "./Transaction";

export default function Overview({transaction}){
    const {totalExpense, totalIncome, Balance} = CaluclateTotal(transaction);

    
    return(
        <section className="overview">
            <div className="overview-income">
                <p>Total Income:</p>
                <h1>${totalIncome}</h1>
            </div>
            <div className="overview-expense">
                <p>Total Expense:</p>
                <h1>${totalExpense}</h1>
            </div>
            <div className="overview-balance">
                <p>Balance:</p>
                <h1>${Balance}</h1>
            </div>
        </section>
    )
} 