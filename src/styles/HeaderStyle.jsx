import {createStyles, makeStyles} from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
    rootHeader: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundImage: 'linear-gradient(to bottom right, rgba(46, 49, 49, 0.4), rgba(255, 255, 255, 0))',
        backdropFilter: 'blur(7px)',
        boxShadow: '10px 10px 10px rgba(30 30 30, 0.1)',
        borderRadius: theme.spacing(2.5),
        alignItems: 'center'
    }
}));