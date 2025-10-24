"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Mail, Send } from "lucide-react"

export default function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("emailPopupSeen")

    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("emailPopupSeen", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("[v0] Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Get Exclusive Detailing Tips</h3>
              <p className="text-white/70 text-pretty">
                Subscribe to our newsletter for expert car care advice, special offers, and detailing secrets.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Subscribe Now
              </button>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-white/50 text-center mt-4">We respect your privacy. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/70">You're now subscribed to our newsletter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
