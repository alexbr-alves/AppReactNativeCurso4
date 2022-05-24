import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/rotas';
import reactotron from 'reactotron-react-native';

reactotron.configure().useReactNative().connect();

export default function App() {
reactotron
return <> 
  <Rotas/>
    </>
}