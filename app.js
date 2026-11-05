
// ==========================================
// JP BURGER POS — CATÁLOGO PREMIUM
// ==========================================

const WHATSAPP_NUMBER = "573103114145";

// Fotografías ilustrativas por categoría
const productImages = {
  "Hamburguesas": [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85"
  ],
  "Ricuras": [
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=900&q=85"
  ],
  "Perros calientes": [
    "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&w=900&q=85"
  ],
  "Salchipapas": [
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85"
  ],
  "Dorilocos": [
    "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85"
  ],
  "Flautas": [
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
  ],
  "Lasañas": [
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=85"
  ],
  "Burritos": [
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
  ],
  "Adicionales": [
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85"
  ],
  "Bebidas": [
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513558161293-cdcac4c2c8c5?auto=format&fit=crop&w=900&q=85"
  ]
};

function imageFor(category, index) {
  const images = productImages[category] || productImages["Ricuras"];
  return images[index % images.length];
}

// ==========================================
// PRODUCTOS
// ==========================================

const products = [

["Hamburguesas","Clásica",12000,"Carne de res, queso, papa ripio, lechuga, tomate y cebolla a la plancha.","🍔"],
["Hamburguesas","JP Burger",14000,"Carne de res, queso, papa ripio, lechuga, tomate, cebolla, tocineta y maíz tierno.","🍔"],
["Hamburguesas","JP Súper Queso",16000,"Carne de res, doble queso y queso gratinado, papa ripio, lechuga y tomate.","🧀"],
["Hamburguesas","Champi Burger",18000,"Carne de res, queso, champiñones en salsa, lechuga, tomate y papa ripio.","🍔"],
["Hamburguesas","Burger Chicken",17000,"Pechuga de pollo apanada, crujiente y jugosa, con queso, lechuga, tomate, papa ripio y salsas.","🍗"],
["Hamburguesas","Burger Campesina",18000,"Carne desmechada, tocineta, queso, papa ripio, lechuga, tomate y salsas.","🍔"],
["Hamburguesas","Burger Súper Campesina",20000,"Carne y pollo desmechados, huevo frito, queso, maíz, papa ripio y salsas.","🍳"],
["Hamburguesas","Burger Argentina",19000,"Carne a la parrilla con chimichurri, chorizo, queso, lechuga, tomate y papa ripio.","🥩"],
["Hamburguesas","Doble Carne",18000,"Doble carne de res, queso, lechuga, tomate, papa ripio y salsas.","🍔"],

["Ricuras","Tosticarne",16000,"Patacón con carne desmechada, maíz tierno, maduro y queso derretido.","🍌"],
["Ricuras","Churrasquito",18000,"Carne de res a la plancha, maíz tierno, maduro, ensalada dulce y papas o chips.","🥩"],
["Ricuras","Pechuga",17000,"Pechuga de pollo a la plancha, maíz tierno, ensalada dulce y papas o chips.","🍗"],
["Ricuras","Costillas BBQ",20000,"Costillas de cerdo en salsa BBQ, ensalada dulce y papas o chips.","🍖"],
["Ricuras","Tosti Camarón",21000,"Camarones al ajillo con queso, ensalada dulce y papas o chips.","🍤"],
["Ricuras","Lomo de Cerdo",18000,"Carne de cerdo a la plancha con ensalada dulce y papas o chips.","🥩"],
["Ricuras","Tosti Cono",20000,"Cono de patacón con carne y pollo desmechado, maíz tierno, queso, chicharrón y salsas.","🌮"],
["Ricuras","Churrasquito Encebollado",20000,"Carne de res con cebolla salteada, ensalada dulce y papas o chips.","🥩"],
["Ricuras","Lomo de Cerdo en Champiñones",20000,"Lomo de cerdo en salsa cremosa de champiñones, ensalada dulce y papas.","🍄"],
["Ricuras","Pechuga Explosión de Queso",20000,"Pechuga con abundante queso derretido, ensalada dulce y papas.","🧀"],
["Ricuras","Crepes Pollo Champiñón",18000,"Crepes rellenos de pollo y champiñones en salsa cremosa con papas.","🥞"],
["Ricuras","Super Tosti",20000,"Carne desmechada, pollo desmechado, chorizo, salchicha y queso derretido.","🍽️"],
["Ricuras","Tosti Mixto",18000,"Pollo y carne desmechada con queso derretido.","🍽️"],

["Perros calientes","Perro Americano",10000,"Salchicha, queso, papa ripio y salsas.","🌭"],
["Perros calientes","Perro Súper JP",13000,"Salchicha, queso, papa ripio, maíz, tocineta y salsas.","🌭"],
["Perros calientes","Perro Combo JP",16000,"Salchicha, carne desmechada, queso, papa ripio, maíz, papas y salsas.","🌭"],
["Perros calientes","Perro Campesino",16000,"Salchicha, carne desmechada, tocineta, queso, papa ripio y salsas.","🌭"],

["Salchipapas","Salchipapa",12000,"Papas a la francesa con salchicha, queso y salsas.","🍟"],
["Salchipapas","Súper Papas",15000,"Papas, salchicha, chorizo, tocineta, queso, papa ripio y salsas.","🍟"],
["Salchipapas","Súper Papas Especial",19000,"Papas, salchicha, chorizo, carne desmechada, queso, maíz y salsas.","🍟"],

["Dorilocos","Dorilocos Clásicos",10000,"Doritos con salchicha, maíz, queso rallado y salsas.","🌮"],
["Dorilocos","Dorilocos Especiales",13000,"Doritos con carne desmechada, salchicha, maíz, queso y salsas.","🌮"],
["Dorilocos","Dorilocos JP",15000,"Doritos con carne, pollo, maíz, queso, tocineta y salsas.","🌮"],
["Dorilocos","Dorilocos Ranchero",17000,"Doritos con chorizo, tocineta, carne y pollo desmechados, salchicha, maíz, queso derretido y salsas.","🌮"],

["Flautas","Flautas de Pollo",12000,"Tortillas fritas rellenas de pollo con lechuga, queso y salsas.","🌯"],
["Flautas","Flautas de Carne",12000,"Tortillas fritas rellenas de carne desmechada con lechuga, queso y salsas.","🌯"],
["Flautas","Flautas Mixtas",14000,"Tortillas fritas rellenas de carne y pollo con queso y salsas.","🌯"],
["Flautas","Flauta Dulce de Queso y Bocadillo",10000,"Tortilla crujiente rellena de queso derretido y bocadillo.","🧀"],

["Lasañas","Lasaña de Carne",18000,"Capas de pasta con carne desmechada en salsa, queso derretido y gratinado al horno.","🍝"],
["Lasañas","Lasaña de Pollo",18000,"Pollo desmechado en salsa cremosa, capas de pasta y abundante queso gratinado.","🍝"],
["Lasañas","Lasaña Mixta",20000,"Carne y pollo desmechados con salsa, capas de pasta y queso gratinado.","🍝"],
["Lasañas","Lasaña Pollo Champiñón",20000,"Pollo desmechado con champiñones en salsa cremosa y queso gratinado.","🍄"],
["Lasañas","Lasaña Explosión de Queso",19000,"Capas de pasta con mezcla de quesos derretidos y gratinados, súper cremosa.","🧀"],
["Lasañas","Lasaña Especial JP",22000,"Carne, pollo, tocineta, maíz y queso gratinado.","🍝"],

["Burritos","Burrito de Carne",15000,"Tortilla rellena de carne desmechada, queso, maíz, lechuga, tomate y salsas.","🌯"],
["Burritos","Burrito de Pollo",15000,"Tortilla rellena de pollo desmechado, queso, maíz, lechuga, tomate y salsas.","🌯"],
["Burritos","Burrito Mixto",17000,"Tortilla rellena de carne y pollo desmechados, queso, maíz, lechuga, tomate y salsas.","🌯"],
["Burritos","Burrito Especial JP",19000,"Carne, pollo, tocineta, maíz, queso, lechuga, tomate y salsas de la casa.","🌯"],

["Adicionales","Porción de papas",6000,"Porción de papas a la francesa.","🍟"],
["Adicionales","Chips de plátano",7000,"Rodajas de plátano verde fritas.","🍌"],
["Adicionales","Queso extra",2000,"Porción adicional de queso.","🧀"],
["Adicionales","Carne extra",4000,"Porción adicional de carne.","🥩"],
["Adicionales","Pollo extra",4000,"Porción adicional de pollo.","🍗"],
["Adicionales","Chorizo",5000,"Porción adicional de chorizo.","🌭"],
["Adicionales","Huevo frito",2000,"Huevo frito adicional.","🍳"],
["Adicionales","Maíz tierno",2000,"Porción adicional de maíz tierno.","🌽"],
["Adicionales","Guacamole",3000,"Porción adicional de guacamole.","🥑"],

["Bebidas","Gaseosa 400 ml",4500,"Gaseosa personal.","🥤"],
["Bebidas","Gaseosa 1.5 L",8000,"Gaseosa presentación 1.5 litros.","🥤"],
["Bebidas","Gaseosa 3 L",12500,"Gaseosa presentación 3 litros.","🥤"],
["Bebidas","Jugo en agua",4000,"Jugo preparado en agua.","🧃"],
["Bebidas","Jugo en leche",5000,"Jugo preparado en leche.","🥛"]

].map((p,i)=>({
  id:i,
  category:p[0],
  name:p[1],
  price:p[2],
  description:p[3],
  emoji:p[4],
  image:imageFor(p[0],i)
}));

