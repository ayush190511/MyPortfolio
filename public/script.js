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
      title: 'A Unified Multimodal Fake News Detection Framework',
      desc: 'Dual-branch multimodal architecture combining a BERT–BiGRU text encoder for sequential and contextual semantics with a Vision Transformer (ViT-B/16) for global visual representations, coupled via efficient feature concatenation.',
      details: [
        { label: 'Text Encoder:', val: 'BERT-Base + BiGRU' },
        { label: 'Vision Encoder:', val: 'Vision Transformer (ViT-B/16)' },
        { label: 'Fusion Method:', val: 'Feature Concatenation f = [t || v]' },
        { label: 'Classification Head:', val: 'Dense ReLU + Softmax Classifier' },
        { label: 'Benchmark:', val: 'Fakeddit Dataset (30,900 test samples)' },
        { label: 'Test Accuracy:', val: '90.18% (0.9485 ROC-AUC)' }
      ]
    },
    text: {
      title: 'Text Encoding Stream (BERT–BiGRU)',
      desc: 'Contextual token embeddings H = BERT(X) ∈ ℝ^(L×d) are refined through a Bidirectional GRU layer. While BERT captures bidirectional context through self-attention, BiGRU explicitly models sequential narrative flow and temporal ordering in deceptive text.',
      details: [
        { label: 'Base Model:', val: 'BERT-Base (Hugging Face Transformers)' },
        { label: 'Sequence Layer:', val: 'Bidirectional GRU (BiGRU)' },
        { label: 'Representation:', val: 't = [h→_final || h←_final] ∈ ℝ^(d_t)' },
        { label: 'Key Benefit:', val: 'Captures narrative dependencies and contextual deception cues' }
      ]
    },
    vision: {
      title: 'Vision Backbone (Vision Transformer ViT-B/16)',
      desc: 'Visual features are extracted using a pre-trained Vision Transformer (ViT-B/16), capturing global receptive fields across 16×16 non-overlapping image patches to detect contextual and semantic discrepancies.',
      details: [
        { label: 'Architecture:', val: 'ViT-B/16 (Torchvision 0.17.2)' },
        { label: 'Patch Size:', val: '16 × 16 image patches' },
        { label: 'Latent Projection:', val: 'v = ReLU(W_v v_raw + b_v) ∈ ℝ^(d_v)' },
        { label: 'Key Benefit:', val: 'Global attention modelling superior to CNN backbones (ResNet50)' }
      ]
    },
    fusion: {
      title: 'Multimodal Feature Concatenation & Classification',
      desc: 'Modality vectors are concatenated f = [t || v] and fed into a fully-connected classification network. This deliberately avoids computationally expensive cross-attention while maintaining robust multi-modal performance.',
      details: [
        { label: 'Fusion Formulation:', val: 'f = [t || v]' },
        { label: 'Classifier:', val: 'ŷ = softmax(W_c(ReLU(W_f f + b_f)) + b_c)' },
        { label: 'Loss Function:', val: 'Binary Cross-Entropy Loss L' },
        { label: 'Complexity:', val: 'T_total ≈ O(L²d + P²d_v) (Linear Scalability)' }
      ]
    },
    benchmarks: {
      title: 'Fakeddit Benchmark Experimental Results',
      desc: 'Evaluated on the large-scale multimodal Fakeddit benchmark using 30,900 test samples. The model demonstrates high discrimination between legitimate and misleading multimodal samples.',
      details: [
        { label: 'Overall Accuracy:', val: '90.18%' },
        { label: 'Precision:', val: '0.9019 (Real: 0.9258, Fake: 0.8946)' },
        { label: 'Recall:', val: '0.9018 (Real: 0.9214, Fake: 0.8921)' },
        { label: 'F1-Score:', val: '0.9018 (Macro-averaged: 0.9084)' },
        { label: 'ROC-AUC:', val: '0.9485' },
        { label: 'Hardware/Stack:', val: 'PyTorch 2.2.2, Intel Xeon, NVIDIA CUDA GPU' }
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
    ic2ns2_2026: `@inproceedings{mishra2026unified,
  title={A Unified Multimodal Framework for Fake News Detection Using BERT and Vision Transformers},
  author={Mishra, Ayush and Kumar, Naveen},
  booktitle={Proceedings of the International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems (IC2NS2 2026)},
  year={2026},
  note={Paper ID: 182; Accepted and Presented},
  publisher={Springer}
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

  // 6. CONTACT FORM INTERACTION (DIRECT EMAIL DELIVERY)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const hiddenSubject = document.getElementById('hiddenSubject');
  const subjectSelect = document.getElementById('subject');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const selectedSubject = subjectSelect ? subjectSelect.value : 'Portfolio Inquiry';
      if (hiddenSubject) {
        hiddenSubject.value = `[Portfolio Inquiry] ${selectedSubject} - from ${formData.get('name')}`;
      }

      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: selectedSubject,
        message: formData.get('message'),
        _subject: `[Portfolio Inquiry] ${selectedSubject} - from ${formData.get('name')}`,
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/ayushmishra642001@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          if (formStatus) {
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you! Your message has been sent directly to Ayush Mishra (ayushmishra642001@gmail.com).';
          }
          submitBtn.textContent = 'Sent Successfully ✓';
          showToast('Message sent to Ayush Mishra!');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        // Direct mailto fallback in case of network or ad-blocker disruption
        const mailtoUrl = `mailto:ayushmishra642001@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + selectedSubject)}&body=${encodeURIComponent('From: ' + payload.name + ' (' + payload.email + ')\n\n' + payload.message)}`;
        if (formStatus) {
          formStatus.className = 'form-status';
          formStatus.style.display = 'block';
          formStatus.style.backgroundColor = 'rgba(234, 88, 12, 0.1)';
          formStatus.style.borderColor = 'rgba(234, 88, 12, 0.3)';
          formStatus.style.color = 'var(--text-bold)';
          formStatus.innerHTML = `Could not send automatically. Click to open in email: <a href="${mailtoUrl}" style="font-weight:600; text-decoration:underline;">Send via Email Client ↗</a>`;
        }
        submitBtn.textContent = 'Send via Email ↗';
        window.open(mailtoUrl, '_blank');
      } finally {
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 5000);
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
