'use client'
import * as React from 'react';

import { Button } from '@mui/material';
// import '../style/header.css';
import './header.css'
import { useRouter } from 'next/navigation';

export default function LoginHeader() {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickLogo = () => {
        router.push(
            '/'
        )
    }
    const handleClickTeacher = () => {
        router.push(
            '/auth/signinteacher'
        )
    }
    const handleClickStudent = () => {
        router.push(
            '/auth/signin'
        )
    }
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    alignItems: "center",
                    borderBottom: '1px solid gray'
                }}>
                <Button
                    onClick={() => {
                        handleClickLogo()
                    }}
                    sx={{
                        marginLeft: "30px",
                        marginRight: "3%",
                        textWrap: 'nowrap',
                        color: "black   "
                    }}
                >Đây là logo
                </Button>

                <> <Button
                    onClick={() => {
                        handleClickTeacher()
                    }}
                    sx={{
                        marginLeft: "3px",
                        marginRight: "3%",
                        textWrap: 'nowrap',
                        color: "black   "
                    }}
                >Bạn là giáo viên? </Button >
                </>
                <>
                    <Button
                        onClick={() => {
                            handleClickStudent()
                        }}
                        sx={{
                            marginLeft: "3px",
                            marginRight: "3%",
                            textWrap: 'nowrap',
                            color: "black   "
                        }}
                    >Bạn là sinh viên?
                    </Button>
                </>




            </div >
        </React.Fragment >
    );
}
