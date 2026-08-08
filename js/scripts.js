document.addEventListener("DOMContentLoaded", () => {
    // ---------- Selección de elementos ----------
    const openQuoteBtn = document.getElementById("open-quote-btn");
    const closeQuoteBtn = document.getElementById("close-quote-btn");
    const modalOverlay = document.getElementById("quote-modal");
    const quoteForm = document.getElementById("quote-form");
    const resultBox = document.getElementById("quote-result");
    const totalEl = document.getElementById("quote-total");
    const breakdownEl = document.getElementById("quote-breakdown");
    const attendeesInput = document.getElementById("attendees");
    const packageSelect = document.getElementById("package");

    // Formatea un número como moneda en Quetzales (GTQ)
    const formatCurrency = (amount) =>
        "Q" + amount.toLocaleString("es-GT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    // ---------- Abrir modal ----------
    openQuoteBtn.addEventListener("click", () => {
        modalOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // evita el scroll de fondo
    });

    // ---------- Cerrar modal (botón X) ----------
    closeQuoteBtn.addEventListener("click", closeModal);

    // ---------- Cerrar modal al hacer clic fuera del cuadro ----------
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // ---------- Cerrar modal con la tecla Escape ----------
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modalOverlay.classList.contains("open")) {
            closeModal();
        }
    });

    function closeModal() {
        modalOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    // ---------- Cálculo de la cotización (sin recargar la página) ----------
    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const attendees = parseInt(attendeesInput.value, 10);

        if (!attendees || attendees < 1) {
            attendeesInput.focus();
            return;
        }

        const packagePrice = parseFloat(packageSelect.value);
        const packageLabel = packageSelect.options[packageSelect.selectedIndex].text;
        const subtotalPackage = packagePrice * attendees;

        // Servicios adicionales marcados
        const checkedServices = quoteForm.querySelectorAll('input[name="services"]:checked');
        let subtotalServices = 0;
        const servicesChosen = [];

        checkedServices.forEach((checkbox) => {
            const price = parseFloat(checkbox.value);
            const isPerPerson = checkbox.dataset.perPerson === "true";
            const cost = isPerPerson ? price * attendees : price;
            subtotalServices += cost;

            const labelText = checkbox.parentElement.textContent.trim();
            servicesChosen.push(labelText.split("(")[0].trim() + ": " + formatCurrency(cost));
        });

        const total = subtotalPackage + subtotalServices;

        // ---------- Mostrar resultado en pantalla ----------
        totalEl.textContent = formatCurrency(total);

        let breakdown = `${attendees} asistente(s) · ${packageLabel.split("—")[0].trim()} (${formatCurrency(subtotalPackage)})`;

        if (servicesChosen.length > 0) {
            breakdown += ` · Adicionales: ${servicesChosen.join(", ")}`;
        }

        breakdownEl.textContent = breakdown;

        resultBox.classList.add("show");
    });

    // ---------- Buscador de actividades (en tiempo real, sin recargar) ----------

    const searchToggleBtn = document.getElementById("search-toggle-btn");
    const activitiesCarousel = document.getElementById("activities-carousel");
    const searchBar = document.getElementById("activity-search-bar");
    const searchInput = document.getElementById("activity-search-input");
    const searchCloseBtn = document.getElementById("activity-search-close");
    const activitySlides = document.querySelectorAll(".activity-slide");
 
    // ---------- Abrir / cerrar la barra de búsqueda ----------
    searchToggleBtn.addEventListener("click", () => {
        const isOpen = searchBar.classList.contains("open");
 
        if (isOpen) {
            closeActivitySearch();
        } else {
            document.getElementById("actividades").scrollIntoView({ behavior: "smooth" });
            searchBar.classList.add("open");
            searchToggleBtn.classList.add("active");
            searchInput.focus();
        }
    });
 
    // ---------- Cerrar con el botón "x" dentro de la barra ----------
    searchCloseBtn.addEventListener("click", closeActivitySearch);
 
    // ---------- Cerrar con la tecla Escape ----------
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && searchBar.classList.contains("open")) {
            closeActivitySearch();
        }
    });
 
    function closeActivitySearch() {
        searchBar.classList.remove("open");
        searchToggleBtn.classList.remove("active");
        searchInput.value = "";
        activitiesCarousel.classList.remove("no-results");
    }
 
    // ---------- Buscar en tiempo real y saltar a la tarjeta correspondiente ----------
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        activitiesCarousel.classList.remove("no-results");
 
        if (query === "") {
            return;
        }
 
        let matchFound = false;
 
        activitySlides.forEach((slide) => {
            if (matchFound) return;
 
            const text = slide.textContent.toLowerCase();
            if (text.includes(query)) {
                const slideNumber = slide.className.match(/slide-(\d+)/);
                if (slideNumber) {
                    const radio = document.getElementById("act" + slideNumber[1]);
                    if (radio) radio.checked = true;
                }
                matchFound = true;
            }
        });
 
        if (!matchFound) {
            activitiesCarousel.classList.add("no-results");
        }
    });
    
