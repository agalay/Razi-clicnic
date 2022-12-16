import Link from 'next/link'
import React from 'react'
import { Container, Navbar, Row, Nav } from 'react-bootstrap'
import styles from '../styles/Header.module.scss'

const menuItems = [
	{ title: 'Главная', href: '/' },
	{ title: 'О нас', href: '/about' },
	{ title: 'Услуги', href: '/services' },
	{ title: 'Врачи', href: '/doctors' },
	{ title: 'Контакты', href: '/contact' },
]

export default function Header() {
	return (
		<header className={styles.header}>
			<Container fluid>
				<Row>
					<div className="header-area">
						<div className="logo-area">
							<Link href='/'>Razi Clinic</Link>
						</div>
					</div>
					<Navbar expand={'lg'}>
						<Container>
							<Navbar.Collapse>
								<Nav>
									{menuItems.map(({ title, href }) => (
										<Link
											className='nav-link'
											href={href}
											key={href}
										>
											{title}
										</Link>
									))}
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Row>
			</Container>
		</header>
	)
}
