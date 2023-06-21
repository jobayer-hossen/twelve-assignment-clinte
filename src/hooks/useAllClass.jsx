import { useQuery } from '@tanstack/react-query';

const useAllClass = () => {

    const {data:allClass = [], isLoading:loading,refetch} = useQuery({
        queryKey:['allClass'],
        queryFn:async()=>{
            const res = await fetch('https://twelve-assignment-server-indol.vercel.app/allClass');
            return res.json();
        }
        
    });

    return [allClass,loading,refetch]
};

export default useAllClass;