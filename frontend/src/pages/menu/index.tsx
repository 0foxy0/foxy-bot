import { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from "../../utils/styles/menu.module.scss";
import styles2 from "../../utils/styles/termsprivacy.module.scss";
import { useRouter } from "next/router";
import { getIcon } from "../../utils/helpers";

type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {
    const router = useRouter();

    return (
        <div className="page">
            <div className={styles.Container}>
                <h2 style={{ fontWeight: 300, userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }}>Select a Server:</h2>
                <div>
                    {guilds.map((guild) => (

                        <div id={styles.PointerCursor}>

                            <div onClick={() => router.push(`/dashboard/${guild.id}`)} id={styles.ButtonAnimation} className={styles.GuildItem}>
                                <img src={getIcon(guild)} width={40} height={40} style={{ borderRadius: "50%" }} />
                                <p>{guild.name}</p>
                            </div>
                        </div>

                    ))}
                </div>
                <button className={styles2.Button} style={{ marginTop: "10px" }} onClick={() => router.push("/")}>Back</button>
            </div>
        </div>

    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    return fetchMutualGuilds(context);
}

export default MenuPage;