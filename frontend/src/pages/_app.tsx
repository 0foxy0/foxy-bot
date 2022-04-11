import '../utils/styles/globals.scss';
import Head from 'next/head';
import { AppPropsWithLayout, Guild } from '../utils/types';
import { GuildContext } from '../utils/context/GuildContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  
  const [guild, setGuild] = useState<Guild>();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GuildContext.Provider value={{guild, setGuild}}> {
      getLayout(
      <>
        <Head>
          <title>Foxy Bot</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />
      </>
      )
    } </GuildContext.Provider>
  );
};

export default MyApp;