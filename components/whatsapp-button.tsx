"use client"

export default function WhatsAppButton() {
  const phoneNumber = "+17722721699"
  const message = "Hello! I'm interested in learning more about your mental health services."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce"
      style={{
        boxShadow: "0 8px 32px rgba(34, 197, 94, 0.4)",
      }}
      aria-label="Contact via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 32 32"
        className="h-7 w-7"
      >
        <path d="M16.003 3c-7.174 0-13 5.827-13 13 0 2.294.6 4.542 1.747 6.516L3 29l6.7-1.747a12.95 12.95 0 0 0 6.303 1.603h.001c7.174 0 13-5.827 13-13s-5.826-12.856-13-12.856zm.001 23.262h-.001a11.306 11.306 0 0 1-5.762-1.58l-.413-.245-3.981 1.037 1.062-3.878-.268-.398A11.278 11.278 0 0 1 4.74 16c0-6.22 5.06-11.28 11.263-11.28 3.014 0 5.847 1.175 7.981 3.309a11.2 11.2 0 0 1 3.299 7.972c0 6.22-5.06 11.261-11.279 11.261zm6.188-8.46c-.338-.169-2.002-.987-2.312-1.097-.31-.115-.537-.169-.762.17-.225.337-.875 1.097-1.074 1.322-.2.225-.394.255-.732.085-.337-.17-1.425-.525-2.713-1.675-1.003-.894-1.68-1.997-1.877-2.335-.2-.337-.021-.519.15-.688.155-.154.337-.394.507-.592.169-.2.225-.338.338-.563.112-.225.056-.422-.028-.591-.084-.169-.762-1.84-1.044-2.517-.275-.663-.555-.572-.762-.582l-.649-.012c-.225 0-.591.084-.9.422-.309.338-1.182 1.154-1.182 2.815 0 1.661 1.21 3.266 1.378 3.494.169.225 2.381 3.63 5.77 5.086.807.348 1.437.556 1.928.712.81.258 1.547.222 2.129.135.65-.097 2.002-.819 2.285-1.61.281-.787.281-1.463.197-1.61-.084-.144-.31-.23-.65-.398z" />
      </svg>
    </button>
  )
}
