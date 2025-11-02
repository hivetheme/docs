---
layout: home
title: Knowledge Base
---

# Knowledge Base

Welcome to the CodexShaper Knowledge Base.  
Use the search below or explore projects and FAQs.

---

<div class="kb-search">
  <DocSearch />
</div>

## 🚀 Projects

<script setup>
const data =
  {
    'Laravel': [
      {
        title: "Edulab LMS",
        description: "Complete guide for the Edulab LMS.",
        link: "/edulab/overview"
      },
    ],
  "WordPress": [
    {
      title: "Domio Theme",
      description: "Complete guide for the Domio WordPress theme.",
      link: "/domio/overview"
    },
    {
      title: "Transova Theme",
      description: "Complete guide for the Transova WordPress theme.",
      link: "/transova/overview"
    },
  ]
}
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  <div v-for="(projects, category) in data" :key="category">
    <h2 class="text-xl font-bold mb-2">{{ category }}</h2>
    <div v-for="(project, index) in projects" :key="index" class="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="mb-4">{{ project.description }}</p>
      <a :href="project.link" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Read Docs →
      </a>
    </div>
  </div>
</div>

## 📌 Frequently Asked Questions

<details>
  <summary><strong>How do I install a theme?</strong></summary>
  <p>Download your theme ZIP, go to <em>Appearance → Themes → Add New</em>, and upload it. After activation, install the required plugins.</p>
</details>

<details>
  <summary><strong>Where can I find the demo import?</strong></summary>
  <p>Navigate to <em>Appearance → Import Demo Data</em> to import predefined layouts and settings.</p>
</details>

<details>
  <summary><strong>Can I use WooCommerce with my theme?</strong></summary>
  <p>Yes! Just install and activate the WooCommerce plugin to enable shop functionality.</p>
</details>

<style>
details {
  margin: 0.5rem 0;
  padding: 0.75rem;
  border: 1px solid #eee;
  border-radius: 6px;
}
details summary {
  cursor: pointer;
  font-weight: 600;
}
</style>
