import React from 'react'
import memories from './images/memories.png'
import {AppBar, Container,Grid,Grow,Typography} from '@material-ui/core'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt="" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={60}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App