import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  
  const {
    teachersList, 
    name, 
    setName, 
    email, 
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    scheduleClass,
    alertMessage,
    setAlertMessage,
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List 
          teachers={teachersList}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></List>
      </Box>

      <Dialog onClose={() => setSelectedTeacher(null)} open={selectedTeacher !== null} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Write the name"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Write the E-mail"
              type="text"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
          <Button onClick={() => scheduleClass()}>Schedule</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={alertMessage} 
        open={alertMessage.length > 0}
        autoHideDuration={2500}
        onClose={() => setAlertMessage('')}
      />
    </div>
  )
}

export default Home
