'use client'
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        // Sử dụng scrollY để đo vị trí cuộn dọc
        const position = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        if (position + windowHeight >= documentHeight - 10) {
            setShow(true);
        } else {
            setShow(position > 300); // Hiển thị nút nếu vị trí cuộn > 300px
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
    };

    return (
        <Zoom in={show}>
            <Fab
                // color="#156782"
                onClick={scrollToTop}
                sx={{
                    backgroundColor: "#90adcc",

                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <ArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;
