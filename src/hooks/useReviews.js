import {useQuery} from "@tanstack/react-query";
import {api} from "../api/index.js";


export const useReviews = () => {
    const reviewsQuery = useQuery({
        queryKey: ['reviews'],
        queryFn: api.getReviews,
        staleTime: 5 * 60 * 1000,
    });


    return {
        reviews: reviewsQuery.data ?? [],
        isLoading: reviewsQuery.isLoading,
        isFetching: reviewsQuery.isFetching,
        isError: reviewsQuery.isError,
        error: reviewsQuery.error,
        refetch: reviewsQuery.refetch
    }
}