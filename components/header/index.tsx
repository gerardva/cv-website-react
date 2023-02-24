import { IconButton, Link, styled, Tooltip, Typography, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';

import styles from './styles.module.scss';


export default function Header() {
    const theme = useTheme();
    const accentColor = theme.palette.secondary.main;
    const accentBorder = { borderColor: accentColor };
    const accentBackground = {backgroundColor: accentColor };
    return (
        <header className={styles.header}>
            <div style={accentBorder} className={styles.headerContent}>
                <img style={accentBorder} src="/images/profile-picture.jpg" />
                <Typography variant="h5" gutterBottom>
                    Gerard van Alphen
                </Typography>
                <div className="row mb-4">
                <div className="col-6">
                    <Link href="mailto:gerard@valphen.com">
                        <Tooltip title="gerard@valphen.com">     
                            <IconButton aria-label="gerard@valphen.com" style={accentBackground}>
                                <EmailIcon  />
                            </IconButton>           
                        </Tooltip>                    
                        </Link>
                </div>
                <div className="col-6">
                    <Link href="https://www.linkedin.com/in/gerard-van-alphen-b07a54a0/" target="_blank">
                        <Tooltip title="LinkedIn">     
                            <IconButton aria-label="LinkedIn" style={accentBackground}>
                                <LinkedInIcon  />
                            </IconButton>           
                        </Tooltip>
                    </Link>
                </div>
                </div>
                <div className="row contact">
                    <div className="col-12">
                        <span className={styles.materialIcons}><CalendarTodayIcon/></span> 31-10-1995 
                        <span className={`${styles.materialIcons} ms-5`}><HomeIcon/></span> Barendrecht
                    </div>
                </div>
            </div>
        </header> 
    );
}