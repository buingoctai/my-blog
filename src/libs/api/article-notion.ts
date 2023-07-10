import { Client } from '@notionhq/client';
import { singleton } from "tsyringe";


interface IArticleNotionAPI {
    getArticles(): Promise<any>,
    getDetailArticle(id: string): Promise<any>,
    getArticleBlocks(id: string): Promise<any>,
}

@singleton()
export class ArticleNotionAPI implements IArticleNotionAPI {
    private client: any;

    constructor() {
        if (this.client) return;
        this.client = new Client({
            auth: process.env.NEXT_PUBLIC_NOTION_KEY,
        });
    }

    async getArticles() {
        return await this.client.databases.query({
            database_id: `${process.env.NEXT_PUBLIC_ARTICLE_NOTION_DATABASE}`,
        });
    }

    async getDetailArticle(id: string) {
        return await this.client.pages.retrieve({
            page_id: id,
        });
    }

    async getArticleBlocks(id: string) {
        return await this.client.blocks.children.list({
            block_id: id
        });
    }
}

export default ArticleNotionAPI;


