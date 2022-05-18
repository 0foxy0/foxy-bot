import { GetServerSidePropsContext } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { GuildContext } from "../../../utils/context/GuildContext";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import styles from "./index.module.scss";
import router from "next/router";

type Props = {
    guild: Guild;
}

const SettingsPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        setGuild(guild);
    }, []);

    return (
        <div className="page">
            <div className={styles.Container}>
                <div>
                    <div className={styles.Flex}>
                        <p className={styles.Title} style={{marginTop: "0"}}>Event Messages</p>
                        <IoSettingsOutline size={40} />
                    </div>
                    <div className={styles.Grid}>
                        <div className={styles.OptionButton} onClick={() => router.push(`/dashboard/${guild.id}/welcomemsg`)}>Welcome Message</div>
                        <div className={styles.OptionButton}>Leave Message</div>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid #ffffff1b", marginTop: "30px" }}>
                    <div className={styles.Flex}>
                        <p className={styles.Title}>Log Channels</p>
                        <IoNewspaperOutline size={40} style={{marginTop: "30px"}} />
                    </div>
                    <div className={styles.Grid}>
                        <div className={styles.OptionButton}>Ticket Logs Channel</div>
                        <div className={styles.OptionButton}>Error Logs Channel</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default SettingsPage;