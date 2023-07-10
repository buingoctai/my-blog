import PostAdapter from '@/libs/adapters/post-adapter';
import { ICatCard } from 'components/Cards/Cat/CatCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import Utils from 'utils/utils';

const PAGE_SIZE_RENDER = 10;
const useScrollToBottom = (cb: () => void) => {
    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
                cb();
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [cb]);
}

export default function useRenderTechnicalPosts(
    initPosts: any[],
) {
    const initPostsRef = useRef<ICatCard[]>(PostAdapter.convertToUIData(initPosts));
    const hasMore = useRef<boolean>(initPostsRef.current.length <= PAGE_SIZE_RENDER ? false : true);
    const [posts, setPosts] = useState<ICatCard[]>(hasMore.current ? initPostsRef.current.slice(0, PAGE_SIZE_RENDER) : initPostsRef.current);
    const currentPage = useRef<number>(1);
    let timeoutSearchRef = useRef<any>(null);

    const onLoadMorePost = useCallback(async () => {
        if (hasMore.current) {
            currentPage.current += 1;
            const newPosts = initPostsRef.current.slice(0, currentPage.current * PAGE_SIZE_RENDER);
            hasMore.current = newPosts.length < initPostsRef.current.length;

            setPosts(newPosts);
        }
    }, []);

    const onSearchPosts = useCallback((text: string) => {
        clearTimeout(timeoutSearchRef.current);

        timeoutSearchRef.current = setTimeout(() => {
            const newPosts = posts.filter(p => {
                if (Utils.checkMatchedText(p.title, text)) {
                    return true;
                }

                return false;
            });

            setPosts(newPosts);
        }, 500);
    }, [posts]);

    useScrollToBottom(onLoadMorePost);



    return {
        posts,
        onSearchPosts,
    }

}