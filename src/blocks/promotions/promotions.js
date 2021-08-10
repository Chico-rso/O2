o2.promotions =
{
	slideIndex: 1,
	slides: [],
	dots: [],
	dot: 1,
	showSlides(n)
	{
		if(n > this.slides.length)
		{
			n = 1;
		}

		if(n < 1)
		{
			n = this.slides.length;
		}

		this.slides.forEach(item => item.style.display = 'none' );

		this.slides[n - 1].style.display = 'flex';

		this.slideIndex = n;

		this.useDots(n);
	},
	plusSlides(n)
	{
		this.showSlides(this.slideIndex + n);
		console.log(this.slides);
		console.log(this.slideIndex);
	},
	useDots(n)
	{
		let slider = document.querySelector('._promo__slider'),
		dots = slider.querySelectorAll('._dot');
		dots.forEach(el => el.classList.add('opacity'));
		console.log(dots[n]);
		dots[n - 1].classList.remove('opacity');
		
	},
	initSlider()
	{
		this.slides = document.querySelectorAll('.slider-item');
		this.showSlides(1);
	}
}