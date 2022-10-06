import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Teacher 1",
      photo: "https://github.com/brunodivino.png",
      description: "Teacher's description 1",
      value_hour: 100
    },
    {
      id: 2,
      name: "Teacher 2",
      photo: "https://github.com/brunodivino.png",
      description: "Teacher's description 2",
      value_hour: 100
    },
    {
      id: 3,
      name: "Teacher 3",
      photo: "https://github.com/brunodivino.png",
      description: "Teacher's description 3",
      value_hour: 100
    },
    {
      id: 4,
      name: "Teacher 4",
      photo: "https://github.com/brunodivino.png",
      description: "Teacher's description 4",
      value_hour: 100
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
