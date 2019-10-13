import { create } from 'jss';
// import { injectSheet } from 'react-jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import camelCase from 'jss-camel-case';
import nested from 'jss-nested';
import expand from 'jss-expand';
import global from 'jss-global';

// import caviarDreams from 'static/fonts/CaviarDreams-webfont.woff';

// import jssIsolate from 'jss-isolate'

const jss = create();

// jss.use(jssIsolate())
jss.use(global());
jss.use(nested());
jss.use(camelCase());
jss.use(expand());
jss.use(vendorPrefixer());
//
// const appInjectSheet = injectSheet(jss);
// const useSheet = (component, styles) => appInjectSheet(styles)(component);

export { jss };
