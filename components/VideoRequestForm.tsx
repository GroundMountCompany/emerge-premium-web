"use client"

import { useState } from "react"

export default function VideoRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    aesthetic: "",
    tone: "",
    length: "15 seconds",
    scene1: "",
    scene2: "",
    scene3: "",
    scene4: "",
    script: "",
    referenceLink: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/send-video-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    alert("Your idea has been sent!")
  }

  return (
    <section id="video-idea-form" className="bg-[#fff] py-24 px-6 md:px-12 text-center text-[#333]">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Tell Us Your Video Idea</h2>
        <p className="text-center text-gray-500">We'll create a free preview with a watermark. Pay only if you love it.</p>

        <input name="name" onChange={handleChange} placeholder="Your Name" className="input" required />
        <input name="email" onChange={handleChange} placeholder="Your Email" className="input" type="email" required />
        <input name="company" onChange={handleChange} placeholder="Company Name" className="input" />
        <input name="industry" onChange={handleChange} placeholder="Industry / Niche" className="input" />

        <select name="aesthetic" onChange={handleChange} className="input">
          <option value="">Preferred Aesthetic</option>
          <option value="Realistic">Realistic</option>
          <option value="Cartoon / Illustrated">Cartoon / Illustrated</option>
          <option value="Surreal / Abstract">Surreal / Abstract</option>
          <option value="Not sure">Not sure yet</option>
        </select>

        <select name="tone" onChange={handleChange} className="input">
          <option value="">Tone</option>
          <option value="Bold">Bold</option>
          <option value="Funny">Funny</option>
          <option value="Serious">Serious</option>
          <option value="Mysterious">Mysterious</option>
          <option value="Corporate">Corporate</option>
          <option value="Other">Other</option>
        </select>

        <select name="length" onChange={handleChange} className="input">
          <option value="15 seconds (Free w/ watermark)">15 seconds (Free w/ watermark)</option>
          <option value="30 seconds" disabled>
            30 seconds (Paid)
          </option>
          <option value="1 minute" disabled>
            1 minute (Paid)
          </option>
          <option value="Other" disabled>
            Other (Paid)
          </option>
        </select>

        <textarea name="scene1" onChange={handleChange} placeholder="Scene 1" className="input" />
        <textarea name="scene2" onChange={handleChange} placeholder="Scene 2" className="input" />
        <textarea name="scene3" onChange={handleChange} placeholder="Scene 3" className="input" />
        <textarea name="scene4" onChange={handleChange} placeholder="Scene 4" className="input" />
        <textarea name="script" onChange={handleChange} placeholder="Paste your script here (optional)" className="input" rows={4} />
        <input name="referenceLink" onChange={handleChange} placeholder="Link to a reference video (optional)" className="input" />

        <button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition"
          style={{ color: 'white' }}
        >
          Generate My Free Concept Video
        </button>
      </form>
    </section>
  )
} 