o2.promotions =
{
	slideIndex:0,
	slides: [],
	dots: [],
	initSlider()
	{
		this.slides = document.querySelectorAll('.promo__slider-item');
		this.sliderWrapper = document.querySelector('.promo__slider-wraper');
		this.slidesField = document.querySelector('.promo__slider-list');
		this.width = this.sliderWrapper.offsetWidth;
		this.dots = document.querySelectorAll('._dot');
		this.addListener();
	},
	goToSlide(dir)
	{
		if(dir === "next")
		{
			if (this.slideIndex + 1 === this.slides.length)
			{
				this.slideIndex = 0;
			}
			else
			{
				this.slideIndex++;
			}
		}
		else
		{
			if (this.slideIndex -1 < 0)
			{
				this.slideIndex = this.slides.length - 1;
			}
			else
			{
				this.slideIndex--;
			}
		}
		this.position(this.slideIndex);

	},
	position(index)
	{
		let transform = 0;
		transform = (index * this.width) * -1;
		this.slidesField.style.transform = `translateX(${transform}px)`;
		this.dots.forEach((el, i) =>
		{
			if(i === index)
			{
				el.classList.add('active');
			}
			else
			{
				el.classList.remove('active');
			}
		})
	},
	addListener()
	{
		window.addEventListener('resize', () =>
		{
			this.position(this.slideIndex);
			this.width = this.sliderWrapper.offsetWidth;
		});
	},
}