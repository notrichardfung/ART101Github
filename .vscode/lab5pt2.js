
// lab5pt2.js - Climate Mood Simulator

// Environment presets (array of objects)
const environments = [
	{ name: "Sunny Meadow", color: "#FFEDD5", mood: "cheerful" },
	{ name: "Rainy Alley", color: "#CBD5E1", mood: "melancholic" },
	{ name: "Foggy Morning", color: "#E6E6E6", mood: "calm" },
	{ name: "Neon Night", color: "#1B2430", mood: "energetic" }
];

// state object that could be influenced by previous labs
let player = {
	name: "Creator",
	prefers: ["Sunny Meadow", "Neon Night"]
};

/**
 * changeEnvironment(stateIndex, intensity)
 * - stateIndex: index into environments array
 * - intensity: number 0..10 that affects how pronounced the change is
 * The function uses conditionals to decide what to change and then updates the DOM.
 */
function changeEnvironment(stateIndex, intensity) {
	// clamp inputs
	stateIndex = Math.max(0, Math.min(environments.length - 1, Math.floor(stateIndex)));
	intensity = Math.max(0, Math.min(10, Math.floor(intensity)));

	const env = environments[stateIndex];

	// conditional: if intensity is high, invert text color for contrast
	const darkText = intensity < 6;
	const textColor = darkText ? "#111" : "#fff";

	// (player energy removed) — environment may still influence player preferences in future

	// set body background to a blended color depending on intensity
	// simple approach: mix env.color with white/dark depending on intensity
	const overlay = intensity / 10; // 0..1

	// create a lightweight blending by applying rgba overlay via inline style
	document.body.style.backgroundColor = env.color;
	document.body.style.color = textColor;

	// update output with details
	const message = `<h2>${env.name}</h2>
		<p>Mood: ${env.mood} — intensity: ${intensity}</p>`;

	$("#output").html(message);

	// small visual pulse depending on intensity
	const scale = 1 + overlay * 0.03;
	document.body.style.transition = "background-color 0.6s ease, color 0.3s ease, transform 0.15s";
	document.body.style.transform = `scale(${scale})`;
	setTimeout(() => (document.body.style.transform = "scale(1)"), 180);
}

// wire the button: choose a random environment and intensity when clicked
$(document).ready(function () {
	$("#change-env").click(function () {
		const randomState = Math.floor(Math.random() * environments.length);
		const randomIntensity = Math.floor(Math.random() * 11); // 0..10
		changeEnvironment(randomState, randomIntensity);
	});

	// initialize view
	changeEnvironment(0, 4);
});
