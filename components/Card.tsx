import Image from "next/image";
import styles from "./Card.module.scss";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Card {
    performer: {
        cardTitle: string;
        thumbnail: { fields: { file: { url: string } } };
        cardText: { content: {}; data: {}; nodeType: string };
    };
}

export default function PerformerCard({ performer }: Card) {
    const { cardTitle, thumbnail, cardText, slug } = performer;
    let previewText = documentToReactComponents(cardText);
    return (
        <div className={styles.PerformerCard}>
            <div className={styles.PerformerCard__portrait}>
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={260}
                    height={48}
                    alt="Performer portrait"
                />
            </div>
            <Link href={`/performers/${slug}`}>
                <p className={styles.title}>{cardTitle}</p>
            </Link>
            <div className={styles.text}>{previewText}</div>
        </div>
    );
}
