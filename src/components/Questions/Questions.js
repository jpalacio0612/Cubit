import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { questionsAndAnswers } from '../../data/questionsAndAnswers'
import { useStyles } from './StyledQuestions'

export const Questions = () => {
  const classes = useStyles()
  return (
    <Grid container justify='center' alignItems='center'>
      {questionsAndAnswers.map((answer) => (
        <Grid item xl key={answer.id}>
          <Paper elevation={3} className={classes.paper}>
            <Typography color='primary' variant='h5'>
              {answer.question}
            </Typography>
            <Typography variant='h6'>{answer.answer}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
