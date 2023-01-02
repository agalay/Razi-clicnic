import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { List, Search } from 'react-bootstrap-icons';
import { Col, Container, Navbar, Row, Nav, Stack, Button } from 'react-bootstrap'

import classes from '../styles/Header.module.scss'

const menuItems = [
	{ title: 'Главная', href: '/' },
	{ title: 'О нас', href: '/about' },
	{ title: 'Услуги', href: '/services' },
	{ title: 'Врачи', href: '/doctors' },
	{ title: 'Контакты', href: '/contact' },
]

export default function Header() {
	const { pathname } = useRouter()

	const [openSearch, setOpenSearch] = React.useState<boolean>(false)
	const [openMenu, setOpenMenu] = React.useState<boolean>(false)

	return (
		<header className='py-5 position-relative'>
			<div className={classes.headerBG} />
			<Container>
				<Row className='align-items-center'>
					<Col md={3}>
						<Link href='/'>Razi Clinic</Link>
					</Col>
					<Col md={7}>
						<Navbar expand={'lg'}>
							<Container>
								<Navbar.Collapse className='justify-content-end'>
									<Nav>
										{menuItems.map(({ title, href }) => (
											<li
												className='nav-item px-3'
												key={href}
											>
												<Link
													className={`nav-link ${classes.navLink} ${pathname === href ? classes.navActive : ''}`}
													href={href}
												>
													{title}
												</Link>
											</li>
										))}
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Col>
					<Col md={2}>
						<Stack direction='horizontal' gap={2} className='justify-content-end position-relative'>
							<Button variant='' onClick={() => setOpenSearch(val => !val)} className='p-0'>
								<Search />
							</Button>
							<Button variant='' onClick={() => setOpenMenu(val => !val)} className='p-0'>
								<List size={22} />
							</Button>
						</Stack>
					</Col>
				</Row>
			</Container>
		</header>
	)
}
