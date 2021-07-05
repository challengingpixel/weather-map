import {createStyles, makeStyles} from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
  rootContainer: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    paddingTop: theme.spacing(2),
    overflowX: 'hidden',
  },
  rootMapElement: {
    height: theme.spacing(50), 
    width: theme.spacing(75),
    margin: '0 auto',
    borderRadius: theme.spacing(2.5),
    opacity: '80%'
  }
}));