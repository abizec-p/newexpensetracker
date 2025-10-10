import { useState } from "react";
import "./add.css";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isExpenseOpen, setExpenseOpen] = useState(false);
  const [isIncomeOpen, setIncomeOpen] = useState(false);
  const [incomeData, setIncomeData] = useState({
    amount: "",
    title: "",
    category: "",
    date: "",
    type: "income",
  });
  const [expenseData, setExpenseData] = useState({
    amount: "",
    title: "",
    category: "",
    date: "",
    type: "expense",
  });

  const handleAddIncome = async () => {
    try {
      const response = await fetch(
        "https://newexpensetracker-sz4m.onrender.com/api/form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(incomeData),
        }
      );

      const data = await response.json();
      alert(data.message);

      setIncomeOpen(false);

      setIncomeData({
        amount: "",
        title: "",
        category: "",
        date: "",
        type: "income",
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleAddExpense = async () => {
    try {
      const response = await fetch(
        "https://newexpensetracker-sz4m.onrender.com/api/form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(expenseData),
        }
      );

      const data = await response.json();
      alert(data.message);
      setExpenseOpen(false);
      setExpenseData({
        amount: "",
        title: "",
        category: "",
        date: "",
        type: "expense",
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <section className="add-section">
      <div className="add-button">
        <button
          onClick={() => setIncomeOpen(true)}
          className="add-income-button"
        >
          + Add Income
        </button>

        <button
          onClick={() => setExpenseOpen(true)}
          className="add-expense-button"
        >
          + Add Expense
        </button>
      </div>
      <div className="add-expense">
        {isIncomeOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              className="modal-background"
              onClick={() => {
                setIncomeOpen(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 1 }}
                className="modal add-income-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className=" income-modal">
                  <input
                    type="number"
                    placeholder="Add Amount"
                    value={incomeData.amount}
                    onChange={(e) =>
                      setIncomeData({ ...incomeData, amount: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={incomeData.title}
                    onChange={(e) =>
                      setIncomeData({ ...incomeData, title: e.target.value })
                    }
                  />
                  <select
                    value={incomeData.category}
                    onChange={(e) =>
                      setIncomeData({ ...incomeData, category: e.target.value })
                    }
                  >
                    <option value="category">Category</option>
                    <option value="Salary">Salary</option>
                    <option value="Bonus/Tip">Bonus/Tip</option>
                    <option value="government">Government</option>
                    <option value="Loan">Loan</option>
                    <option value="other-expense">Other</option>
                  </select>
                  <input
                    type="date"
                    value={incomeData.date}
                    onChange={(e) =>
                      setIncomeData({ ...incomeData, date: e.target.value })
                    }
                  />
                  <div className="button-modal">
                    <button
                      onClick={handleAddIncome}
                      className="add-income-button"
                    >
                      Add Income
                    </button>
                    <button
                      onClick={() => setIncomeOpen(false)}
                      className="close-button"
                    >
                      close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="add-expense">
        {isExpenseOpen && (
          <AnimatePresence>
            <motion.div
              initial="0"
              animate="1"
              exit="0"
              className="modal-background"
              onClick={() => {
                setExpenseOpen(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 1 }}
                className="modal add-expense-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="income-modal">
                  <input
                    type="number"
                    placeholder="Add Amount"
                    value={expenseData.amount}
                    onChange={(e) =>
                      setExpenseData({ ...expenseData, amount: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={expenseData.title}
                    onChange={(e) =>
                      setExpenseData({ ...expenseData, title: e.target.value })
                    }
                  />
                  <select
                    value={expenseData.category}
                    onChange={(e) =>
                      setExpenseData({
                        ...expenseData,
                        category: e.target.value,
                      })
                    }
                  >
                    <option value="category">Category</option>
                    <option value="grocery">Grocery</option>
                    <option value="Rent/Mortgage">Rent/Mortgage</option>
                    <option value="Transport">Transportation</option>
                    <option value="entertain">Entertainment</option>
                    <option value="Bills">Bill Payment</option>
                    <option value="Loan-payment">Loan & Repayment</option>
                    <option value="other-expense">Other</option>
                  </select>
                  <input
                    type="date"
                    value={expenseData.date}
                    onChange={(e) =>
                      setExpenseData({ ...expenseData, date: e.target.value })
                    }
                  />
                  <div className="modal-button">
                    <button
                      onClick={handleAddExpense}
                      className="add-income-button"
                    >
                      Add Expense
                    </button>
                    <button
                      onClick={() => setExpenseOpen(false)}
                      className="close-button"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
