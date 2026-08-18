// Immediate theme apply to prevent flash of unstyled theme
(function() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
})();

function initPortfolio() {
  // 1. THEME ENGINE (Apple Light / Dark Mode)
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeColorMeta = document.getElementById('themeColorMeta');

  // Initialize theme from storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, newTheme === 'dark' ? '🌙' : '☀️');
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#08090C' : '#FBFBFD');
    }
  }

  // 2. MOBILE NAVIGATION MENU
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // 3. RESEARCH ARCHITECTURE INTERACTIVE VISUALIZER
  const archTabs = document.querySelectorAll('.arch-tab-btn');
  const panelBadge = document.getElementById('panelBadge');
  const panelTitle = document.getElementById('panelTitle');
  const panelDesc = document.getElementById('panelDesc');
  const panelDetails = document.getElementById('panelDetails');

  const archData = {
    all: {
      badge: 'Unified Overview',
      title: 'Multimodal Misinformation Framework',
      desc: 'Real-world fake news leverages both misleading imagery and biased linguistic phrasing. Our framework extracts deep contextual embeddings from text using DeBERTa/RoBERTa and visual feature hierarchies with Swin Transformer & CLIP-ViT.',
      details: [
        { label: 'Text Encoders:', val: 'DeBERTa-v3, RoBERTa-large, BERT' },
        { label: 'Vision Encoders:', val: 'Swin-B (Shifted Windows), CLIP-ViT-B/16' },
        { label: 'Fusion Mechanism:', val: 'Gated Unit: g = σ(W_g · [h_t; h_v])' },
        { label: 'Loss Objective:', val: 'Cross-Entropy with Label Smoothing' }
      ]
    },
    text: {
      badge: 'Text Representation Stream',
      title: 'Disentangled Contextual Embeddings (DeBERTa / BERT)',
      desc: 'Processes the textual article headline and body. DeBERTa-v3 disentangles content and positional vectors using relative position matrices, extracting fine-grained semantic subtleties and sensationalist sentiment cues.',
      details: [
        { label: 'Tokenizer:', val: 'Subword Byte-Pair (BPE) (50,265 vocab size)' },
        { label: 'Hidden Dimension:', val: 'd_text = 768 / 1024' },
        { label: 'Max Token Length:', val: '512 tokens' },
        { label: 'Key Feature:', val: 'Enhanced Mask Decoder with Disentangled Attention' }
      ]
    },
    vision: {
      badge: 'Visual Feature Stream',
      title: 'Hierarchical Vision Transformers (Swin / CLIP-ViT)',
      desc: 'Processes visual evidence through shifted window self-attention (Swin Transformer) or joint semantic-visual projections (CLIP-ViT). Captures multi-scale contextual features from low-level manipulation artifacts to high-level semantic scenes.',
      details: [
        { label: 'Input Resolution:', val: '224 × 224 × 3 RGB' },
        { label: 'Patch Size:', val: '4 × 4 pixels / 16 × 16 ViT' },
        { label: 'Feature Dimension:', val: 'd_vis = 768' },
        { label: 'Key Benefit:', val: 'Hierarchical multi-scale shifted windows' }
      ]
    },
    fusion: {
      badge: 'Novel Fusion Layer',
      title: 'Adaptive Gated Cross-Modal Alignment',
      desc: 'Computes dynamic gate weights g = σ(W_g · [h_t, h_v]). The gate dynamically balances textual credibility indicators against visual incongruities, preventing one noisy modality from corrupting classification.',
      details: [
        { label: 'Gating Equation:', val: 'h_fused = g ⊙ h_t + (1 - g) ⊙ h_v' },
        { label: 'Cross Attention:', val: 'Multi-Head Cross-Modal Key-Value Projections' },
        { label: 'Weight Matrix:', val: 'W_g ∈ ℝ^(2d × d)' },
        { label: 'Benefit:', val: 'Robust to missing or weakly-correlated image-text pairs' }
      ]
    },
    benchmarks: {
      badge: 'Empirical Verification',
      title: 'Benchmark SOTA Performance',
      desc: 'Rigorous ablation and empirical benchmarking on two leading multimodal fake news datasets demonstrate consistent outperformance against traditional single-modality and simple concatenation baselines.',
      details: [
        { label: 'Fakeddit Benchmark:', val: '91.15% Accuracy | 89.78% Macro F1' },
        { label: 'SPECTRA Benchmark:', val: '96.66% Accuracy | 96.75% Macro F1' },
        { label: 'Validation Strategy:', val: '5-Fold Cross Validation' },
        { label: 'Optimization:', val: 'AdamW with Cosine Annealing (lr = 2e-5)' }
      ]
    }
  };

  if (archTabs.length > 0) {
    archTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        archTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetKey = tab.getAttribute('data-target');
        const data = archData[targetKey] || archData.all;

        if (panelBadge) panelBadge.textContent = data.badge;
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

  // 4. PROJECT CATEGORY FILTER
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. ABSTRACT TOGGLER
  const toggleAbstractBtns = document.querySelectorAll('.toggle-abstract-btn');
  toggleAbstractBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const abstractEl = document.getElementById(targetId);
      if (abstractEl) {
        abstractEl.classList.toggle('active');
        const isExpanded = abstractEl.classList.contains('active');
        btn.querySelector('span').textContent = isExpanded ? 'Hide Abstract' : 'Toggle Abstract';
      }
    });
  });

  // 6. BIBTEX MODAL & CLIPBOARD COPY
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
  booktitle={Proceedings of the International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)},
  year={2026},
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

  // 7. GENERIC COPY BUTTONS (e.g. Email copy)
  const copySmallBtns = document.querySelectorAll('.copy-small-btn');
  copySmallBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        copyToClipboard(textToCopy, 'Email copied to clipboard!');
      }
    });
  });

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

  // 8. TOAST NOTIFICATION
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
    }, 2800);
  }

  // 9. CONTACT FORM INTERACTION
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been prepared. You can also reach me directly at ayushmishra642001@gmail.com.';
        }
        submitBtn.innerHTML = `<span>Sent Successfully ✓</span>`;
        showToast('Message submitted! Ayush Mishra will respond shortly.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 900);
    });
  }

  // 10. ACTIVE NAVIGATION SCROLL SPY
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 11. FLOATING BACK TO TOP BUTTON
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollPos > 60) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check once initially

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 12. FLOATING FROSTED GLASS HEADER ON SCROLL (MOBILE & DESKTOP)
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    let isHeaderTicking = false;

    const handleHeaderScroll = () => {
      const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0);

      // Morph into floating glass island dock when scrolled past top (30px)
      if (currentScrollY > 30) {
        siteHeader.classList.add('header-scrolled');
      } else {
        siteHeader.classList.remove('header-scrolled');
      }

      isHeaderTicking = false;
    };

    const onScrollOrTouch = () => {
      if (!isHeaderTicking) {
        window.requestAnimationFrame(handleHeaderScroll);
        isHeaderTicking = true;
      }
    };

    window.addEventListener('scroll', onScrollOrTouch, { passive: true });
    window.addEventListener('touchmove', onScrollOrTouch, { passive: true });
    window.addEventListener('resize', onScrollOrTouch, { passive: true });

    // Initial check
    handleHeaderScroll();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}

