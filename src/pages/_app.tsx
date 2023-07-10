import { wrapper } from '@/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import "reflect-metadata";
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  console.log("taibnlogsssssss store", store, props);

  const { pageProps } = props;

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;