import React from 'react';
import {Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import {Instagram, Telegram, EmailOutlined, LocalPhoneOutlined, PlaceOutlined } from '@mui/icons-material'

import styles from './Footer.module.scss'

const socLinks = [
	{ icon: <Instagram fontSize="inherit" /> , link: 'https://www.instagram.com/clinika_zdorov_plus/' },
	{ icon: <Telegram fontSize="inherit" /> , link: 'https://t.me/clinica_zdorovie_plus' }
]

const contacts = [
	{ icon: <EmailOutlined fontSize="inherit" /> , link: 'mailto:zdorplus@bk.ru', text: 'zdorplus@bk.ru' },
	{ icon: <LocalPhoneOutlined fontSize="inherit" /> , link: 'tel:+79287997399', text: '+7 928 799 73 99' },
	{ icon: <PlaceOutlined fontSize="inherit" /> , link: 'https://goo.gl/maps/yixQAeUjahije3EX7', text: 'Назрань, ул. И.Зязикова, 30' },
]

const [patients, support] = [
	{
		capture: 'Пациентам',
		items: [
			{ title: 'О нас', link: 'about' },
			{ title: 'Услуги', link: 'services' },
			{ title: 'Врачи', link: 'doctors' },
			{ title: 'Вызов врача на дом', link: 'call-doctor' },
			{ title: 'Новости', link: 'news' },
		]
	},
	{
		capture: 'Поддержка',
		items: [
			{ title: 'Документация', link: 'documents' },
			{ title: 'Информация', link: 'information' },
			{ title: 'Вакансии', link: 'vacations' },
			{ title: 'Контакты', link: 'contacts' },
			{ title: 'Партнеры', link: 'partners' },
		]
	}
]

export const Footer:React.FC = (props) => {
	return (
		<footer>


			<Box sx={{
				background: '#F7F9FA',
				color: '#838282'
			}}>
				<Container>
					<Box sx={{
						pt: 8,
						pb: 4,
					}}>
						<Grid2 container spacing={3}>
							<Grid2 md={4}>
								<Box>
									<Link href='/'>Здоровье+</Link>
								</Box>
								<Box>
									<List>
										{contacts.map(contact => (
											<ListItem key={contact.link} disablePadding>
												<ListItemButton component="a" href={contact.link} disableGutters dense>
													<ListItemIcon sx={{
														minWidth: 28
													}}>
														{contact.icon}
													</ListItemIcon>
													<Typography sx={{
														fontSize: 14,
														fontWeight: 500
													}}>
														{contact.text}
													</Typography>
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</Box>
								<Box sx={{
									display: 'flex', gap: '5px'
								}}>
									{socLinks.map(item => (
										<Link href={item.link} key={item.link}>
											{item.icon}
										</Link>
									))}
								</Box>
							</Grid2>
							<Grid2 md={2}>
								<Typography variant="h4" className={styles.nav__title}>
									{patients.capture}
								</Typography>
								<ul>
									{patients.items.map(({ title, link}) => (
										<li key={link} className={styles.nav__item}>
											<Link href={link} key={link} className={styles.nav__link}>{title}</Link>
										</li>
									))}
								</ul>
							</Grid2>
							<Grid2 md={2}>
								<Typography variant="h4" className={styles.nav__title}>
									{support.capture}
								</Typography>
								<ul>
									{support.items.map(({ title, link}) => (
										<li key={link} className={styles.nav__item}>
											<Link href={link} key={link} className={styles.nav__link}>{title}</Link>
										</li>
									))}
								</ul>
							</Grid2>
							<Grid2 md={4}>
								<Typography variant="h4" className={styles.nav__title}>
									Рассылка
								</Typography>
								<Typography sx={{ fontSize: 14, fontWeight: 500, mb: 2}}>
									Получайте наши предложения и новости на свой почтовый ящик
								</Typography>

								<form>
									<div className={styles.inputGroup}>
										<input type="email" className={styles.formControl} placeholder="Enter email" />
											<div className={styles.inputGroupAppend}>
												<div className={styles.inputGroupText}>
													<input type="submit" value="Subscribe" />
												</div>
											</div>
									</div>
								</form>
							</Grid2>
						</Grid2>
					</Box>
				</Container>
			</Box>
		</footer>
	)
};
