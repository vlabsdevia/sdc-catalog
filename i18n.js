/* ============================================================
   SDC Solutions · production-v3 · i18n.js
   Bilingual dictionary (EN/ES) + language toggle logic.
   Usage: add data-i="key" on text nodes,
          data-i-html="key" on nodes with inner HTML translations.
   ============================================================ */

const I18N = {
  en: {
    /* ---- Nav ---- */
    nav_home:    "Home",
    nav_catalog: "Catalog",
    nav_case:    "Case Studies",
    nav_contact: "Contact",
    nav_cta:     "Call Jose · (904) 655-9190",

    /* ---- Home · Hero ---- */
    hero_badge:  "Jacksonville · Nassau · St. Johns · Clay · Duval",
    hero_h1a:    "Packaging for",
    hero_h1b:    "Northeast Florida",
    hero_h1c:    "kitchens.",
    hero_h1d:    "On your shelf tomorrow.",
    hero_sub:    "Family-run supplier of cups, containers, utensils, and packaging. Order Tuesday, delivered Wednesday — across Jacksonville and surrounding counties. Bilingual service, no pallet minimums.",
    hero_cta1:   "Browse the catalog",
    hero_cta2:   "Request a quote",
    hero_cta3:   "WhatsApp Jose",
    hero_stat1:  "SKUs in stock",
    hero_stat2:  "Typical delivery",
    hero_stat3:  "Counties served",
    hero_stat4:  "Order in your language",

    /* ---- Home · Categories ---- */
    cats_kicker: "Eight categories · 1,200 SKUs",
    cats_h2:     "Everything a",
    cats_em:     "back-of-house",
    cats_h3:     "runs through.",
    cats_link:   "Browse full catalog →",
    cat_cups:    "Cups & Lids",
    cat_deli:    "Deli Containers",
    cat_utensils:"Utensils",
    cat_bags:    "Bags & Sacks",
    cat_paper:   "Paper Goods",
    cat_clean:   "Cleaning & Chem",
    cat_gloves:  "Gloves & PPE",
    cat_trays:   "Trays & Takeout",
    cat_shop:    "Shop →",

    /* ---- Home · Values ---- */
    values_kicker: "Why SDC",
    values_h2:     "Three things nobody else does.",
    val1_num:  "01 / Spoken here",
    val1_h3:   "Pedidos en español — WhatsApp, call, text.",
    val1_p:    "Half our customers order in Spanish. Jose picks up. No phone trees, no English-only portals, no order slipping through because nobody wrote down \"vasos de 16 oz.\"",
    val2_num:  "02 / No pallet minimums",
    val2_h3:   "One case is fine. We'll bring it Wednesday.",
    val2_p:    "Most suppliers make you order full pallets. We'll drop a single case of deli lids on your next run if that's what you need. Food trucks love this.",
    val3_num:  "03 / We ran a kitchen",
    val3_h3:   "We know what runs out on a Saturday.",
    val3_p:    "SDC is the supply arm of Sabores del Campo, a working restaurant. We know the SKUs that matter. We stock them deep. Your 3pm Saturday emergency is our Tuesday reorder.",

    /* ---- Home · Map ---- */
    map_kicker: "Delivery zones",
    map_h2a:    "Do we deliver",
    map_h2b:    "to you?",
    map_link:   "Check your ZIP →",
    map_p:      "Same-day or next-day delivery across Duval, Nassau, St. Johns, and Clay counties. Twice-weekly standing routes for every zone. No fuel surcharges, no minimums over $150.",
    zone_duval:   "Duval (Jacksonville, Atlantic Beach, Neptune Beach)",
    zone_stjohns: "St. Johns (St. Augustine, Ponte Vedra)",
    zone_nassau:  "Nassau (Fernandina Beach, Yulee)",
    zone_clay:    "Clay (Orange Park, Middleburg)",
    zone_nd:  "NEXT DAY",
    zone_48:  "48 HR",

    /* ---- Home · Testimonials ---- */
    test_kicker: "— What customers say",
    test_h2a:    "Trusted by",
    test_h2b:    "78 kitchens",
    test_h2c:    "across the First Coast.",

    /* ---- Home · CTA strip ---- */
    cta_strip_h2a: "Ready to stock",
    cta_strip_h2b: "your kitchen?",
    cta_strip_b1:  "Request a quote →",
    cta_strip_b2:  "Call Jose · (904) 655-9190",
    cta_strip_b3:  "WhatsApp Jose",

    /* ---- Footer ---- */
    foot_cat_head:  "Catalog",
    foot_co_head:   "Company",
    foot_ct_head:   "Contact",
    foot_copyright: "© 2026 SDC Solutions · Sabores del Campo LLC",
    foot_locale:    "Atlantic Beach, FL · since 2018",

    /* ---- Catalog page ---- */
    catalog_title:  "Catalog",
    catalog_lede:   "Over 1,200 foodservice packaging SKUs — cups, containers, bags, utensils, cleaning, and more. Same-day or next-day delivery across Northeast Florida.",
    catalog_bread:  "Catalog",
    catalog_search_ph: "Search 1,200+ SKUs — try '16oz kraft bowl'",
    catalog_sort:   "Sort · Most ordered",
    catalog_showing:"Showing",
    catalog_of:     "of",
    catalog_skus:   "SKUs",
    filter_category:"Category",
    filter_material:"Material",
    filter_size:    "Size",
    filter_stock:   "In stock",

    /* ---- Case Studies page ---- */
    case_kicker:    "— Case Studies",
    case_h1a:       "Real results for",
    case_h1b:       "Northeast Florida",
    case_h1c:       "kitchens.",
    case_lede:      "We track every SKU swap and every delivery. Here's what actually happened when Jacksonville-area restaurants switched to SDC.",
    case1_kicker:   "Featured case study",
    case1_title_a:  "From spreadsheet to",
    case1_title_b:  "searchable catalog",
    case1_title_c:  "— Maria's Bakery, 18 months.",
    case1_lede:     "Maria Delgado runs a 48-seat Mexican kitchen in Jax Beach with a 60%-takeout business. Fragmented supply across three vendors was bleeding margin. SDC consolidated her to 11 SKUs, cut her bill 22%, and caught a sizing mismatch that had been wasting ~400 soup cups a week.",
    case_more_kicker: "More case studies",
    case_more_h2:   "More kitchens, real numbers.",

    /* ---- Contact page ---- */
    contact_kicker: "— Get a quote",
    contact_h1a:    "Talk to",
    contact_h1b:    "Jose.",
    contact_p:      "He answers the phone, the WhatsApp, and the quote form. Most quotes back within 2 business hours. Español o inglés — your choice.",
    contact_l_phone:    "Call / text",
    contact_l_wa:       "WhatsApp",
    contact_l_addr:     "Warehouse",
    contact_l_hours:    "Hours",
    contact_l_email:    "Email",
    contact_form_h3:    "Request a quote",
    field_biz:      "Business name",
    field_name:     "Your name",
    field_phone:    "Phone",
    field_email:    "Email",
    field_type:     "Type of kitchen",
    field_volume:   "Estimated weekly volume",
    field_needs:    "What do you need?",
    field_contact:  "Preferred contact",
    form_submit:    "Send to Jose →",
    form_success:   "Thanks! Jose will call you back within one business day.",
    contact_map_kicker: "Delivery zones",
    contact_map_h2: "We cover Northeast Florida.",
  },

  es: {
    /* ---- Nav ---- */
    nav_home:    "Inicio",
    nav_catalog: "Catálogo",
    nav_case:    "Casos de Éxito",
    nav_contact: "Contacto",
    nav_cta:     "Llama a Jose · (904) 655-9190",

    /* ---- Home · Hero ---- */
    hero_badge:  "Jacksonville · Nassau · St. Johns · Clay · Duval",
    hero_h1a:    "Empaques para",
    hero_h1b:    "cocinas del noreste",
    hero_h1c:    "de Florida.",
    hero_h1d:    "En su estante mañana.",
    hero_sub:    "Proveedor familiar de vasos, envases, cubiertos y empaques. Pide el martes, entregamos el miércoles — Jacksonville y condados vecinos. Servicio bilingüe, sin mínimo de tarima.",
    hero_cta1:   "Ver el catálogo",
    hero_cta2:   "Pedir cotización",
    hero_cta3:   "WhatsApp a Jose",
    hero_stat1:  "SKUs en stock",
    hero_stat2:  "Entrega típica",
    hero_stat3:  "Condados servidos",
    hero_stat4:  "Pide en tu idioma",

    /* ---- Home · Categories ---- */
    cats_kicker: "Ocho categorías · 1,200 SKUs",
    cats_h2:     "Todo lo que necesita",
    cats_em:     "tu cocina",
    cats_h3:     "cada semana.",
    cats_link:   "Ver catálogo completo →",
    cat_cups:    "Vasos y Tapas",
    cat_deli:    "Envases Deli",
    cat_utensils:"Cubiertos",
    cat_bags:    "Bolsas y Sacos",
    cat_paper:   "Papel y Servilletas",
    cat_clean:   "Limpieza y Químicos",
    cat_gloves:  "Guantes y EPP",
    cat_trays:   "Bandejas y Para Llevar",
    cat_shop:    "Ver →",

    /* ---- Home · Values ---- */
    values_kicker: "Por qué SDC",
    values_h2:     "Tres cosas que nadie más hace.",
    val1_num:  "01 / Hablamos español",
    val1_h3:   "Pedidos en español — WhatsApp, llamada, texto.",
    val1_p:    "La mitad de nuestros clientes ordenan en español. Jose contesta. Sin menús de voz, sin portales sólo en inglés, sin pedidos perdidos porque nadie anotó \"vasos de 16 oz.\"",
    val2_num:  "02 / Sin mínimo de tarima",
    val2_h3:   "Una caja está bien. La llevamos el miércoles.",
    val2_p:    "La mayoría de proveedores exige tarimas completas. Nosotros te dejamos una sola caja de tapas en tu próxima entrega si eso es lo que necesitas. Los food trucks nos adoran.",
    val3_num:  "03 / Somos cocineros",
    val3_h3:   "Sabemos lo que se acaba un sábado.",
    val3_p:    "SDC es el brazo de suministro de Sabores del Campo, un restaurante en operación. Conocemos los SKUs que importan. Los tenemos en cantidad. Tu emergencia del sábado a las 3pm es nuestro reorden del martes.",

    /* ---- Home · Map ---- */
    map_kicker: "Zonas de entrega",
    map_h2a:    "¿Entregamos",
    map_h2b:    "en tu zona?",
    map_link:   "Verifica tu código postal →",
    map_p:      "Entrega el mismo día o al día siguiente en los condados Duval, Nassau, St. Johns y Clay. Rutas fijas dos veces por semana. Sin recargos de combustible, sin mínimos por encima de $150.",
    zone_duval:   "Duval (Jacksonville, Atlantic Beach, Neptune Beach)",
    zone_stjohns: "St. Johns (St. Augustine, Ponte Vedra)",
    zone_nassau:  "Nassau (Fernandina Beach, Yulee)",
    zone_clay:    "Clay (Orange Park, Middleburg)",
    zone_nd:  "DÍA SIGUIENTE",
    zone_48:  "48 HORAS",

    /* ---- Home · Testimonials ---- */
    test_kicker: "— Lo que dicen los clientes",
    test_h2a:    "Con la confianza de",
    test_h2b:    "78 cocinas",
    test_h2c:    "en la Primera Costa.",

    /* ---- Home · CTA strip ---- */
    cta_strip_h2a: "¿Listo para surtir",
    cta_strip_h2b: "tu cocina?",
    cta_strip_b1:  "Pedir cotización →",
    cta_strip_b2:  "Llama a Jose · (904) 655-9190",
    cta_strip_b3:  "WhatsApp a Jose",

    /* ---- Footer ---- */
    foot_cat_head:  "Catálogo",
    foot_co_head:   "Empresa",
    foot_ct_head:   "Contacto",
    foot_copyright: "© 2026 SDC Solutions · Sabores del Campo LLC",
    foot_locale:    "Atlantic Beach, FL · desde 2018",

    /* ---- Catalog page ---- */
    catalog_title:  "Catálogo",
    catalog_lede:   "Más de 1,200 SKUs de empaque para foodservice — vasos, envases, bolsas, cubiertos, limpieza y más. Entrega el mismo día o al siguiente en todo el noreste de Florida.",
    catalog_bread:  "Catálogo",
    catalog_search_ph: "Busca entre 1,200+ SKUs — intenta 'vaso de 16oz kraft'",
    catalog_sort:   "Orden · Más pedidos",
    catalog_showing:"Mostrando",
    catalog_of:     "de",
    catalog_skus:   "SKUs",
    filter_category:"Categoría",
    filter_material:"Material",
    filter_size:    "Tamaño",
    filter_stock:   "En stock",

    /* ---- Case Studies page ---- */
    case_kicker:    "— Casos de Éxito",
    case_h1a:       "Resultados reales en cocinas del",
    case_h1b:       "noreste de",
    case_h1c:       "Florida.",
    case_lede:      "Registramos cada cambio de SKU y cada entrega. Esto es lo que ocurrió cuando restaurantes del área de Jacksonville cambiaron a SDC.",
    case1_kicker:   "Caso de estudio destacado",
    case1_title_a:  "De hoja de cálculo a",
    case1_title_b:  "catálogo digital",
    case1_title_c:  "— La Panadería de Maria, 18 meses.",
    case1_lede:     "Maria Delgado dirige una cocina mexicana de 48 asientos en Jax Beach con un 60% de negocio para llevar. El suministro fragmentado con tres proveedores le estaba costando margen. SDC la consolidó en 11 SKUs, le redujo la factura un 22% y detectó un error de tamaño que desperdiciaba ~400 vasos de sopa por semana.",
    case_more_kicker: "Más casos de éxito",
    case_more_h2:   "Más cocinas, números reales.",

    /* ---- Contact page ---- */
    contact_kicker: "— Pide una cotización",
    contact_h1a:    "Habla con",
    contact_h1b:    "Jose.",
    contact_p:      "Contesta el teléfono, el WhatsApp y el formulario. La mayoría de las cotizaciones llegan en menos de 2 horas hábiles. Español o inglés — tú eliges.",
    contact_l_phone:    "Llama / texto",
    contact_l_wa:       "WhatsApp",
    contact_l_addr:     "Almacén",
    contact_l_hours:    "Horario",
    contact_l_email:    "Correo",
    contact_form_h3:    "Pedir cotización",
    field_biz:      "Nombre del negocio",
    field_name:     "Tu nombre",
    field_phone:    "Teléfono",
    field_email:    "Correo electrónico",
    field_type:     "Tipo de cocina",
    field_volume:   "Volumen semanal estimado",
    field_needs:    "¿Qué necesitas?",
    field_contact:  "Contacto preferido",
    form_submit:    "Enviar a Jose →",
    form_success:   "¡Gracias! Jose te llamará antes de un día hábil.",
    contact_map_kicker: "Zonas de entrega",
    contact_map_h2: "Cubrimos el noreste de Florida.",
  }
};

