import { AppBar, Toolbar, Typography } from '@mui/material';
import HeaderButton from './HeaderButton';

export default function Header() {

    return (
        <AppBar position='static'>
            <Toolbar sx={{display: 'flex', justifyContent: 'flex-start', flexGrow: 1}}>
                <Typography>
                    neko-app
                </Typography>
                <HeaderButton name = {"ファイル"}/>
                <HeaderButton name = {"編集"}/>
                <HeaderButton name = {"ヘルプ"}/>
            </Toolbar>
        </AppBar>
    );
}