import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import FullScreenDialog, { FullScreenDialogContent } from '../FullScreenDialog';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import messages from './PrintBoardButton.messages';

const PrintBoardDialog = ({
  title,
  open,
  onClose,
  onPrintCurrentBoard,
  onPrintFullBoardSet
}) => (
  <FullScreenDialog
    disableSubmit={true}
    open={open}
    title={title}
    onClose={onClose}
  >
    <Paper>
      <FullScreenDialogContent className="PrintBoardDialog__container">
        <List>
          <ListItem>
            <ListItemText
              primary={<FormattedMessage {...messages.printBoard} />}
              secondary={<FormattedMessage {...messages.printBoardSecondary} />}
            />
          </ListItem>
          <ListItem>
            <ListItemSecondaryAction>
              <Button color="primary" onClick={onPrintCurrentBoard}>
                <FormattedMessage {...messages.printCurrentBoard} />
              </Button>
              <Button onClick={onPrintFullBoardSet}>
                <FormattedMessage {...messages.printFullBoardSet} />
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </FullScreenDialogContent>
    </Paper>
  </FullScreenDialog>
);

PrintBoardDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onPrintCurrentBoard: () => {},
  onPrintFullBoardSet: () => {}
};

PrintBoardDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onPrintCurrentBoard: PropTypes.func,
  onPrintFullBoardSet: PropTypes.func
};

export default PrintBoardDialog;