/* ---- page title translations ---- */
const PAGE_TITLES = {
  en: {
    home:    "SDC Solutions — Foodservice packaging for Northeast Florida kitchens",
    catalog: "Catalog · SDC Solutions",
    case:    "Case Studies · SDC Solutions",
    contact: "Contact · SDC Solutions",
  },
  es: {
    home:    "SDC Solutions — Empaque para cocinas del noreste de Florida",
    catalog: "Catálogo · SDC Solutions",
    case:    "Casos de Éxito · SDC Solutions",
    contact: "Contacto · SDC Solutions",
  }
};

/* ---- core apply function ---- */
function applyLang(lang) {
  document.documentElement.lang = lang;

  /* text nodes */
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.dataset.i;
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.textContent = I18N[lang][key];
    }
  });

  /* inner-html nodes (for headlines with <em> etc.) */
  document.querySelectorAll('[data-i-html]').forEach(el => {
    const key = el.dataset.iHtml;
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });

  /* placeholder attributes */
  document.querySelectorAll('[data-i-ph]').forEach(el => {
    const key = el.dataset.iPh;
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.placeholder = I18N[lang][key];
    }
  });

  /* lang toggle active state */
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  /* page title */
  const titleEl = document.getElementById('page-title');
  if (titleEl) {
    const pageKey = titleEl.dataset.page;
    if (PAGE_TITLES[lang] && PAGE_TITLES[lang][pageKey]) {
      document.title = PAGE_TITLES[lang][pageKey];
    }
  }

  /* persist */
  try { localStorage.setItem('sdc_lang', lang); } catch(e) {}
}

/* ---- boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  let lang = 'en';
  try { lang = localStorage.getItem('sdc_lang') || 'en'; } catch(e) {}
  applyLang(lang);

  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });
});
