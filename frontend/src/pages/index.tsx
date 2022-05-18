import type { NextPage } from 'next'
import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../utils/styles/home.module.scss";
import { redirectLogin, redirectInvite, redirectSupportServer } from "../utils/redirects";
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles.PageDiv}>
                <div style={{ textAlign: "center" }}>
                    <img id={styles.Logo} src="" />
                    <p className={styles.BotTitle}>Foxy Bot</p>
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
                        <p style={{fontSize: "20px"}}>Support</p>
                    </div>
                </div>
        
                <div id={styles.Copyright}>
                    <span className={styles.underlineanimation} onClick={() => router.push("/privacy")}>Privacy Policy</span>
                    <span>Copyright©F.O.X.Y</span>
                    <span className={styles.underlineanimation} onClick={() => router.push("/terms")}>Terms of Service</span>
                </div>

            </div>
        </div>
    )
}

export default HomePage;