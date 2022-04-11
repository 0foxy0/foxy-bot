import { GetServerSidePropsContext } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/context/GuildContext";
import { Guild, NextPageWithLayout } from "../../../utils/types";

type Props = {
    guild: Guild;
}

const SettingsPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        setGuild(guild);
    }, []);

    return <div className="page">Settings Page</div>;
};

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default SettingsPage;