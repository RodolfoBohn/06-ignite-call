import '../lib/dayjs'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Roboto } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

globalStyles()
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={roboto.className}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </div>
  )
}
