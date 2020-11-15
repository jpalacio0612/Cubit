import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '300px',
    height: '100px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  },
  cardActionArea: {
    display: 'flex',
    alignItems: 'center'
  }
})
