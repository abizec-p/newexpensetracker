import { useEffect, useState } from "react"
import "./top-bar.css"
import { GiHamburgerMenu } from "react-icons/gi";



export default function TopBar(){
    const [date, setDate] = useState("");

    useEffect(()=>{
        const today = new Date();
        const fullDate = today.toLocaleDateString("en-CA",{
            year:"numeric",
            day:"numeric",
            month:"long",
            weekday:"long"
        })
        setDate(fullDate);

    },[])




    return(
        <section className="topBar">
            <div className="hamburger">
<GiHamburgerMenu />

            </div>
            <div className="greetings">
                <h1>Hello, Mr. Pariyar</h1>
            </div>
            <div>
                <p>{date}</p>

            </div>
        </section>
    )

}