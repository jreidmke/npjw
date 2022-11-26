import { format } from "date-fns";

interface Props {
    blog: {
        fields: {
            title: string;
            author: string;
            blogCardPublishDate: string;
            cardText: {};
        };
        sys: { id: string };
    };
}

export default function Blog({ blog }: Props) {
    const { fields } = blog;
    const x = fields.blogCardPublishDate;
    return (
        <div className="my-8 hover:text-amber-700 cursor-pointer">
            <h2>{fields.title}</h2>
            <sup className="italic">
                By {fields.author} on
                {format(new Date(fields.blogCardPublishDate), "MM/dd/yyyy")}
            </sup>
        </div>
    );
}
