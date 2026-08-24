<div align="center">
  
  <img src="public/assets/favicon.svg" alt="Ayush Mishra" width="120" height="120" style="border-radius: 28px; box-shadow: 0 8px 24px rgba(10, 132, 255, 0.25);" />

  # Ayush Mishra
  ### **Computer Scientist & AI Researcher**
  *Bengaluru, Karnataka, India • SVNIT Surat Alumnus*

  [![Live Website](https://img.shields.io/badge/Live_Portfolio-ayush--mishra--portfolio.pages.dev-4D74EB?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://ayush-mishra-portfolio.pages.dev)
  [![GitHub](https://img.shields.io/badge/GitHub-ayush190511-181717?style=for-the-badge&logo=github)](https://github.com/ayush190511)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush_Mishra-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ayush190511/)
  [![Live Utility](https://img.shields.io/badge/Live_App-allagecalculators.com-00C7BE?style=for-the-badge&logo=googlechrome&logoColor=white)](https://allagecalculators.com)

</div>

---

## 👨‍💻 About Me

I am a **Computer Scientist & AI Researcher** based in Bengaluru, specializing in **Multimodal Deep Learning**, **Vision Transformers**, and **High-Performance Machine Learning Systems**.

- 🏛️ **Academic Researcher & Faculty Mentor**: Department of Information Science and Engineering (ISE), Dayananda Sagar College of Engineering (DSCE), Bengaluru (July 20, 2026 – Present).
- 🎓 **M.Tech in Computer Science and Engineering (Data Science)**: Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat (2024–2026) — **CGPA: 8.42 / 10**.
- 🎓 **B.Tech in Computer Science and Engineering**: Deenbandhu Chhoturam University of Science and Technology (DCRUST), Sonipat (2020–2024) — **CGPA: 7.81 / 10**.
- 🏆 **GATE CS 2024 Qualified** (Score: 514).

---

## 🔬 Core Research Spotlight

### **Cross-Modal Gated Fusion for Multimodal Fake News Detection**
Combating digital misinformation by integrating textual semantics (**DeBERTa / RoBERTa / BERT**) and visual feature representations (**Swin Transformer / CLIP-ViT**) with a novel **Gated Cross-Modal Fusion Architecture**.

```
Text Input  ──► [ DeBERTa / BERT ] ──┐
                                      ├──► [ Novel Gated Fusion ] ──► [ Classifier ] ──► Real / Fake Verdict
Image Input ──► [ Swin / CLIP-ViT ] ─┘        g = σ(W_g · [h_t, h_v])
```

#### 📊 Empirical Benchmark Results:
| Benchmark Dataset | Accuracy | Macro F1 Score | Key Highlight |
| :--- | :---: | :---: | :--- |
| **SPECTRA Dataset** | **96.66%** | **96.75%** | Peak state-of-the-art multimodal veracity learning |
| **Fakeddit Dataset** | **91.15%** | **89.78%** | +4.8% gain over single-modality baseline |

---

## 📚 Publications

**A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers**  
*Ayush Mishra, et al.*  
Accepted and presented at the **International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)** *(Tentative Publication: December 2026, IEEE / Springer)*.

```bibtex
@inproceedings{mishra2026multimodal,
  title={A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers},
  author={Mishra, Ayush and others},
  booktitle={Proceedings of the International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)},
  year={2026},
  note={Accepted and Presented; Forthcoming in December 2026},
  organization={IEEE/Springer}
}
```

---

## 💻 Featured Projects & Systems

1. **[Multimodal Fake News Detection](https://github.com/ayush190511)** — PyTorch deep learning framework implementing gated cross-attention across DeBERTa and Swin Transformer encoders.
2. **[End-to-End MLOps Disease Pipeline](https://github.com/ayush190511)** — Computer vision image classification system achieving **96.55% CV accuracy** with **DVC**, **MLflow**, **Docker**, and **GitHub Actions CI/CD**.
3. **[Real-Time Customer Churn & Score Engine](https://github.com/ayush190511)** — High-throughput ML inference engine with **FastAPI**, **SHAP** local/global interpretability, and sub-50ms latency.
4. **[AllAgeCalculators.com](https://allagecalculators.com)** — Live chronological analytics web platform engineered for microsecond execution and algorithmic precision.

---

## 🛠️ Technical Stack & Expertise

- **Deep Learning & Multimodal AI**: PyTorch, Hugging Face Transformers, DeBERTa, BERT, RoBERTa, Swin Transformer, Vision Transformers (ViT), CLIP, CNN, Cross-Modal Gated Fusion.
- **Data Science & ML**: Pandas, NumPy, Scikit-learn, XGBoost, CatBoost, Statistical Hypothesis Testing, Feature Engineering.
- **MLOps & Cloud**: MLflow, DVC (Data Version Control), Docker, FastAPI, REST APIs, GitHub Actions CI/CD, AWS (EC2, S3), Streamlit.
- **Languages**: Python, SQL, C++, C, JavaScript, HTML5/CSS3.
- **Core Algorithms**: 250+ DSA problems solved, GATE Qualified (CS Score 514).

---

## 🌐 Website Architecture (Astro Multi-Page)

```
├── public/
│   ├── assets/
│   │   ├── favicon.svg       # Dual-wing multimodal fusion favicon
│   │   ├── fusion-arch.svg   # Gated cross-modal architecture SVG
│   │   └── logo2.jpeg        # Profile portrait
│   ├── styles.css            # Editorial typography & theme engine
│   └── script.js             # Theme toggle, BibTeX modal, architecture tabs
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Shared site shell, header & footer
│   └── pages/
│       ├── index.astro       # / (About / Concise Bio)
│       ├── research.astro    # /research (IC2NS2 Paper & Benchmarks)
│       ├── projects.astro    # /projects (Flagship Systems & Pipelines)
│       ├── skills.astro      # /skills (Categorized Toolkit Matrix)
│       ├── education.astro   # /education (Timeline & Appointments)
│       └── contact.astro     # /contact (Inquiry Form & Contacts)
└── astro.config.mjs
```

### ⚡ Quick Start Locally

```bash
# Clone the repository
git clone https://github.com/ayush190511/MyPortfolio.git

# Navigate to project directory
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## 📬 Contact & Academic Collaboration

- 📍 **Affiliation**: Department of Information Science and Engineering, Dayananda Sagar College of Engineering (DSCE), Bengaluru, India.
- 🔗 **LinkedIn**: [linkedin.com/in/ayush190511](https://www.linkedin.com/in/ayush190511/)
- 💻 **GitHub**: [github.com/ayush190511](https://github.com/ayush190511)
- 🌐 **Website**: [ayush-mishra-portfolio.pages.dev](https://ayush-mishra-portfolio.pages.dev)

---
<div align="center">
  <sub>© 2026 Ayush Mishra • Computer Scientist & AI Researcher</sub>
</div>
