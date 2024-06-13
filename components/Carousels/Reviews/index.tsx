import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import styles from './reviews.module.scss'

const CarouselReviews = () => {
	const [sliderNav, setSliderNav] = React.useState<Slider | null>(null);
	const [slider, setSlider] = React.useState<Slider | null>(null);

	const settingsNav = {
		autoplay: true,
		draggable: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		asNavFor: slider,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 485,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		],
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		asNavFor: sliderNav,
	}

	const reviews = [
		{
			id: 1,
			image: 'https://placehold.co/900',
			name: 'Зухра Сурхоева',
			department: 'Кардиология',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 2,
			image: 'https://placehold.co/900',
			name: 'Зарета Оздоева',
			department: 'Хирургия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 3,
			image: 'https://placehold.co/900',
			name: 'Лейла Куштова',
			department: 'Неврология',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 4,
			image: 'https://placehold.co/900',
			name: 'Рая Костоева',
			department: 'Терапия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 5,
			image: 'https://placehold.co/900',
			name: 'Марет Галаева',
			department: 'Терапия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 6,
			image: 'https://placehold.co/900',
			name: 'Алина Галаева',
			department: 'Педиатрия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
	]
	return (
		<Grid2 container spacing={3} alignItems="center">
			<Grid2 md={5}>
				<Slider
					{...settings}
					ref={sliderRef => setSlider(sliderRef)}
				>
					{reviews.map(review => (
						<Box
							key={review.id}
							sx={{
								textAlign: 'right'
							}}
						>
							<Typography variant="h4">
								{review.name}
							</Typography>
							<Typography variant="h6" sx={{ color: '#8596A7', mt: 1, mb: 4 }}>
								{review.department}
							</Typography>
							<Typography sx={{ fontSize: 14 }}>
								{review.text}
							</Typography>
						</Box>
					))}
				</Slider>
			</Grid2>
			<Grid2 md={7}>
				<Slider
					{...settingsNav}
					ref={sliderNavRef => setSliderNav(sliderNavRef)}
					className={styles.reviewsSlider}
				>
					{reviews.map(review => (
						<div className="imageWrap" key={review.id}>
							<Box
								src={review.image}
								component="img"
								sx={{
									width: '100%',
									borderRadius: 'var(--border-radius)',
									minHeight: 420,
									objectFit: 'cover',
									padding: '0 5px',
								}}
							>
							</Box>
						</div>
					))}
				</Slider>
			</Grid2>
		</Grid2>
	)
}

export default CarouselReviews;