// ==========================================
// CONFIGURACIÓN
// ==========================================

const money = n => new Intl.NumberFormat("es-CO", {
  style:"currency",
  currency:"COP",
  maximumFractionDigits:0
}).format(n);

let activeCategory = "Todos";
let cart = {};

const categories = [
  "Todos",
  ...new Set(products.map(p=>p.category))
];

const $ = id => document.getElementById(id);

// ==========================================
// CATEGORÍAS
// ==========================================

function renderCategories() {
  $("categories").innerHTML = categories.map(c => `
    <button class="category ${c===activeCategory?"active":""}"
      data-category="${c}">
      ${c}
    </button>
  `).join("");
}

// ==========================================
// PRODUCTOS
// ==========================================

function renderProducts() {
  const q = $("search").value.trim().toLocaleLowerCase("es");

  const list = products.filter(p =>
    (activeCategory==="Todos" || p.category===activeCategory) &&
    (`${p.name} ${p.description} ${p.category}`)
      .toLocaleLowerCase("es")
      .includes(q)
  );

  $("products").innerHTML = list.length
    ? list.map(p => `
      <article class="product">
        <div class="product-photo">
          <img
            src="${p.image}"
            alt="${p.name}"
            loading="lazy"
            onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback')"
          >
          <span class="photo-emoji">${p.emoji}</span>
          <span class="product-category">${p.category}</span>
        </div>

        <div class="product-content">
          <h3>${p.name}</h3>
          <p>${p.description}</p>

          <div class="product-bottom">
            <span class="price">${money(p.price)}</span>
            <button class="add" data-add="${p.id}">
              + Agregar
            </button>
          </div>
        </div>
      </article>
    `).join("")
    : `<div class="no-results">
        No encontramos productos con esa búsqueda.
      </div>`;
}

