import "./navigation.css"
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaRankingStar } from "react-icons/fa6";
import { CgInsights } from "react-icons/cg";






export default function Nav(){
    return(
        <section>
            <div className="nav-bar">
                <div className="nav-header">
                    <h1>Ex-Track</h1>
                    <p>An easy expense tracker</p>
                </div>
                <div className="menu">
                    <div>
                    <span><MdDashboard />
</span>    <p>Dashboard</p>
                    </div>
                    <div>
                        <span><GrTransaction />
</span>
                        <p>Transaction</p>
                    </div>
                    <div>
                        <span><FaRankingStar />
</span>
                        <p>Rankings</p>
                    </div>
                    <div>
                        <span><CgInsights />
</span>

                        <p>Overview</p>
                    </div>

                </div>
                <div className="nav-login">
                    <h3>Abishek Pariyar</h3>
                    <a href="#">FAQ</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>

            </div>
        </section>

    )

}