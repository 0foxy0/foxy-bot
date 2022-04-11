import type { NextPage } from 'next'
import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../utils/styles/home.module.scss";
import { redirectLogin, redirectInvite, redirectSupportServer } from "../utils/redirects";
import { useRouter } from 'next/router';
import { AiOutlineMenu } from "react-icons/ai";

const HomePage: NextPage = () => {
    const router = useRouter();

    return (
        <div>
            <div style={{
                height: "100%",
                padding: "30px 0",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <div style={{ textAlign: "center" }}>
                    <img src="https://bilderupload.org/image/fb5062538-foxy-original.png" style={{ width: "70%", alignContent: "center", borderRadius: "50%", pointerEvents: "none", userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }} />
                    <p style={{fontSize: "50px", fontFamily: "Bebas Neue", userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none", marginBottom: "100px" }}>Foxy Bot</p>
                </div>

                <div>
                    <div id={styles.MainButtons} onClick={redirectLogin}>
                        <FaDiscord size={40} color="#7289DA" />
                        <p style={{fontSize: "20px"}}>Dashboard</p>
                    </div>

                    <div id={styles.MainButtons} onClick={redirectInvite}>
                        <AiFillPlusCircle size={40} color="#fff" />
                        <p style={{fontSize: "20px"}}>Invite Bot</p>
                    </div>

                    <div id={styles.MainButtons} onClick={redirectSupportServer}>
                        <FaQuestionCircle size={40} color="#90ee90" />
                        <p style={{fontSize: "20px"}}>Support Server</p>
                    </div>
                </div>
        
                <div style={{display: "flex", width: "450px", justifyContent: "space-between", userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }}>
                    <span id={styles.underlineanimation} onClick={() => router.push("/privacy")}>Privacy Policy</span>
                    <span style={{ marginTop: "170px" }}>Copyright©F.O.X.Y</span>
                    <span id={styles.underlineanimation} onClick={() => router.push("/terms")}>Terms of Service</span>
                </div>

            </div>
        </div>
    )
}

export default HomePage;