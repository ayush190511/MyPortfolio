<div align="center">
  
  <img src="assets/mypic.jpg" alt="Ayush Mishra" width="130" height="130" style="border-radius: 50%; border: 3px solid #0A84FF; object-fit: cover;" />

  # Ayush Mishra
  ### **Multimodal AI Researcher & Computer Scientist**
  *Bengaluru, Karnataka, India • SVNIT Surat Alumnus*

  [![GitHub](https://img.shields.io/badge/GitHub-ayush190511-181717?style=for-the-badge&logo=github)](https://github.com/ayush190511)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush_Mishra-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ayush190511/)
  [![Email](https://img.shields.io/badge/Email-ayushmishra642001%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ayushmishra642001@gmail.com)
  [![Live Utility](https://img.shields.io/badge/Live_App-allagecalculator.com-00C7BE?style=for-the-badge&logo=googlechrome&logoColor=white)](https://allagecalculator.com)

</div>

---

## 👨‍💻 About Me

I am an **Artificial Intelligence Researcher & Computer Scientist** based in Bengaluru, specializing in **Multimodal Deep Learning**, **Cross-Modal Representation Learning**, and **Computer Vision & NLP Transformers (Vision Transformers, Swin, CLIP-ViT, DeBERTa, BERT)**. Additionally, I mentor and instruct students in machine learning and data science.

- 🎓 **M.Tech in Computer Science and Engineering (Specialization in Data Science)**  
  *Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat (2024–2026)* — **CGPA: 8.42 / 10**
- 🎓 **B.Tech in Computer Science and Engineering**  
  *Deenbandhu Chhoturam University of Science and Technology (DCRUST), Sonipat (2020–2024)* — **CGPA: 7.81 / 10**

---

## 🔬 Core Research Spotlight

### **Cross-Modal Gated Fusion for Multimodal Fake News Detection**
Combating digital misinformation by integrating textual semantics (**DeBERTa / RoBERTa / BERT**) and visual feature representations (**Swin Transformer / CLIP-ViT**) with a novel **Gated Cross-Modal Fusion Architecture**.

```
Text Input ──► [ DeBERTa / BERT ] ──┐
                                     ├──► [ Novel Gated Fusion ] ──► [ Classifier ] ──► Real / Fake Verdict
Image Input ─► [ Swin / CLIP-ViT ] ─┘        g = σ(W_g · [h_t, h_v])
```

#### 📊 Benchmark Results:
| Benchmark Dataset | Accuracy | Macro F1 Score | Key Highlight |
| :--- | :---: | :---: | :--- |
| **SPECTRA Dataset** | **96.66%** | **96.75%** | Peak state-of-the-art multimodal veracity learning |
| **Fakeddit Dataset** | **91.15%** | **89.78%** | +4.8% gain over single-modality baseline |

---

## 📚 Publications

**A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers**  
*Ayush Mishra, et al.*  
Accepted and presented at the **International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)**.

```bibtex
@inproceedings{mishra2026multimodal,
  title={A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers},
  author={Mishra, Ayush and others},
  booktitle={Proceedings of the International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)},
  year={2026},
  organization={IEEE/Springer}
}
```

---

## 💻 Featured Projects & Systems

1. **[AllAgeCalculator.com](https://allagecalculator.com)** — Live chronological and date analytics web application engineered for speed, clean UX, and algorithmic precision.
2. **Cross-Modal Gated Misinformation Detector** — PyTorch deep learning framework implementing gated cross-attention across DeBERTa and Swin Transformer encoders.
3. **Coccidiosis Disease Classification Pipeline** — Computer vision image classification system achieving **96.55% accuracy** and 0.12 validation loss with **DVC** and **GitHub Actions CI/CD**.
4. **Student Math Score Regression & MLOps** — End-to-end regression benchmarking across 8 models (XGBoost, CatBoost, Random Forest, R² > 90%) tracked with **MLflow + DagsHub**, explained via **SHAP**, deployed via **Streamlit**.

---

## 🛠️ Technical Stack & Expertise

- **Deep Learning & Multimodal AI**: PyTorch, Hugging Face Transformers, DeBERTa, BERT, RoBERTa, Swin Transformer, Vision Transformers (ViT), CLIP, CNN, LSTM.
- **Data Science & Machine Learning**: Pandas, NumPy, Scikit-learn, XGBoost, CatBoost, Statistical Analysis, EDA, Feature Engineering.
- **MLOps & Infrastructure**: MLflow, DVC (Data Version Control), DagsHub, SHAP, GitHub Actions CI/CD, Streamlit, Git, Docker.
- **Languages**: Python, SQL, C++, C, JavaScript, HTML5, CSS3.
- **Problem Solving**: 250+ DSA problems solved on GeeksforGeeks, GATE 2024 (CS Score 514), Amazon ML Challenge 2025 Participant.

---

## 🏫 Academic Mentorship & Guidance

- **Academic Mentorship**: Department of Information Science and Engineering (ISE), DSCE Bengaluru.
- **Core Instruction & Mentorship Areas**:
  - Data Science & Machine Learning Foundations
  - Multimodal Deep Learning & Transformers
  - Natural Language Processing & Computer Vision
  - Data Structures, Algorithms & Optimization

---

## 🌐 Website & Repository Architecture

This portfolio website is designed with an **Apple-inspired aesthetic** (frosted glassmorphism, dynamic Dark/Light themes, interactive architecture inspector, and instant BibTeX modal export).

```
├── index.html              # Main semantic webpage with JSON-LD Schema.org metadata
├── styles.css              # Apple design system, custom properties, responsive styles
├── script.js               # Theme engine, interactive visualizer, filters, toasts
├── assets/                 # SVGs, icons, diagrams & personal portrait
│   ├── mypic.jpg           # Profile portrait
│   ├── favicon.svg         # Crisp Apple squircle favicon with neural monogram
│   ├── logo.svg            # Official branding logo
│   ├── fusion-arch.svg     # Multimodal architecture diagram
│   └── academic-badge.svg  # Academic researcher badge
└── README.md               # Repository documentation
```

### ⚡ Quick Start Locally

```bash
# Clone the repository
git clone https://github.com/ayush190511/MyPortfolio.git

# Navigate to project directory
cd MyPortfolio

# Launch local server (Python)
python -m http.server 3000

# Open in browser
# http://localhost:3000
```

---

## 📬 Contact & Academic Collaboration

- 📍 **Office**: Department of Information Science and Engineering, Dayananda Sagar College of Engineering (DSCE), Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka 560078, India.
- 📧 **Email**: [ayushmishra642001@gmail.com](mailto:ayushmishra642001@gmail.com)
- 📱 **Phone**: +91-9992619779
- 🔗 **LinkedIn**: [linkedin.com/in/ayush190511](https://www.linkedin.com/in/ayush190511/)
- 💻 **GitHub**: [github.com/ayush190511](https://github.com/ayush190511)

---
<div align="center">
  <sub>© 2026 Ayush Mishra. Crafted with precision & modern web standards.</sub>
</div>
