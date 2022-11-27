import { createClient } from "contentful";

const client = createClient({
    accessToken: "0IRHIiCOME2lbCZeyFSGiPrJ5HaA1TrI6V3cflGzzDo",
    space: "t5lykk6ug6w4",
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({ content_type: "featuredCard" });

    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log(paths);
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");
    console.log("**************");

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async (params: any) => {
    console.log(params.params);

    const { items } = await client.getEntries({
        content_type: "featuredCard",
        "fields.slug": params.params.slug,
    });

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { performer: items[0] },
        revalidate: 1,
    };
};

export default function Performer({ performer }) {
    console.log(performer);
    const { fields } = performer;
    return <div>Candy: {fields.cardTitle}</div>;
}
