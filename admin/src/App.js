import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import loopbackRestClient, {authClient} from 'aor-loopback';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { CategoriaList, CategoriaCreate, CategoriaEdit } from './resources/categoria';
import { ProductoList, ProductoCreate, ProductoEdit } from './resources/producto';
import { NovedadList, NovedadCreate, NovedadEdit } from './resources/novedad';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import conf from './conf';

import interceptor from './interceptor';

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  DateTimeField,
  BooleanField,
  RichTextField,
  ChoiceField,
  ReferenceField,
  Filter
} from 'react-admin';

const restClient = interceptor(loopbackRestClient(conf.API_URL));
const authProvider = authClient(conf.AUTH_URL);

const messages = {
  'es': spanishMessages,
};

const i18nProvider = polyglotI18nProvider(locale => messages['es']);

const App = () =>
    <Admin dataProvider={restClient} locale="es" i18nProvider={i18nProvider}>
        <Resource name="categorias" list={CategoriaList} create={CategoriaCreate} edit={CategoriaEdit}/>
        <Resource name="productos" list={ProductoList} create={ProductoCreate} edit={ProductoEdit}/>
        <Resource name="novedades" list={NovedadList} create={NovedadCreate} edit={NovedadEdit}/>
    </Admin>

export default App;
