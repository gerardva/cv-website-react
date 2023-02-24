import Head from 'next/head'
import styles from './layout.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import Header from './header'
import { theme } from '../theme';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BuildIcon from '@mui/icons-material/Build';
import MoodIcon from '@mui/icons-material/Mood';

export const siteTitle = 'CV'
const drawerWidth = 240;

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const navItems = [
    { title: 'Home', icon: <HomeIcon/>, link: '/' },
    { title: 'Over mij', icon: <ContactPageIcon/>, link: '/#about' },
    { title: 'Projecten', icon: <CodeIcon/>, link: '/#projects' },
    { title: 'Werkervaring', icon: <WorkIcon/>, link: '/#workexperience' },
    { title: 'Opleiding', icon: <AssignmentTurnedInIcon/>, link: '/#education' },
    { title: 'Publicaties', icon:  <ArticleIcon/>, link: '/#publications' },
    { title: 'Skills', icon: <BuildIcon/>, link: '/#skills' },
    { title: 'Hobby', icon: <MoodIcon/>, link: '/#hobbies' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="CV website"/>
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <List className="mt-4">
              {navItems.map((item, index) => (
                <ListItem key={item.title} disablePadding>
                  <Link color="primary" href={item.link}>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default'}}>
            <Header></Header>
            <main>
              <div className="container">
                {children}
              </div>
            </main>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  )
}
