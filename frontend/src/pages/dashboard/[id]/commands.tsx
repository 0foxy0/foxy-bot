import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { fetchCommands } from "../../../utils/api";
import { Command, NextPageWithLayout } from "../../../utils/types";
import styles from "./index.module.scss";

type Props = {
    commands: Command[];
}

const CommandsPage: NextPageWithLayout<Props> = ({ commands }) => {

    return (
        <div className="page">
            <h2 style={{ fontWeight: 300, userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }}>Commands:</h2>
            <div>
                {commands.map((cmd) => (

                    <div id={styles.PointerCursor}>

                        <div id={styles.ButtonAnimation} className={styles.CommandItem}>
                            <p>{cmd.name}</p>
                            <p>{cmd.description}</p>
                        </div>

                    </div>
                    ))}
            </div>
        </div>
    );
};

CommandsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    
    return fetchCommands(context);
}

export default CommandsPage;