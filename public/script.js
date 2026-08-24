// Immediate theme apply to prevent flash
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

function initPortfolio() {
  // 1. THEME ENGINE (Dark / Light Mode)
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeColorMeta = document.getElementById('themeColorMeta');

  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#111318' : '#fdfdfd');
    }
  }

  // 2. MOBILE NAVIGATION MENU
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileNavToggle && navLinks) {
    const toggleMenu = (forceState) => {
      const isOpen = typeof forceState === 'boolean' ? forceState : !navLinks.classList.contains('mobile-open');
      navLinks.classList.toggle('mobile-open', isOpen);
      mobileNavToggle.classList.toggle('open', isOpen);
      mobileNavToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    mobileNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        toggleMenu(false);
      }
    });
  }

  // Smooth scroll offset for all internal hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (targetId && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 3. FLAGSHIP RESEARCH ARCHITECTURE MODAL & TABS
  const archModal = document.getElementById('archModal');
  const openArchModalBtns = document.querySelectorAll('.open-arch-modal-btn');
  const closeArchModalBtn = document.getElementById('closeArchModalBtn');
  const closeArchModalBtn2 = document.getElementById('closeArchModalBtn2');

  const archTabs = document.querySelectorAll('.arch-tab-btn');
  const panelTitle = document.getElementById('panelTitle');
  const panelDesc = document.getElementById('panelDesc');
  const panelDetails = document.getElementById('panelDetails');

  const archData = {
    all: {
      title: 'Unified Multimodal Misinformation Framework',
      desc: 'Real-world fake news leverages both misleading imagery and biased linguistic phrasing. Our framework extracts deep contextual embeddings from text using DeBERTa/RoBERTa and visual feature hierarchies with Swin Transformer & CLIP-ViT.',
      details: [
        { label: 'Text Encoders:', val: 'DeBERTa-v3, RoBERTa, BERT' },
        { label: 'Vision Encoders:', val: 'Swin-B, CLIP-ViT-B/16' },
        { label: 'Fusion Mechanism:', val: 'Gated Unit: g = σ(W_g · [h_t; h_v])' },
        { label: 'Loss Objective:', val: 'Cross-Entropy with Label Smoothing' }
      ]
    },
    text: {
      title: 'Text Representation Stream (DeBERTa / BERT)',
      desc: 'Processes the textual article headline and body. DeBERTa-v3 disentangles content and positional vectors using relative position matrices, extracting fine-grained semantic subtleties and sensationalist sentiment cues.',
      details: [
        { label: 'Tokenizer:', val: 'Subword Byte-Pair (BPE) (50,265 vocab size)' },
        { label: 'Hidden Dimension:', val: 'd_text = 768 / 1024' },
        { label: 'Max Token Length:', val: '512 tokens' },
        { label: 'Key Feature:', val: 'Enhanced Mask Decoder with Disentangled Attention' }
      ]
    },
    vision: {
      title: 'Visual Feature Stream (Swin ViT / CLIP-ViT)',
      desc: 'Processes visual evidence through shifted window self-attention (Swin Transformer) or joint semantic-visual projections (CLIP-ViT). Captures multi-scale contextual features from low-level manipulation artifacts to high-level semantic scenes.',
      details: [
        { label: 'Input Resolution:', val: '224 × 224 × 3 RGB' },
        { label: 'Patch Size:', val: '4 × 4 pixels / 16 × 16 ViT' },
        { label: 'Feature Dimension:', val: 'd_vis = 768' },
        { label: 'Key Benefit:', val: 'Hierarchical multi-scale shifted windows' }
      ]
    },
    fusion: {
      title: 'Adaptive Gated Cross-Modal Alignment Layer',
      desc: 'Computes dynamic gate weights g = σ(W_g · [h_t, h_v]). The gate dynamically balances textual credibility indicators against visual incongruities, preventing one noisy modality from corrupting classification.',
      details: [
        { label: 'Gating Equation:', val: 'h_fused = g ⊙ h_t + (1 - g) ⊙ h_v' },
        { label: 'Cross Attention:', val: 'Multi-Head Cross-Modal Key-Value Projections' },
        { label: 'Weight Matrix:', val: 'W_g ∈ ℝ^(2d × d)' },
        { label: 'Benefit:', val: 'Robust to missing or weakly-correlated image-text pairs' }
      ]
    },
    benchmarks: {
      title: 'Empirical Verification & SOTA Benchmarks',
      desc: 'Rigorous ablation and empirical benchmarking on two leading multimodal fake news datasets demonstrate consistent outperformance against traditional single-modality and simple concatenation baselines.',
      details: [
        { label: 'Fakeddit Benchmark:', val: '91.15% Accuracy | 89.78% Macro F1' },
        { label: 'SPECTRA Benchmark:', val: '96.66% Accuracy | 96.75% Macro F1' },
        { label: 'Validation Strategy:', val: '5-Fold Cross Validation' },
        { label: 'Optimization:', val: 'AdamW with Cosine Annealing (lr = 2e-5)' }
      ]
    }
  };

  openArchModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (archModal) {
        archModal.classList.add('active');
        archModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  const closeArchModal = () => {
    if (archModal) {
      archModal.classList.remove('active');
      archModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeArchModalBtn) closeArchModalBtn.addEventListener('click', closeArchModal);
  if (closeArchModalBtn2) closeArchModalBtn2.addEventListener('click', closeArchModal);
  if (archModal) {
    archModal.addEventListener('click', (e) => {
      if (e.target === archModal) closeArchModal();
    });
  }

  if (archTabs.length > 0) {
    archTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        archTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetKey = tab.getAttribute('data-target');
        const data = archData[targetKey] || archData.all;

        if (panelTitle) panelTitle.textContent = data.title;
        if (panelDesc) panelDesc.textContent = data.desc;

        if (panelDetails) {
          panelDetails.innerHTML = data.details.map(d => `
            <div class="detail-item">
              <span class="detail-label">${d.label}</span>
              <span class="detail-val">${d.val}</span>
            </div>
          `).join('');
        }
      });
    });
  }

  // 4. BIBTEX MODAL & CLIPBOARD COPY
  const bibtexModal = document.getElementById('bibtexModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBtn2 = document.getElementById('closeModalBtn2');
  const copyModalBibtexBtn = document.getElementById('copyModalBibtexBtn');
  const bibtexCode = document.getElementById('bibtexCode');
  const copyBibtexBtns = document.querySelectorAll('.copy-bibtex-btn');

  const bibtexEntries = {
    ic2ns2_2026: `@inproceedings{mishra2026multimodal,
  title={A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers},
  author={Mishra, Ayush and others},
  booktitle={Proceedings of the International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2)},
  year={2026},
  note={Accepted and Presented; Forthcoming in December 2026},
  organization={IEEE/Springer}
}`
  };

  copyBibtexBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const paperKey = btn.getAttribute('data-paper') || 'ic2ns2_2026';
      const citation = bibtexEntries[paperKey];

      if (bibtexModal && bibtexCode) {
        bibtexCode.textContent = citation;
        bibtexModal.classList.add('active');
        bibtexModal.setAttribute('aria-hidden', 'false');
      } else {
        copyToClipboard(citation, 'BibTeX citation copied to clipboard!');
      }
    });
  });

  const closeBibtexModal = () => {
    if (bibtexModal) {
      bibtexModal.classList.remove('active');
      bibtexModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBibtexModal);
  if (closeModalBtn2) closeModalBtn2.addEventListener('click', closeBibtexModal);

  if (bibtexModal) {
    bibtexModal.addEventListener('click', (e) => {
      if (e.target === bibtexModal) closeBibtexModal();
    });
  }

  if (copyModalBibtexBtn && bibtexCode) {
    copyModalBibtexBtn.addEventListener('click', () => {
      copyToClipboard(bibtexCode.textContent, 'BibTeX citation copied to clipboard!');
      closeBibtexModal();
    });
  }

  function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopy(text, successMessage);
      });
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      showToast('Could not copy automatically');
    }
    document.body.removeChild(textArea);
  }

  // 5. TOAST NOTIFICATION
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = toastNotification ? toastNotification.querySelector('.toast-icon') : null;
  let toastTimer = null;

  function showToast(message, icon = '✓') {
    if (!toastNotification || !toastMsg) return;
    toastMsg.textContent = message;
    if (toastIcon) toastIcon.textContent = icon;
    toastNotification.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 2500);
  }

  // 6. CONTACT FORM INTERACTION
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been received. I will connect with you shortly.';
        }
        submitBtn.textContent = 'Sent Successfully ✓';
        showToast('Message sent! Ayush Mishra will connect shortly.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 800);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
