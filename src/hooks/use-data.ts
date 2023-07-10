import { useEffect, useState } from "react";
import { container } from 'tsyringe';




export default function useData<T>(fea: T, selector: () => void) {

    const [dataUI, setDataUI] = useState(container.resolve(fea).getData());

    useEffect(() => {
        container.resolve(fea).subscribeSetState(setDataUI);
    }, [])

    return dataUI;
}