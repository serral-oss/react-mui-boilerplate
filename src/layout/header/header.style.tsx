import { Container, styled } from '@mui/material'

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 200px',
  [theme.breakpoints.down('md')]: {
    padding: '16px'
  }
}))
