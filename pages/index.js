import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../client/store';
import Layout from '../components/Layout';
import App from '../client/App';

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-undef
class Index extends React.Component {
  state = {
    currentName: null,
  }

  static async getInitialProps(context) {
    let { logineduser } = context.query;
    const { req } = context;

    const baseUrl = req ? `https://${req.get('Host')}` : '';

    try {
      if (!logineduser) {
        const responseJson = await fetch(`${baseUrl}/user`);
        const response = await responseJson.json();
        if (response.user) logineduser = response.user;
      }
    } catch (err) {
      console.log(err);
    }

    return {
      logineduser,
      baseUrl,
    };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('service worker registration successful', registration);
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }

  render() {
    const { logineduser, baseUrl } = this.props;

    return (
      <Layout title='to-do-app' description='To Do App project made with next.js' user={logineduser}>
        <Provider store={store}>
          <App baseUrl={baseUrl} />
        </Provider>
      </Layout>
    );
  }
}

Index.defaultProps = {

};

Index.propTypes = {

};

export default Index;
