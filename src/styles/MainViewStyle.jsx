import {createStyles, makeStyles} from '@material-ui/core/styles'
import Image from '../assets/images/Bulgaria.jpg';

export const styles = makeStyles((theme) => createStyles({
  root: {
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflowX: 'hidden',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '& .root-map-wrap': {
      width: '100%',
      padding: theme.spacing(2),
      overflow: 'hidden'
    }
  }
}));