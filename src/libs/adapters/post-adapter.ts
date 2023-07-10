import { ICatCard } from 'components/Cards/Cat/CatCard';
import AuthorAva from '../../../public/author-ava.jpg';
import ThumbDefaultV2 from '../../../public/thumb-default-v2.png';


export default class PostAdapter implements ICatCard {
    id: string;
    title: string;
    tags: { name: string, color: string }[]
    body: string;
    author: string;
    authorPhoto: string;
    time: string;
    thumb: string;

    constructor(post: any) {
        this.id = post.id;

        this.title = post.properties?.Name.title[0].plain_text;

        this.tags = post.properties?.Tags?.multi_select?.map(t => ({ name: t.name, color: t.color }));

        this.body = "";

        this.author = "Tai Bui";

        this.time = post.created_time;

        this.authorPhoto = AuthorAva;

        // this.thumb = post.cover?.external?.url || post.cover?.file?.url || ThumbDefaultV2;
        this.thumb = ThumbDefaultV2;
    }


    static convertToUIData(posts: any[]): ICatCard[] {
        let res: ICatCard[] = [];

        for (const post of posts) {
            const card = new PostAdapter(post);

            res.push({
                id: card.id,
                title: card.title,
                author: card.author,
                authorPhoto: card.authorPhoto,
                body: card.body,
                tags: card.tags,
                thumb: card.thumb,
                time: card.time,
            });
        }

        return res;
    }
}