import { createStyles, makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
  rootWrap: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(7)
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    paddingBottom: theme.spacing(2),
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.3)',
      webkitBoxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.3)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      outline: '1px solid slategrey'
    },
    '& .MuiGridListTile-root': {
      maxWidth: theme.spacing(30),
      '& .MuiGridListTile-tile': {
        overflow: 'initial'
      }
    }
  },
}));