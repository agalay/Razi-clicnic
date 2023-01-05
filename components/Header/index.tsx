import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Grid2 from "@mui/material/Unstable_Grid2";
import {Container, IconButton, Box} from '@mui/material';
import {Menu, Search} from '@mui/icons-material';

import styles from './Header.module.scss';

type TNavItem = {
	title: string,
	href: string
}

const navItems: TNavItem[] = [
	{ title: 'Главная', href: '/' },
	{ title: 'О нас', href: '/about' },
	{ title: 'Услуги', href: '/services' },
	{ title: 'Врачи', href: '/doctors' },
	{ title: 'Контакты', href: '/contact' },
]

export const Header: React.FC = () => {
	const { pathname } = useRouter()

	const [openSearch, setOpenSearch] = React.useState(false)
	const [openMenu, setOpenMenu] = React.useState(false)

	return (
		<Box sx={{ py: 5, position: 'relative'}}>
			<div className={styles.headerBG} />
			<Container>
				<Grid2 container alignItems="center" spacing={3}>
					<Grid2 md={3}>
						<Link href='/'>Razi Clinic</Link>
					</Grid2>
					<Grid2 md={7}>
						<Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', gap: 4 }}>
							{navItems.map(({ title, href }) => (
								<Link
									key={href}
									className={`${styles.navLink} ${pathname === href ? styles.navActive : ''}`}
									href={href}
								>
									{title}
								</Link>
							))}
						</Box>
					</Grid2>
					<Grid2 md={2}>
						<Box sx={{ display: 'flex', justifyContent: 'end', position: 'relative'}}>
							<IconButton
								aria-label="search"
								onClick={() => setOpenSearch(val => !val)}
							>
								<Search />
							</IconButton>
							<IconButton
								aria-label="menu"
								onClick={() => setOpenMenu(val => !val)}
							>
								<Menu />
							</IconButton>
						</Box>
					</Grid2>
				</Grid2>
			</Container>
		</Box>
	)
}
