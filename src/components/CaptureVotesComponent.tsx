import React, { useState, ChangeEvent} from "react";
import { Election, Voter, Question } from '../models/App';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export type CaptureVotesComponentProps = {
  currentVoter: Voter,
  currentElection: Election,
  elections: Election[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export function CaptureVotesComponent(props:CaptureVotesComponentProps ) {
  console.log(props.elections);
  const classes = useStyles();
  const [checked, setChecked] = useState([{} as Question]);

  const handleQuestionToggle = (question: Question) => () => {
    const currentIndex = checked.indexOf(question);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(question);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  return (
    <>
      <h1>Welcome {props.currentVoter.firstName} {props.currentVoter.lastName}! to {props.currentElection.name}</h1>
      <p>Lets Capture Votes !</p>

      <List dense className={classes.root}>
      {props.currentElection.questions.map((question, index ) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <ListItem key={index} button>
            <ListItemText id={labelId} primary={`${index + 1}.  ${question.content}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleQuestionToggle(question)}
                checked={question.yes === 1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </>
  )
}