// ==========================================
// CARRITO
// ==========================================

function renderCart() {
  const entries = Object.values(cart);

  const qty = entries.reduce((s,x)=>s+x.qty,0);
  const total = entries.reduce((s,x)=>s+x.qty*x.product.price,0);

  $("itemCount").textContent = qty;
  $("total").textContent = money(total);
  $("sendWhatsApp").disabled = !entries.length;

  $("cart").classList.toggle("empty",!entries.length);

  $("cart").innerHTML = entries.length
    ? entries.map(({product:p,qty}) => `
      <div class="cart-row">
        <div>
          <div class="cart-name">${p.name}</div>
          <div class="cart-price">
            ${money(p.price)} · ${money(p.price*qty)}
          </div>
        </div>

        <div class="qty">
          <button data-dec="${p.id}" aria-label="Quitar uno">−</button>
          <span>${qty}</span>
          <button data-inc="${p.id}" aria-label="Agregar uno">+</button>
        </div>
      </div>
    `).join("")
    : `
      <div class="empty-icon">🛍️</div>
      <strong>Tu pedido está vacío</strong>
      <p>Agrega productos desde el menú.</p>
    `;
}

function add(id) {
  const p = products.find(x => x.id === Number(id));
  if (!p) return;

  if (!cart[id]) cart[id] = {product:p,qty:0};
  cart[id].qty++;

  renderCart();
}

