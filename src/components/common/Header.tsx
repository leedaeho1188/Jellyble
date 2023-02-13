import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

interface Props {

}

export const Header = ({}:Props) => {
  return (
    <AppBar position='fixed' >
      <Container maxWidth='xl' >
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}