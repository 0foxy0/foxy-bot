import { GetServerSidePropsContext } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/context/GuildContext";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import styles from "./index.module.scss";

type Props = {
    guild: Guild;
}

const WelcomeMsgPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        setGuild(guild);
    }, []);

    return (
        <div className="page">
            <div className={styles.Container}>
                <p className={styles.Title} style={{marginTop: "0"}}>Configuire the Welcome Message:</p>
                <div>
                    <section>
                        <div style={{marginTop: "30px"}}>
                            <label>Status</label>
                        </div>
                        <select className={styles.Select} style={{ marginTop: "4px", marginBottom: "20px" }}>
                            <option disabled>Please Select a Status</option>
                            <option value="on">on</option>
                            <option selected value="off">off</option>
                        </select>
                    </section>

                    <section>
                        <div>
                            <label>Chat</label>
                        </div>
                        <select className={styles.Select} style={{ marginBottom: "20px" }}>
                            <option selected disabled>Please Select a Chat</option>
                            <option value="testID">test</option>
                            <option value="test2ID">test2</option>
                        </select>
                    </section>

                    <section>
                        <div>
                            <label htmlFor="message">Message</label>
                        </div>
                        <textarea className={styles.TextArea} style={{ marginTop: "4px" }} maxLength={2000} id="message" />
                    </section>

                    <div className={styles.Flex} style={{justifyContent: "flex-end"}}>
                        <button className={styles.Button} style={{backgroundColor: "#999999"}}>Reset</button>
                        <button className={styles.Button} style={{backgroundColor: "#0091ff"}}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

WelcomeMsgPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default WelcomeMsgPage;