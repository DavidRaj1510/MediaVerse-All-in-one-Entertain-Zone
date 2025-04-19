# MediaVerse 🌌📚🎬  
An immersive **full-stack** platform to explore **Comics, Anime, Novels, Magazines, Cartoons**, and more — with **Google Auth**, **Supabase**, and **OpenAI** integration.

> Built using **React + Supabase + OpenAI + Tailwind CSS**, deployed on **GitHub Pages**.

🌐 **Live Demo:** [Click to Visit](https://davidraj1510.github.io/MediaVerse-All-in-one-Entertain-Zone/)

---

## ✨ Features

- 🔐 **User Authentication** using **Supabase** (Email + Google OAuth)
- 🧠 **OpenAI API Integration** for recommendations, summaries, etc.
- ⚡ **Fast & Typed** frontend built with **React + TypeScript**
- 🧭 Seamless navigation with **React Router + HashRouter**
- 🎨 Beautiful UI using **Tailwind CSS + ShadCN UI**
- 💻 Backendless architecture powered by **Supabase**
- 📦 Deployed via **GitHub Pages** with proper routing support
- 🧩 Modular folder structure for scalable development

---

## 🛠️ Tech Stack

| Category      | Tech                                                  |
|---------------|--------------------------------------------------------|
| **Frontend**  | React, TypeScript, Vite, Tailwind CSS, ShadCN UI       |
| **Routing**   | React Router DOM with `HashRouter` (for GitHub Pages)  |
| **Icons**     | Lucide React                                           |
| **3D / Visual** | React Three Fiber (Three.js for React)              |
| **Backend**   | Supabase (Auth, DB, REST/Realtime)                     |
| **AI Integration** | OpenAI API (GPT for summaries, suggestions, etc.) |
| **Deployment**| GitHub Pages                                           |

---

## 🔐 Authentication

- Email/Password Sign Up & Sign In  
- Google OAuth via Supabase  
- Session persistence with Supabase Auth helpers  
- Auth state listener redirects automatically to homepage after login

---

## 🧠 OpenAI API Integration

Uses OpenAI's GPT API to:

- Summarize novels, episodes, or volumes
- Generate title descriptions
- Recommend similar content based on user interest

> You'll need to set your `OPENAI_API_KEY` in a `.env` file or in your Supabase function backend, if applicable.

---

## 🧭 Routing

- Uses **`HashRouter`** so navigation works correctly even on GitHub Pages
- Sample routes:
  - `/comics/:id`
  - `/anime/:id`
  - `/profile` (for authenticated users)
  - `/auth` (Login & Register)

---