// ---------- Modal de contacto o reservación ----------
    const openContactBtn = document.getElementById("open-contact-btn");
    const closeContactBtn = document.getElementById("close-contact-btn");
    const contactModal = document.getElementById("contact-modal");
    const contactForm = document.getElementById("contact-form");
    const contactFormView = document.getElementById("contact-form-view");
    const contactTypeSelect = document.getElementById("contact-type");
    const attendeesField = document.getElementById("attendees-field");
    const contactAttendeesInput = document.getElementById("contact-attendees");
    const thankYouView = document.getElementById("contact-thank-you-view");
    const thankYouTitle = document.getElementById("thank-you-title");
    const thankYouMessage = document.getElementById("thank-you-message");
    const thankYouCloseBtn = document.getElementById("thank-you-close-btn");
 
    // ---------- Abrir modal ----------
    openContactBtn.addEventListener("click", () => {
        contactModal.classList.add("open");
        document.body.style.overflow = "hidden";
    });
 
    // ---------- Cerrar modal (botón X) ----------
    closeContactBtn.addEventListener("click", closeContactModal);
 
    // ---------- Cerrar al hacer clic fuera del cuadro ----------
    contactModal.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            closeContactModal();
        }
    });
 
    // ---------- Cerrar con la tecla Escape ----------
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && contactModal.classList.contains("open")) {
            closeContactModal();
        }
    });
 
    // ---------- Botón "Cerrar" dentro de la página de agradecimiento ----------
    thankYouCloseBtn.addEventListener("click", closeContactModal);
 
    function closeContactModal() {
        contactModal.classList.remove("open");
        document.body.style.overflow = "";
        resetContactModal();
    }
 
    function resetContactModal() {
        contactForm.reset();
        attendeesField.classList.remove("show");
        contactFormView.classList.remove("hide-view");
        thankYouView.classList.remove("show");
    }
 
    // ---------- Mostrar el campo "Número de personas" solo si selecciona "Reservar" ----------
    contactTypeSelect.addEventListener("change", () => {
        const wantsReservation = contactTypeSelect.value === "reservar";
        attendeesField.classList.toggle("show", wantsReservation);
        contactAttendeesInput.required = wantsReservation;
    });
 
    // ---------- Enviar formulario (figurativo, no se envía a ningún lado) ----------
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
 
        const name = document.getElementById("contact-name").value.trim();
        const type = contactTypeSelect.value;
        const attendees = contactAttendeesInput.value;
 
        thankYouTitle.textContent = `¡Gracias, ${name}!`;
 
        if (type === "reservar") {
            thankYouMessage.textContent =
                `Tu solicitud de reservación ha sido registrada para ${attendees} persona(s). ` +
                "Pronto nos pondremos en contacto para confirmar los detalles.";
        } else {
            thankYouMessage.textContent =
                "Tu solicitud ha sido registrada correctamente y en breve uno de nuestros " +
                "colaboradores se pondrá en contacto contigo para dar seguimiento a tu consulta.";
        }
 
        contactFormView.classList.add("hide-view");
        thankYouView.classList.add("show");
    });

    // ---------- Lightbox de Galería ----------
    const galleryCards = document.querySelectorAll(".gallery-card");
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const closeLightboxBtn = document.getElementById("close-lightbox-btn");
 
    galleryCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            // Si el clic fue sobre una flecha del carrusel, no abrir el lightbox
            if (event.target.closest(".g-arrow")) return;
 
            const img = card.querySelector("img");
            const title = card.querySelector("h3");
            const description = card.querySelector("figcaption p:last-of-type, .m-info p:last-of-type");
 
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxTitle.textContent = title ? title.textContent : "";
            lightboxDesc.textContent = description ? description.textContent : "";
 
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });
 
    closeLightboxBtn.addEventListener("click", closeLightbox);
 
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
 
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
 
    function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    }

    // ---------- Testimonios ----------
 const testimonialNames = [
        "Ana Gómez",
        "Carlos López",
        "María Fernanda Ruiz",
        "Betsabe Sarai Fernandez",
        "Sofía Castillo",
        "Diego Morales"
    ];
 
    const testimonialComments = [
        "La excursión superó todas mis expectativas, el Estanque Azul es aún más impresionante en persona.",
        "El itinerario estuvo muy bien organizado, no perdimos tiempo y vimos todo lo importante de Hokkaido.",
        "Probar el ramen de Sapporo y ver el Festival de la Nieve fue una experiencia inolvidable.",
        "El guía privado nos explicó la cultura local con mucho detalle, totalmente recomendado.",
        "Los campos de lavanda de Furano son un espectáculo, valió cada quetzal invertido.",
        "Una experiencia perfecta para quienes aman la naturaleza y la nieve, sin duda regresaría."
    ];
 
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const desktopDotsContainer = document.getElementById("testimonial-dots-desktop");
    const mobileDotsContainer = document.getElementById("testimonial-dots-mobile");
    const newTestimonialBtn = document.getElementById("new-testimonial-btn");
 
    // Baraja una copia del arreglo (Fisher-Yates)
    function shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
 
    // Se combinan nombre + comentario al azar y se dividen en grupos del tamaño de las tarjetas
    // (igual patrón que la galería: 6 elementos -> 2 páginas de 3)
    const shuffledNames = shuffle(testimonialNames);
    const shuffledComments = shuffle(testimonialComments);
    const cardsPerGroup = testimonialCards.length;
    const totalGroups = Math.ceil(shuffledNames.length / cardsPerGroup);
 
    const testimonialGroups = [];
    for (let g = 0; g < totalGroups; g++) {
        const group = [];
        for (let i = 0; i < cardsPerGroup; i++) {
            const dataIndex = g * cardsPerGroup + i;
            group.push({ name: shuffledNames[dataIndex], comment: shuffledComments[dataIndex] });
        }
        testimonialGroups.push(group);
    }
 
    // ---------- Genera los puntos dinámicamente según la cantidad real ----------
    // Escritorio: 1 punto por grupo. Móvil: 1 punto por tarjeta del grupo activo.
    function buildDots(container, count) {
        container.innerHTML = "";
        for (let i = 0; i < count; i++) {
            const dot = document.createElement("span");
            container.appendChild(dot);
        }
        return container.querySelectorAll("span");
    }
 
    const desktopDots = buildDots(desktopDotsContainer, totalGroups);
    const mobileDots = buildDots(mobileDotsContainer, cardsPerGroup);
 
    let groupIndex = 0; // grupo actual (controla escritorio)
    let mobileSlot = 0; // tarjeta activa dentro del grupo (controla móvil)
 
    // Llena las 3 tarjetas con el grupo indicado — esto es lo que ve escritorio
    function fillCardsWithGroup(index) {
        testimonialGroups[index].forEach((item, slot) => {
            const card = testimonialCards[slot];
            card.querySelector("[data-testimonial-text]").textContent = `"${item.comment}"`;
            card.querySelector("[data-testimonial-author]").textContent = item.name;
        });
    }
 
    function setDesktopDot(index) {
        desktopDots.forEach((dot) => dot.classList.remove("active"));
        desktopDots[index].classList.add("active");
    }
 
    function setMobileState(slot) {
        testimonialCards.forEach((card) => card.classList.remove("active-card"));
        mobileDots.forEach((dot) => dot.classList.remove("active"));
 
        testimonialCards[slot].classList.add("active-card");
        mobileDots[slot].classList.add("active");
    }
 
    // ---------- Al presionar el botón ----------
    newTestimonialBtn.addEventListener("click", () => {
        const isMobile = window.matchMedia("(max-width: 900px)").matches;
 
        if (isMobile) {
            // En móvil: cada clic avanza 1 tarjeta; al llegar al final, pasa al siguiente grupo
            mobileSlot++;
            if (mobileSlot >= cardsPerGroup) {
                mobileSlot = 0;
                groupIndex = (groupIndex + 1) % totalGroups;
                fillCardsWithGroup(groupIndex);
                setDesktopDot(groupIndex);
            }
            setMobileState(mobileSlot);
        } else {
            // En escritorio: cada clic cambia de grupo de inmediato
            groupIndex = (groupIndex + 1) % totalGroups;
            fillCardsWithGroup(groupIndex);
            setDesktopDot(groupIndex);
 
            mobileSlot = 0;
            setMobileState(mobileSlot);
        }
    });
 
    // ---------- Al cargar la página ----------
    fillCardsWithGroup(0);
    setDesktopDot(0);
    setMobileState(0);
});