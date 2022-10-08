import React from 'react'
import { useRouter } from 'next/router'
import { NavLink } from '@mantine/core'
import { IconHome2, IconLogout, IconUser } from '@tabler/icons'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    const router = useRouter()
    return (
        <div className={styles.navbar}>
            <Link href="/students" passHref>
                <NavLink
                    active={router.pathname === '/students'}
                    icon={<IconHome2 size={24} color='#fff' />}
                    className={styles.navlink}
                />
            </Link>
            <Link href="/registerform" passHref>
                <NavLink
                    active={router.pathname === '/registerform'}
                    icon={<IconUser size={24} color='#fff' />}
                    className={styles.navlink}
                />
            </Link>
            <Link href="/home" passHref>
                <NavLink
                    icon={<IconLogout size={24} color='#fff' />}
                    className={styles.navlink}
                />
            </Link>
        </div>
    )
}

export default Navbar