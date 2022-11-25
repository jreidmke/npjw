import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import styles from "./NavBar.module.scss";

type Props = {
    fields: object;
};

export const NavBar = ({ fields }: Props) => {
    console.log(fields);
    return (
        <NavigationMenu.Root className={styles.container}>
            <NavigationMenu.List className={styles.NavBar}>
                <div className={`${styles.NavBar__logo} flex`}>
                    {/* <Image
                        src={`https:${image}`}
                        alt="NJPW"
                        width="25"
                        height="20"
                        className="mr-2"
                    />
                    NJPW DB */}
                </div>
                <div className={styles.NavBar__links}>
                    <NavigationMenu.Item className={styles.NavBar__item}>
                        <NavigationMenu.Trigger
                            className={styles.NavBar__trigger}
                        >
                            Performers
                            <CaretDownIcon />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                            className={styles.NavBar__dropdown}
                        >
                            <ul>
                                <li>Okada</li>
                                <li>Ospreay</li>
                                <li>Tanahashi</li>
                                <li>ZSJ</li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className={styles.NavBar__item}>
                        <NavigationMenu.Trigger
                            className={styles.NavBar__trigger}
                        >
                            Blog Post
                            <CaretDownIcon />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                            className={styles.NavBar__dropdown}
                        >
                            <ul>
                                <li>NOAH</li>
                                <li>Survivor Series</li>
                                <li>Jan 4th</li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </div>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};
