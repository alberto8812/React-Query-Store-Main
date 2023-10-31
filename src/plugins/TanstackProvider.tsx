import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC } from "react";



interface Props {
    children:JSX.Element | JSX.Element[];
}

const queryClient= new QueryClient()

export const TanstackProvider:FC <Props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
