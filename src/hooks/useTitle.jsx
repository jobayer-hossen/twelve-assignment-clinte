import { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `LensCraft-${title}`
    },[title]);
};

export default useTitle;