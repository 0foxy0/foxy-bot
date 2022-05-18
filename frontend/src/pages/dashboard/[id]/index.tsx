import { GetServerSidePropsContext } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/context/GuildContext";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { BiGroup } from "react-icons/bi";
import styles from "./index.module.scss";

type Props = {
    guild: Guild;
}

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        setGuild(guild);
    }, []);

    return (
        <div className={styles.PageDiv}>
            <div id={styles.MembersDiv}>
                <BiGroup size={80} color={"blue"}></BiGroup>
                <h1>Members</h1>
                <p style={{ fontSize:"30px" }} >{guild.approximate_member_count}</p>
            </div>
        </div>
    );
};

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default DashboardPage;