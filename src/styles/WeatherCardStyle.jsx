import {createStyles, makeStyles} from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
        maxWidth: theme.spacing(30),
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
        backdropFilter: 'blur(7px)',
        boxShadow: '10px 10px 10px rgba(30 30 30, 0.1)',
        borderRadius: theme.spacing(4),
        zIndex: '9999999',
        '& .MuiCardMedia-img': {
            width: theme.spacing(10),
            height: theme.spacing(10),
            objectFit: 'contain',
            margin: '0 auto'
        }
    },
    rootInfoList: {
        '& .MuiListItem-root': {
            padding: '0',
            '& .MuiListItemText-root': {
                margin: '0'
            }
        }
    }
}));