// app/page.js
import Newsletter from "@/components/Newsletter";
import { redirect } from "next/navigation";

export default function Home() {  return (
    <>
       <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="mb-1">🚀 Coming Soon     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <p className="mb-1">We are working hard to bring something amazing!</p>
        <div className="countdown mt-0 mb-3">
          <span>Stay tuned!</span>
        </div>
      <Newsletter countryCode="in" />
        {/* <form className="notify-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Notify Me</button>
        </form> */}
      </div>
    </div>
    </>)

}
