// Global variables to hold state
let currentScreen = 1;
let selectedCardIndex = null;
let generatedMessage = "";
let uploadedImageURL = null;
let userData = { firstname: "", phone: "", recipient: "", recipientPhone: "" };

// Array of card image URLs (must match those in the HTML)
const cardOptions = [
  "https://w7.pngwing.com/pngs/608/286/png-transparent-playing-card-ace-of-hearts-suit-cards-love-rectangle-heart.png",
  "https://png.pngtree.com/png-vector/20230414/ourlarge/pngtree-uno-card-vector-png-image_6705734.png",
];

// Utility function to show a specific screen by its ID
function showScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((screen) => screen.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
  // Update currentScreen for reference
  currentScreen = parseInt(screenId.split("-")[1]);
}

// Screen 1: Welcome
function startProcess() {
  showScreen("screen-2");
}

// Screen 2: Card Selection
function selectCard(index) {
  selectedCardIndex = index;
  // Set preview image for Screen 3
  document.getElementById("cardPreview").src = cardOptions[index];
  showScreen("screen-3");
}

// Screen 3: Card Preview Navigation
function prevCard() {
  if (selectedCardIndex === null) return;
  selectedCardIndex =
    selectedCardIndex > 0 ? selectedCardIndex - 1 : cardOptions.length - 1;
  document.getElementById("cardPreview").src = cardOptions[selectedCardIndex];
}

function nextCard() {
  if (selectedCardIndex === null) return;
  selectedCardIndex =
    selectedCardIndex < cardOptions.length - 1 ? selectedCardIndex + 1 : 0;
  document.getElementById("cardPreview").src = cardOptions[selectedCardIndex];
}

// Screen 4: Open User Input Form
function openUserForm() {
  showScreen("screen-4");
}

// Screen 4: Submit User Input Form and Generate Message
function submitForm() {
  // Capture user data
  userData.firstname = document.getElementById("firstname").value;
  userData.recipient = document.getElementById("recipient").value;
  userData.recipientPhone = document.getElementById("recipientPhone").value;

  // Generate personalized message
  generatedMessage = `Hi ${userData.recipient}, Lorem Ipsum from ${userData.firstname}`;

  // Set generated message and card image for Screen 5
  document.getElementById("cardMessage").innerText = generatedMessage;
  document.getElementById("finalCardImage").src =
    cardOptions[selectedCardIndex];

  showScreen("screen-5");
}

// Screen 5: Final Submission (simulate image upload to ImageKit)
// Replace the placeholder URL with your actual upload integration when ready.
function finalSubmission() {
  uploadedImageURL = "https://your-imagekit-url.com/generated_card.jpg"; // Placeholder URL
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
  showScreen("screen-6");
}

// Screen 6: Download the generated image
function downloadImage() {
  if (uploadedImageURL) {
    const link = document.createElement("a");
    link.href = uploadedImageURL;
    link.download = "personalized_card.jpg";
    link.click();
  } else {
    alert("Image not uploaded yet.");
  }
}

// Expose functions to the global scope for inline event handlers
window.startProcess = startProcess;
window.selectCard = selectCard;
window.prevCard = prevCard;
window.nextCard = nextCard;
window.openUserForm = openUserForm;
window.submitForm = submitForm;
window.finalSubmission = finalSubmission;
window.downloadImage = downloadImage;
window.showScreen = showScreen;
