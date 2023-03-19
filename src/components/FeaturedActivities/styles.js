import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  featuredCardContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  formCard: {
    margin: '1rem',
    padding: '1rem',
  },
  cardRoot: {
    position: 'relative',
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.575)',
    backgroundBlendMode: 'darken',
  },
  cardContent: {
    color: '#fff',
    width: '40%',
  },
  cardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
}));