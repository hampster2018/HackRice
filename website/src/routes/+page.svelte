<script lang='ts'>
	let show_second_section = false;
	let second_section: HTMLDivElement | null = null;	
	function scroll_second() {
		// second_section?.scrollIntoView({ behavior: 'smooth' });
		doScrolling(second_section, 2000);
	}

	function getElementY(element) {
		return window.pageYOffset + element.getBoundingClientRect().top
	}

	function doScrolling(element, duration) {
		var startingY = window.pageYOffset
		var elementY = getElementY(element)
		// If element is close to page's bottom then window will scroll only to some position above the element.
		var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
		var diff = targetY - startingY
		// Easing function: easeInOutCubic
		// From: https://gist.github.com/gre/1650294
		var easing = function (/** @type {number} */ t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
		/**
		 * @type {number}
		 */
		var start
		
		if (!diff) return
		
		// Bootstrap our animation - it will get called right before next frame shall be rendered.
		window.requestAnimationFrame(function step(timestamp) {
			if (!start) start = timestamp
			// Elapsed miliseconds since start of scrolling.
			var time = timestamp - start
			// Get percent of completion in range [0, 1].
			var percent = Math.min(time / duration, 1)
			// Apply the easing.
			// It can cause bad-looking slow frames in browser performance tool, so be careful.
			percent = easing(percent)
			
			window.scrollTo(0, startingY + diff * percent)
			
			// Proceed with animation as long as we wanted it to.
			if (time < duration) {
				window.requestAnimationFrame(step)
			}
		})
	}
</script>

<main data-theme="light">

	
	<div id="navbar">
		<h1 id="logo">Greenhouse</h1>
		<div id="nav-links">
			<div id="nav-link">Home</div>
			<div id="spacer" style="width: 20px; height: 1px;"></div>
			<div id="nav-link" on:click={scroll_second}>Idea</div>
		</div>
	</div>

	<div id="landing-screen">
		<h1 id="hero-text">Turn carbon emissions into <b id="super-text">carbon points</b> with the tip of your finger.</h1>
		<button on:click={scroll_second}>Find out how</button>
	</div>
	
	<div id="second-section" bind:this={second_section}>
		<!-- idea was to integrate helping people be carbon neutral without being intrusive into their lifestyle (one of the main issues with carbon activism is that it comes off as agressive, so we wanted a simple way for people to  help conserve our planet) the idea of making incremental change instead of fixing the world overnight -->
		<div id="half-page">
			<h1>What we <b id="brilliant">imagined</b></h1>			
			<p>
				When we thought of greenhouse gases and becoming CO2 negative, we thought
				of agressive activism. However, while this certainly has a place in the world,
				the average American probably would want to help the environment as best
				as they can, but they don't know how.
				
				<br><br>

				Using the points that users earn, they can then redeem "cash match" rewards
				for charity donations, or even use them to purchase carbon offsets. This
				allows users to get even closer to being carbon neutral, and it's all
				possible through their own mobile device.
			</p>
		</div>
		<div id="half-page">
			<h1>What we <b id="brilliant2">built</b></h1>
			<p>
				To rememdy this, we an intuitive and stunning productivity app that allows
				users to lessen their carbon footprint by using a point system. Users can
				earn points by completing tasks in ways that are great for the environment,
				such as biking to commute or doing laundry at outside of peak hours.
				
				<br><br>

				For example, simply by scheduling these tasks to reduce the overrall drain on the grid during
				peak hours we can greatly increase the utilization of renewable energy sources and reduce
				the amount of energy that needs to be generated short-term by fossil fuels.
			</p>
		</div>
	</div>
	
</main>

<style>

	#half-page p {
		color: rgb(234, 232, 232);
	}

	#brilliant {
		background: linear-gradient(to right, #00D4B0, #2d7af6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
	#brilliant2 {
		background: linear-gradient(to right, #00D4B0, #2d7af6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	#half-page {
		min-height: 100vh;
		width: 100%;
		background-color: #11191f;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding-left: 5%;
		padding-right: 5%;
	}
	
	#half-page h1 {
		color: white;
		font-size: 3rem;
		font-weight: 700;
	}

	#second-section {
		height: 100vh;
		width: 100%;
		background-color: #11191f;
		display: flex;
		flex-direction: row;
	}

	button {
		position: absolute;
		width: 15%;
		right: 20%;
		height: 12%;
		top: 65%;
		
		background-color: #11191f;
		border-color: rgb(218, 218, 218);
		transition: 0.2s;
		animation: 3s fadein;
	}
	
	@keyframes fadein {
		from { opacity: 0; }
		to   { opacity: 1; }
	}
	
	button:hover {
		transform: scale(1.025);
		border-color: #01d3b1;
		/* color: #01d3b1; */
	}

	#nav-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 25px;
	}

	#nav-link {
		margin: 0;
		margin-right: 25px;
		font-size: 1.5rem;
		font-weight: 600;
		color: white;		
		cursor: pointer;
	}

	#navbar {
		position: aboslute;
		top: 0;
		left: 0;
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	

	#logo {
		margin: 0;
		margin-left: 25px;
		font-size: 2rem;
		font-weight: 700;
		color: white;
	}

	main {
		/* do a linear gradient of the black background */
		min-height: 100vh;
		overflow-x: hidden;
		background: linear-gradient(center, #201e1e, #000000);
		display: flex;
		flex-direction: column;
	}
	
	#landing-screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 90vh;
		width: 100%;
	}
	

	/* <LinearGradient
	colors={['#00D4B0', '#146CF6']}
	start={{ x: 1, y: 1 }}
	end={{ x: 0, y: 0.33 }}
	style={{ flex: 1 }}
	/> */
	
	#hero-text {
		font-size: 3rem;
		font-weight: 700;
		margin-left: 8%;
		margin-bottom: 5%;
		color: rgb(219, 219, 219);
		width: 50%;
	}
	
	#super-text {
		background: linear-gradient(to right, #00D4B0, #2d7af6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 650;
	}
	
	/* #hero-div {
	} */
	
	/* #under-text {
		margin-left: 10%;
		color: white;
		font-size: 2rem;
		font-weight: 400;
	} */
</style>