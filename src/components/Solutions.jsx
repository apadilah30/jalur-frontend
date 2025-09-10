import { useState, useEffect, useRef } from "react";
import { solutionsData } from "../data/solutions";
import { ArrowRight } from "lucide-react";
import accentImage from "../assets/images/accent.png";

export default function Solutions() {
	const [activeIndex, setActiveIndex] = useState(0);
	const touchStartY = useRef(null);
	const isDragging = useRef(false);
	const dragStartY = useRef(null);

	// 🔹 Auto slider every 5s
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// 🔹 Next & Prev
	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % solutionsData.length);
	};

	const handlePrev = () => {
		setActiveIndex((prev) =>
			prev === 0 ? solutionsData.length - 1 : prev - 1
		);
	};

	// 🔹 Swipe (mobile)
	const handleTouchStart = (e) => {
		touchStartY.current = e.touches[0].clientY;
	};

	const handleTouchEnd = (e) => {
		if (touchStartY.current === null) return;
		const touchEndY = e.changedTouches[0].clientY;
		const diff = touchStartY.current - touchEndY;

		if (diff > 50) {
			handleNext();
		} else if (diff < -50) {
			handlePrev();
		}
		touchStartY.current = null;
	};

	// 🔹 Drag (desktop)
	const handleMouseDown = (e) => {
		isDragging.current = true;
		dragStartY.current = e.clientY;
	};

	const handleMouseUp = (e) => {
		if (!isDragging.current || dragStartY.current === null) return;
		const dragEndY = e.clientY;
		const diff = dragStartY.current - dragEndY;

		if (diff > 50) {
			handleNext();
		} else if (diff < -50) {
			handlePrev();
		}

		isDragging.current = false;
		dragStartY.current = null;
	};

	return (
		<section className="relative bg-white py-12 md:py-24 overflow-hidden select-none">
			<img
				src={accentImage}
				alt="Accent"
				className="absolute top-0 right-0 w-auto h-[400px] object-scale-down opacity-30 md:opacity-100 pointer-events-none"
			/>
			<div className="max-w-[100vw] md:max-w-[90vw] mx-auto px-4 md:px-8 relative z-10">
				{/* Section Title */}
				<div className="mb-12">
					<h2 className="text-center text-base md:text-xl font-medium text-[#010205] mb-3">
						Our solutions
					</h2>
					<h3 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-[#010205] mb-4 leading-snug md:leading-tight max-w-6xl mx-auto">
						Five Integrated Software Systems for Large-Scale Natural Resource Industries
					</h3>
					<p className="text-center text-[#959595] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
						JALUR delivers a suite of five seamlessly connected software systems, designed to optimize operations, enhance efficiency, and support sustainable growth across the natural resource sector.
					</p>
				</div>

				{/* Main Content */}
				<div
					className="relative h-[560px] sm:h-[600px] md:h-[60vh] overflow-hidden cursor-grab active:cursor-grabbing"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
				>
					{/* Wrapper untuk animasi slide vertical */}
					<div
						className="transition-transform duration-1000 ease-in-out h-full"
						style={{
							transform: `translateY(-${activeIndex * 100}%)`,
						}}
					>
						{solutionsData.map((solution, idx) => (
							<div
								key={idx}
								className={`flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 w-full h-[560px] sm:h-[500px] md:h-[60vh] flex-shrink-0 px-2 sm:px-4 transition-opacity duration-1000 ${activeIndex === idx ? "opacity-100" : "opacity-0"
									}`}
							>
								{/* Left: Image */}
								<div className="w-full md:w-1/2 flex justify-center md:justify-start">
									<img
										src={solution.image}
										alt={solution.title}
										className="w-full h-[200px] sm:h-[250px] md:h-full object-cover rounded-lg shadow-lg"
									/>
								</div>

								{/* Right: Content */}
								<div className="w-full md:w-1/2 flex flex-col justify-start items-start text-left">
									<img
										src={solution.logo}
										alt={solution.title}
										className="h-10 sm:h-12 object-contain mb-3"
									/>
									<h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#010205] mb-2 leading-snug">
										{solution.title}
									</h4>
									<p className="text-[#959595] text-sm sm:text-base md:text-lg mb-4 md:mb-6">
										{solution.description}
									</p>

									{/* Learn More Button */}
									<button className="flex items-center gap-2 bg-white border border-[#F28101] text-[#F28101] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-[#FFF3E0] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
										Learn more
										<ArrowRight
											size={16}
											className="transition-transform duration-300 group-hover:translate-x-1"
										/>
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Number navigation */}
					<div className="absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-2 items-center md:items-end w-full md:w-auto bottom-2 md:bottom-auto justify-between md:justify-center">
						{solutionsData.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setActiveIndex(idx)}
								className={`text-sm sm:text-base font-bold px-2 py-1 rounded transition-all duration-300 ease-in-out hover:scale-110 transform
									${activeIndex === idx
										? "text-[#F28101]"
										: "text-[#CFCFCF] hover:text-[#F28101]"
									}`}
								aria-label={`Go to solution ${idx + 1}`}
							>
								{`0${idx + 1}`}
							</button>
						))}
					</div>
				</div>
			</div>
			<img
				src={accentImage}
				alt="Accent"
				className="absolute bottom-0 left-0 w-auto h-[100px] md:h-[500px] rotate-180 object-scale-down opacity-100 pointer-events-none z-10"
			/>
		</section>
	);
}