function changeQty(id,d) {
  if (!cart[id]) return;

  cart[id].qty += d;

  if (cart[id].qty<=0) delete cart[id];

  renderCart();
}

function clear() {
  cart = {};
  renderCart();
}

// ==========================================
// ENVIAR PEDIDO A WHATSAPP
// ==========================================

function sendWhatsApp() {
  const entries = Object.values(cart);
  if (!entries.length) return;

  const total = entries.reduce(
    (s,x)=>s+x.qty*x.product.price,0
  );

  const type = $("orderType").value;
  const customer = $("customer").value.trim() || "No indicado";
  const customerPhone = $("customerPhone").value.trim() || "No indicado";
  const paymentMethod = $("paymentMethod").value;

  const lines = [
    "🍔 *NUEVO PEDIDO - JP BURGER*",
    "",
    `👤 Cliente: ${customer}`,
    `📞 Teléfono: ${customerPhone}`,
    `🛵 Tipo de pedido: ${type}`,
    `💳 Método de pago: ${paymentMethod}`
  ];

  if (type === "Domicilio") {
    lines.push(
      `📍 Dirección: ${$("address").value.trim() || "Por confirmar"}`
    );
  }

  lines.push("", "*PRODUCTOS*");

  entries.forEach(({product:p,qty}) => {
    lines.push(`• ${qty} x ${p.name} — ${money(p.price*qty)}`);
  });

  lines.push("", `💰 *TOTAL: ${money(total)}*`);

  if ($("notes").value.trim()) {
    lines.push("", `📝 Observaciones: ${$("notes").value.trim()}`);
  }

  lines.push("", "Gracias por elegir JP Burger.");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

  window.open(url,"_blank","noopener");
}

// ==========================================
// EVENTOS
// ==========================================

$("categories").addEventListener("click",e=>{
  const b = e.target.closest("[data-category]");
  if (!b) return;

  activeCategory = b.dataset.category;
  renderCategories();
  renderProducts();
});

$("products").addEventListener("click",e=>{
  const b = e.target.closest("[data-add]");
  if (b) add(b.dataset.add);
});

$("cart").addEventListener("click",e=>{
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");

  if (inc) changeQty(inc.dataset.inc,1);
  if (dec) changeQty(dec.dataset.dec,-1);
});

$("search").addEventListener("input",renderProducts);
$("sendWhatsApp").addEventListener("click",sendWhatsApp);
$("clearCart").addEventListener("click",clear);
$("clearCartTop").addEventListener("click",clear);

$("orderType").addEventListener("change",()=>{
  $("addressWrap").style.display =
    $("orderType").value === "Domicilio" ? "grid" : "none";
});

// ==========================================
// INICIAR SISTEMA
// ==========================================

renderCategories();
renderProducts();
renderCart();
