import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
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

            <GiHamburgerMenu className={styles.Hamburger} size={65} />

            <div className={styles.Menu} onClick={() => router.push("/menu")}>
                <RiMenu3Line size={65} />
                <p id={styles.MenuTag} >Menu</p>
            </div>
    

            <div className={styles.GuildName}>
                <p style={{ userSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" }} >{guild?.name}</p>
            </div> 
            
        </div>
    );
}