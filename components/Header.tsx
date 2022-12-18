import Link from 'next/link'
import React from 'react'
import { Col, Container, Navbar, Row, Nav } from 'react-bootstrap'

const menuItems = [
	{ title: 'Главная', href: '/' },
	{ title: 'О нас', href: '/about' },
	{ title: 'Услуги', href: '/services' },
	{ title: 'Врачи', href: '/doctors' },
	{ title: 'Контакты', href: '/contact' },
]

export default function Header() {
	return (
		<header className='py-5'>
			<Container>
				<Row className='align-items-center'>
					<Col md={2}>
						<Link href='/'>Razi Clinic</Link>
					</Col>
					<Col md={8}>
						<Navbar expand={'lg'}>
							<Container>
								<Navbar.Collapse className='justify-content-center'>
									<Nav>
										{menuItems.map(({ title, href }) => (
											<li className='nav-item'>
												<Link className='nav-link' href={href}>{title}</Link>
											</li>
										))}
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</header>
	)
}
