export default theme => ({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    marginRight: theme.spacing.unit * 3,
  },
  rowHelperText: {
    marginTop: 0,
  },
  [theme.breakpoints.down('sm')]: {
    rowLabel: {
      marginRight: theme.spacing.unit * 2,
    },
  },
});
