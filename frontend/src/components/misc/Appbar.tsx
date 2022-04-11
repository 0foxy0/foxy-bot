import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { Guild } from "../../utils/types";
import { FC } from "react";

type Props = {
    guild?: Guild;
}

export const Appbar: FC<Props> = ({ guild }) => {
    const router = useRouter();

    return (
        <div className={styles.Appbar}>

            <div className={styles.Menu} onClick={() => router.push("/menu")}>
                <RiMenu3Line size={65} />
                <p style={{ userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }} >Menu</p>
            </div>
    

            <div>
                <p style={{ userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }} >{guild?.name}</p>
            </div>
            
        </div>
    );
}