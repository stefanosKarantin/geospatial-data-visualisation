import { jss } from 'static/styles';

const styles = {
  timeline: {
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filters: {
    width: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderBottom: '1px solid'
  },
  mapWrapper: {
    display: 'flex',
    height: 'calc(100% - 150px)'
  }
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  classes,
  styles,
};
