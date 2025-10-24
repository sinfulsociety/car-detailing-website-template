"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, Phone } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format message for SMS
    const smsMessage = `New inquiry from ${name}%0APhone: ${phone}%0AMessage: ${message}`

    // Send via SMS to business phone
    window.open(`sms:+13055551234?body=${smsMessage}`, "_blank")

    setIsSent(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsSent(false)
      setMessage("")
      setName("")
      setPhone("")
    }, 2000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-7 right-6 z-[9999] min-w-[140px] md:min-w-[180px] px-5 py-2.5 md:px-6 md:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-2xl shadow-blue-500/50 flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70 ${
          isOpen ? "scale-95" : ""
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4 md:w-6 md:h-6 text-white" />
            <span className="text-white font-semibold text-xs md:text-base">Close</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
            <span className="text-white font-semibold text-xs md:text-base">Chat with us</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-14 right-4 md:bottom-24 md:right-6 z-[9999] w-[90vw] max-w-md bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-5 duration-300 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 md:p-6 rounded-t-2xl">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-lg">Chat with Us</h3>
                <p className="text-white/80 text-xs md:text-sm">We typically reply instantly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 md:p-6">
            {!isSent ? (
              <>
                <p className="text-white/70 mb-3 md:mb-6 leading-relaxed text-xs md:text-base">
                  Send us a message and we'll get back to you right away. Your message will be sent directly to our
                  team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
                  <div>
                    <label htmlFor="chat-name" className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="chat-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chat-phone"
                      className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="chat-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="(305) 555-1234"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chat-message"
                      className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="chat-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={3}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm md:text-base placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 md:py-3 md:px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm md:text-base rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </button>
                </form>

                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                  <a
                    href="tel:+13055551234"
                    className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-xs md:text-base"
                  >
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    Or call us: (305) 555-1234
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70">We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
