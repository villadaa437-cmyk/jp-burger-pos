
// ==========================================
// JP BURGER POS — SISTEMA DE PEDIDOS
// NEGRO + DORADO | SOLO EMOJIS
// WHATSAPP + IMPRESIÓN + RULETA DE PREMIOS
// ==========================================

const WHATSAPP_NUMBER = "573103114145";

const DELIVERY_FEE = 5000;
const PACKAGING_FEE = 1000;
const FRIES_VALUE = 6000;

// ==========================================
// CATÁLOGO DE PRODUCTOS
// ==========================================

const products = [
["Hamburguesas","Clásica",12000,"Carne de res, queso, papa ripio, lechuga, tomate y cebolla a la plancha.","🍔"],
["Hamburguesas","JP Burger",14000,"Carne de res, queso, papa ripio, lechuga, tomate, cebolla, tocineta y maíz tierno.","🍔"],
["Hamburguesas","JP Súper Queso",16000,"Carne de res, doble queso y queso gratinado, papa ripio, lechuga y tomate.","🧀"],
["Hamburguesas","Champi Burger",18000,"Carne de res, queso, champiñones en salsa, lechuga, tomate y papa ripio.","🍔"],
["Hamburguesas","Burger Chicken",17000,"Pechuga de pollo apanada, crujiente y jugosa, con queso, lechuga, tomate, papa ripio y salsas.","🍗"],
["Hamburguesas","Burger Campesina",18000,"Carne y pollo desmechados, tocineta, queso, papa ripio, lechuga, tomate y salsas.","🍔"],
["Hamburguesas","Burger Súper Campesina",20000,"Carne y pollo desmechados, huevo frito, queso, maíz, papa ripio y salsas.","🍳"],
["Hamburguesas","Burger Argentina",19000,"Carne a la parrilla con chimichurri, chorizo, queso, lechuga, tomate y papa ripio.","🥩"],
["Hamburguesas","Doble Carne",18000,"Doble carne de res, queso, lechuga, tomate, papa ripio y salsas.","🍔"],

["Ricuras","Tosticarne",16000,"Patacón con carne desmechada y queso derretido.","🍌"],
["Ricuras","Churrasquito",18000,"Carne de res a la plancha, maduro y ensalada dulce con papas.","🥩"],
["Ricuras","Pechuga",17000,"Pechuga de pollo a la plancha, ensalada dulce y papas o chips.","🍗"],
["Ricuras","Costillas BBQ",20000,"Costillas de cerdo en salsa BBQ, ensalada dulce y papas o chips.","🍖"],
["Ricuras","Tosti Camarón",21000,"Camarones al ajillo con queso.","🍤"],
["Ricuras","Lomo de Cerdo",18000,"Carne de cerdo a la plancha con ensalada dulce y papas o chips.","🥩"],
["Ricuras","Churrasquito Encebollado",20000,"Carne de res con cebolla salteada, ensalada dulce y papas o chips.","🥩"],
["Ricuras","Lomo de Cerdo en Champiñones",20000,"Lomo de cerdo en salsa cremosa de champiñones, ensalada dulce y papas.","🍄"],
["Ricuras","Pechuga Explosión de Queso",20000,"Pechuga con abundante queso derretido, ensalada dulce y papas.","🧀"],
["Ricuras","Crepes Pollo Champiñón",18000,"Crepes rellenos de pollo y champiñones en salsa cremosa con papas.","🥞"],
["Ricuras","Super Tosti",20000,"Carne desmechada, pollo desmechado, chorizo, salchicha y queso derretido.","🍽️"],
["Ricuras","Tosti Mixto",18000,"Pollo y carne desmechada con queso derretido.","🍽️"],

["Perros calientes","Perro Americano",10000,"Salchicha, queso, papa ripio y salsas.","🌭"],
["Perros calientes","Perro Súper JP",13000,"Salchicha, queso, papa ripio, maíz, tocineta y salsas.","🌭"],
["Perros calientes","Perro Combo JP",16000,"Salchicha, queso, papa ripio, maíz, papas y salsas.","🌭"],
["Perros calientes","Perro Campesino",16000,"Salchicha, carne desmechada, tocineta, queso, papa ripio y salsas.","🌭"],

["Salchipapas","Salchipapa",12000,"Papas a la francesa con salchicha, queso y salsas.","🍟"],
["Salchipapas","Súper Papas",15000,"Papas, salchicha, chorizo, tocineta, queso, maíz, papa ripio y salsas.","🍟"],
["Salchipapas","Súper Papas Especial",19000,"Papas, salchicha, chorizo, carne desmechada, queso, maíz y salsas.","🍟"],

["Dorilocos","Dorilocos Clásicos",10000,"Doritos con salchicha, maíz, queso rallado y salsas.","🌮"],
["Dorilocos","Dorilocos Especiales",13000,"Doritos con carne desmechada, salchicha, maíz, queso y salsas.","🌮"],
["Dorilocos","Dorilocos JP",15000,"Doritos con carne, pollo, maíz, queso, tocineta y salsas.","🌮"],
["Dorilocos","Dorilocos Ranchero",17000,"Doritos con chorizo, tocineta, carne y pollo desmechados, salchicha, maíz, queso derretido y salsas.","🌮"],

["Flautas","Flautas de Pollo",12000,"Tortillas fritas rellenas de pollo con queso y salsas.","🌯"],
["Flautas","Flautas de Carne",12000,"Tortillas fritas rellenas de carne desmechada con queso y salsas.","🌯"],
["Flautas","Flautas Mixtas",14000,"Tortillas fritas rellenas de carne y pollo con queso y salsas.","🌯"],
["Flautas","Flauta Dulce de Queso y Bocadillo",10000,"Tortilla crujiente rellena de queso derretido y bocadillo.","🧀"],

["Lasañas","Lasaña de Carne",18000,"Capas de pasta con carne desmechada en salsa, queso derretido y gratinado al horno.","🍝"],
["Lasañas","Lasaña de Pollo",18000,"Pollo desmechado en salsa cremosa, capas de pasta y abundante queso gratinado.","🍝"],
["Lasañas","Lasaña Mixta",20000,"Carne y pollo desmechados con salsa, capas de pasta y queso gratinado.","🍝"],
["Lasañas","Lasaña Pollo Champiñón",20000,"Pollo desmechado con champiñones en salsa cremosa y queso gratinado.","🍄"],
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
["Bebidas","Gaseosa 3 L",15000,"Gaseosa presentación 3 litros.","🥤"],
["Bebidas","Jugo en agua",7000,"Jugo preparado en agua.","🧃"],
["Bebidas","Jugo en leche",8000,"Jugo preparado en leche.","🥛"],
["Bebidas","Sodas",null,"Soda refrescante. Precio por definir.","🥤"],
["Bebidas","Limonadas naturales",null,"Limonada natural. Precio por definir.","🍋"],
["Bebidas","Jugo Hit",null,"Jugo Hit personal. Precio por definir.","🧃"]
].map((p,i)=>({
    id:i,
    category:p[0],
    name:p[1],
    price:p[2],
    description:p[3],
    emoji:p[4]
}));

// ==========================================
// PREMIOS DE LA RULETA
// ==========================================

const prizes = [
    {
        id:"discount10",
        name:"10% de descuento",
        emoji:"🎉",
        message:"¡FELICIDADES! Ganaste un 10% de descuento."
    },
    {
        id:"freeDelivery",
        name:"Domicilio gratis",
        emoji:"🛵",
        message:"¡FELICIDADES! Ganaste domicilio gratis."
    },
    {
        id:"discount2000",
        name:"$2.000 de descuento",
        emoji:"💰",
        message:"¡FELICIDADES! Ganaste $2.000 de descuento."
    },
    {
        id:"freeFries",
        name:"Papas gratis",
        emoji:"🍟",
        message:"¡FELICIDADES! Ganaste una porción de papas gratis."
    },
    {
        id:"nextTime",
        name:"Para la próxima",
        emoji:"🍀",
        message:"¡Gracias por participar! Será para la próxima."
    }
];

let activePrize = null;
let rouletteUsed = false;
let wheelRotation = 0;

// ==========================================
// CONFIGURACIÓN
// ==========================================

const money = n => new Intl.NumberFormat("es-CO", {
    style:"currency",
    currency:"COP",
    maximumFractionDigits:0
}).format(n);

const displayPrice = p =>
    p.price === null ? "Por definir" : money(p.price);

let activeCategory = "Todos";
let cart = {};

const categories = [
    "Todos",
    ...new Set(products.map(p=>p.category))
];

const $ = id => document.getElementById(id);

// ==========================================
// CÁLCULOS DEL PEDIDO
// ==========================================

function calculateOrder() {
    const entries = Object.values(cart);

    const quantity = entries.reduce((s,x)=>s+x.qty,0);

    const subtotal = entries.reduce(
        (s,x)=>s+x.qty*x.product.price,0
    );

    const packagingTotal = quantity * PACKAGING_FEE;

    const originalDeliveryFee =
        $("orderType").value === "Domicilio" ? DELIVERY_FEE : 0;

    let discount = 0;
    let deliveryFee = originalDeliveryFee;
    let freeFries = false;
    let prizeDescription = "Sin premio";

    if (activePrize) {
        prizeDescription = activePrize.name;

        switch (activePrize.id) {
            case "discount10":
                discount = Math.round(subtotal * 0.10);
                break;

            case "discount2000":
                discount = Math.min(2000,subtotal);
                break;

            case "freeDelivery":
                if (originalDeliveryFee > 0) {
                    deliveryFee = 0;
                }
                break;

            case "freeFries":
                freeFries = true;
                break;
        }
    }

    const total = Math.max(
        0,
        subtotal - discount + packagingTotal + deliveryFee
    );

    return {
        entries,
        quantity,
        subtotal,
        packagingTotal,
        originalDeliveryFee,
        deliveryFee,
        discount,
        freeFries,
        prizeDescription,
        total
    };
}

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
                <div class="product-top">
                    <span class="product-emoji">${p.emoji}</span>
                    <span class="eyebrow">${p.category}</span>
                </div>

                <h3>${p.name}</h3>
                <p>${p.description}</p>

                <div class="product-bottom">
                    <span class="price">${displayPrice(p)}</span>
                    <button class="add"
                        data-add="${p.id}"
                        ${p.price === null ? "disabled" : ""}>
                        ${p.price === null ? "Precio pendiente" : "+ Agregar"}
                    </button>
                </div>
            </article>
        `).join("")
        : `<div class="no-results">
            No encontramos productos con esa búsqueda.
        </div>`;
}

// ==========================================
// RULETA — INTERFAZ
// ==========================================

function createRoulette() {
    if ($("roulettePanel")) return;

    const panel = document.createElement("section");
    panel.id = "roulettePanel";

    panel.style.cssText = `
        margin-top:20px;
        padding:20px;
        border:1px solid rgba(214,168,75,.45);
        border-radius:18px;
        background:#151515;
        color:#fff;
        text-align:center;
    `;

    panel.innerHTML = `
        <style>
            #roulettePanel .roulette-title {
                color:#e8bd65;
                font-size:23px;
                font-weight:900;
                margin-bottom:5px;
            }

            #roulettePanel .roulette-subtitle {
                color:#bbb;
                font-size:13px;
                margin-bottom:18px;
            }

            #roulettePanel .wheel-wrap {
                position:relative;
                width:250px;
                max-width:100%;
                aspect-ratio:1;
                margin:0 auto 18px;
            }

            #roulettePanel .wheel-pointer {
                position:absolute;
                z-index:3;
                top:-5px;
                left:50%;
                transform:translateX(-50%);
                width:0;
                height:0;
                border-left:15px solid transparent;
                border-right:15px solid transparent;
                border-top:30px solid #fff;
                filter:drop-shadow(0 2px 3px #000);
            }

            #roulettePanel .wheel {
                width:100%;
                height:100%;
                border-radius:50%;
                border:7px solid #d6a84b;
                background:conic-gradient(
                    #e3ad42 0deg 72deg,
                    #252525 72deg 144deg,
                    #b77c24 144deg 216deg,
                    #303030 216deg 288deg,
                    #f0c66c 288deg 360deg
                );
                box-shadow:0 0 22px rgba(214,168,75,.3);
                transition:transform 5s cubic-bezier(.12,.75,.15,1);
                position:relative;
            }

            #roulettePanel .wheel-center {
                position:absolute;
                inset:35%;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#111;
                color:#e8bd65;
                border:4px solid #d6a84b;
                border-radius:50%;
                font-size:22px;
                font-weight:900;
            }

            #roulettePanel .wheel-labels {
                position:absolute;
                inset:0;
                pointer-events:none;
            }

            #roulettePanel .wheel-label {
                position:absolute;
                left:50%;
                top:50%;
                width:75px;
                margin-left:-37px;
                margin-top:-10px;
                color:#fff;
                font-size:10px;
                line-height:1.1;
                font-weight:900;
                text-shadow:0 1px 3px #000;
                text-align:center;
            }

            #roulettePanel .wheel-label:nth-child(1) {
                transform:rotate(0deg) translateY(-91px) rotate(0deg);
            }
            #roulettePanel .wheel-label:nth-child(2) {
                transform:rotate(72deg) translateY(-91px) rotate(-72deg);
            }
            #roulettePanel .wheel-label:nth-child(3) {
                transform:rotate(144deg) translateY(-91px) rotate(-144deg);
            }
            #roulettePanel .wheel-label:nth-child(4) {
                transform:rotate(216deg) translateY(-91px) rotate(-216deg);
            }
            #roulettePanel .wheel-label:nth-child(5) {
                transform:rotate(288deg) translateY(-91px) rotate(-288deg);
            }

            #roulettePanel .spin-button {
                border:0;
                border-radius:30px;
                padding:13px 28px;
                color:#151515;
                background:linear-gradient(135deg,#f4d58a,#bd842a);
                font-size:15px;
                font-weight:900;
                cursor:pointer;
            }

            #roulettePanel .spin-button:disabled {
                opacity:.5;
                cursor:not-allowed;
            }

            #roulettePanel .prize-result {
                margin-top:16px;
                padding:14px;
                border:1px solid #d6a84b;
                border-radius:12px;
                background:#211b10;
                color:#f4d58a;
                font-weight:800;
                line-height:1.5;
            }

            #roulettePanel .roulette-note {
                color:#aaa;
                font-size:11px;
                margin-top:12px;
            }
        </style>

        <div class="roulette-title">🎡 RULETA DE LA SUERTE</div>
        <div class="roulette-subtitle">
            ¡Gira y descubre qué premio tienes hoy!
        </div>

        <div class="wheel-wrap">
            <div class="wheel-pointer"></div>
            <div class="wheel" id="prizeWheel">
                <div class="wheel-labels">
                    <span class="wheel-label">10% OFF</span>
                    <span class="wheel-label">DOMICILIO<br>GRATIS</span>
                    <span class="wheel-label">$2.000<br>OFF</span>
                    <span class="wheel-label">PAPAS<br>GRATIS</span>
                    <span class="wheel-label">PARA LA<br>PRÓXIMA</span>
                </div>
                <div class="wheel-center">JP</div>
            </div>
        </div>

        <button type="button" class="spin-button" id="spinRoulette">
            🎁 GIRAR RULETA
        </button>

        <div class="prize-result" id="prizeResult" hidden></div>

        <div class="roulette-note">
            Una oportunidad por pedido. ¡Mucha suerte!
        </div>
    `;

    $("cart").insertAdjacentElement("afterend",panel);

    $("spinRoulette").addEventListener("click",spinRoulette);
}

function spinRoulette() {
    const button = $("spinRoulette");

    if (rouletteUsed) return;

    if (Object.keys(cart).length === 0) {
        alert("Primero agrega productos al pedido para participar.");
        return;
    }

    rouletteUsed = true;
    button.disabled = true;
    button.textContent = "🎡 GIRANDO...";

    const resultIndex = Math.floor(Math.random()*prizes.length);
    const selectedPrize = prizes[resultIndex];

    const degreesPerPrize = 360 / prizes.length;
    const targetAngle = 360 - (
        resultIndex * degreesPerPrize + degreesPerPrize / 2
    );

    wheelRotation += 360 * 6 + targetAngle;
    $("prizeWheel").style.transform =
        `rotate(${wheelRotation}deg)`;

    setTimeout(()=>{
        activePrize = selectedPrize;

        const result = $("prizeResult");
        result.hidden = false;
        result.innerHTML = `
            <div style="font-size:30px">${selectedPrize.emoji}</div>
            <div style="font-size:19px;margin:5px 0">
                ${selectedPrize.name}
            </div>
            <div>${selectedPrize.message}</div>
            <div style="font-size:12px;margin-top:7px;color:#ddd">
                El premio se ha registrado en este pedido.
            </div>
        `;

        button.textContent = "✅ PREMIO OBTENIDO";

        renderCart();
    },5100);
}

// ==========================================
// CARRITO Y TOTALES
// ==========================================

function renderCart() {
    const order = calculateOrder();

    $("itemCount").textContent = order.quantity;
    $("total").textContent = money(order.total);

    $("sendWhatsApp").disabled = !order.entries.length;
    $("printOrder").disabled = !order.entries.length;

    $("cart").classList.toggle("empty",!order.entries.length);

    $("cart").innerHTML = order.entries.length
        ? order.entries.map(({product:p,qty}) => `
            <div class="cart-row">
                <div>
                    <div class="cart-name">${p.emoji} ${p.name}</div>
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
        `).join("") + `
            <div class="cart-row">
                <span>Subtotal productos</span>
                <strong>${money(order.subtotal)}</strong>
            </div>

            <div class="cart-row">
                <span>📦 Empaques (${order.quantity} × ${money(PACKAGING_FEE)})</span>
                <strong>${money(order.packagingTotal)}</strong>
            </div>

            ${order.originalDeliveryFee > 0 ? `
                <div class="cart-row">
                    <span>🛵 Domicilio</span>
                    <strong>${money(order.originalDeliveryFee)}</strong>
                </div>
            ` : ""}

            ${order.discount > 0 ? `
                <div class="cart-row">
                    <span>🎉 Descuento de ruleta</span>
                    <strong>-${money(order.discount)}</strong>
                </div>
            ` : ""}

            ${order.deliveryFee === 0 && order.originalDeliveryFee > 0 ? `
                <div class="cart-row">
                    <span>🎁 Domicilio gratis</span>
                    <strong>-${money(DELIVERY_FEE)}</strong>
                </div>
            ` : ""}

            ${order.freeFries ? `
                <div class="cart-row">
                    <span>🍟 Papas gratis (obsequio)</span>
                    <strong>$0</strong>
                </div>
            ` : ""}

            ${activePrize ? `
                <div class="cart-row">
                    <span>🎡 Premio</span>
                    <strong>${activePrize.name}</strong>
                </div>
            ` : ""}

            <div class="cart-row">
                <strong>TOTAL</strong>
                <strong>${money(order.total)}</strong>
            </div>
        `
        : `
            <div class="empty-icon">🛍️</div>
            <strong>Tu pedido está vacío</strong>
            <p>Agrega productos desde el menú.</p>
        `;

    createRoulette();
}

// ==========================================
// AGREGAR Y MODIFICAR PRODUCTOS
// ==========================================

function add(id) {
    const p = products.find(x => x.id === Number(id));

    if (!p || p.price === null) {
        alert("Este producto todavía no tiene un precio definido.");
        return;
    }

    if (!cart[id]) {
        cart[id] = {product:p,qty:0};
    }

    cart[id].qty++;
    renderCart();
}

function changeQty(id,d) {
    if (!cart[id]) return;

    cart[id].qty += d;

    if (cart[id].qty<=0) {
        delete cart[id];
    }

    renderCart();
}

function clear() {
    cart = {};
    activePrize = null;
    rouletteUsed = false;
    wheelRotation = 0;

    renderCart();

    $("prizeWheel").style.transform = "rotate(0deg)";
    $("spinRoulette").disabled = false;
    $("spinRoulette").textContent = "🎁 GIRAR RULETA";
    $("prizeResult").hidden = true;
    $("prizeResult").innerHTML = "";
}

// ==========================================
// DATOS DEL PEDIDO
// ==========================================

function getOrderData() {
    const calculated = calculateOrder();

    return {
        ...calculated,
        customer: $("customer").value.trim() || "No indicado",
        phone: $("customerPhone").value.trim() || "No indicado",
        type: $("orderType").value,
        payment: $("paymentMethod").value,
        address: $("address").value.trim() || "Por confirmar",
        notes: $("notes").value.trim() || "Sin observaciones",
        date: new Date().toLocaleString("es-CO")
    };
}

// ==========================================
// WHATSAPP
// ==========================================

function sendWhatsApp() {
    const order = getOrderData();

    if (!order.entries.length) return;

    const lines = [
        "🍔 *NUEVO PEDIDO - JP BURGER*",
        "",
        `👤 Cliente: ${order.customer}`,
        `📞 Teléfono: ${order.phone}`,
        `🛵 Tipo de pedido: ${order.type}`,
        `💳 Método de pago: ${order.payment}`
    ];

    if (order.type === "Domicilio") {
        lines.push(`📍 Dirección: ${order.address}`);
    }

    lines.push("", "*PRODUCTOS*");

    order.entries.forEach(({product:p,qty}) => {
        lines.push(
            `• ${p.emoji} ${qty} x ${p.name} — ${money(p.price*qty)}`
        );
    });

    lines.push("");
    lines.push(`🧾 Subtotal productos: ${money(order.subtotal)}`);
    lines.push(`📦 Empaques (${order.quantity} × ${money(PACKAGING_FEE)}): ${money(order.packagingTotal)}`);

    if (order.originalDeliveryFee > 0) {
        lines.push(`🛵 Domicilio: ${money(order.originalDeliveryFee)}`);
    }

    if (order.discount > 0) {
        lines.push(`🎉 Descuento aplicado: -${money(order.discount)}`);
    }

    if (activePrize?.id === "freeDelivery") {
        if (order.originalDeliveryFee > 0) {
            lines.push("🎁 Premio: DOMICILIO GRATIS");
        } else {
            lines.push("🎁 Premio obtenido: DOMICILIO GRATIS (no aplica a pedido para recoger)");
        }
    }

    if (order.freeFries) {
        lines.push("🍟 Premio: UNA PORCIÓN DE PAPAS GRATIS");
    }

    if (activePrize?.id === "nextTime") {
        lines.push("🍀 Premio: ¡Para la próxima!");
    }

    if (activePrize) {
        lines.push(`🎡 Resultado de la ruleta: ${activePrize.name}`);
    }

    lines.push("");
    lines.push(`💰 *TOTAL: ${money(order.total)}*`);

    if (order.notes !== "Sin observaciones") {
        lines.push("", `📝 Observaciones: ${order.notes}`);
    }

    lines.push("", "Gracias por elegir JP Burger.");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    window.open(url,"_blank","noopener");
}

// ==========================================
// IMPRIMIR PEDIDO
// ==========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function printOrder() {
    const order = getOrderData();

    if (!order.entries.length) return;

    const ticket = window.open("", "_blank", "width=420,height=750");

    if (!ticket) {
        alert("Permite las ventanas emergentes para imprimir el pedido.");
        return;
    }

    const productRows = order.entries.map(({product,qty}) => `
        <div class="product">
            <div class="product-name">
                <strong>${qty} x ${escapeHTML(product.name)}</strong>
                <small>${money(product.price)} unidad</small>
            </div>
            <strong>${money(product.price * qty)}</strong>
        </div>
    `).join("");

    let prizeRows = "";

    if (activePrize) {
        prizeRows += `
            <p><strong>🎡 Premio:</strong> ${escapeHTML(activePrize.name)}</p>
        `;
    }

    if (order.discount > 0) {
        prizeRows += `
            <p><strong>🎉 Descuento:</strong> -${money(order.discount)}</p>
        `;
    }

    if (activePrize?.id === "freeDelivery") {
        prizeRows += order.originalDeliveryFee > 0
            ? `<p><strong>🎁 Domicilio gratis:</strong> -${money(DELIVERY_FEE)}</p>`
            : `<p><strong>🎁 Domicilio gratis:</strong> No aplicado (pedido para recoger)</p>`;
    }

    if (order.freeFries) {
        prizeRows += `<p><strong>🍟 Obsequio:</strong> Una porción de papas gratis</p>`;
    }

    if (activePrize?.id === "nextTime") {
        prizeRows += `<p><strong>🍀 Mensaje:</strong> ¡Para la próxima!</p>`;
    }

    ticket.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Comanda JP BURGER</title>

            <style>
                * { box-sizing:border-box; }

                body {
                    width:300px;
                    margin:0 auto;
                    padding:15px 10px;
                    color:#111;
                    background:#fff;
                    font-family:Arial,sans-serif;
                    font-size:12px;
                }

                .header {
                    text-align:center;
                    padding-bottom:13px;
                    border-bottom:2px dashed #222;
                }

                .logo { font-size:30px; }

                h1 {
                    margin:5px 0;
                    font-size:25px;
                    letter-spacing:2px;
                }

                .subtitle {
                    margin:4px 0;
                    font-weight:bold;
                    letter-spacing:1px;
                }

                .date {
                    margin-top:8px;
                    font-size:10px;
                }

                .section {
                    padding:11px 0;
                    border-bottom:1px dashed #777;
                }

                .section p {
                    margin:5px 0;
                    line-height:1.4;
                }

                .section-title {
                    margin-bottom:10px;
                    font-weight:bold;
                    letter-spacing:1px;
                }

                .product {
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    gap:8px;
                    margin:10px 0;
                }

                .product-name {
                    display:flex;
                    flex-direction:column;
                    gap:3px;
                }

                .product small {
                    color:#555;
                    font-size:10px;
                }

                .total {
                    display:flex;
                    justify-content:space-between;
                    padding:14px 0;
                    font-size:19px;
                    font-weight:bold;
                }

                .footer {
                    padding-top:13px;
                    text-align:center;
                    border-top:2px dashed #222;
                    line-height:1.5;
                }

                @page { margin:5mm; }

                @media print {
                    body {
                        width:100%;
                        margin:0;
                        padding:0;
                    }
                }
            </style>
        </head>

        <body>
            <div class="header">
                <div class="logo">🍔</div>
                <h1>JP BURGER</h1>
                <div class="subtitle">COMANDA DE PEDIDO</div>
                <div class="date">${escapeHTML(order.date)}</div>
            </div>

            <div class="section">
                <p><strong>Cliente:</strong> ${escapeHTML(order.customer)}</p>
                <p><strong>Teléfono:</strong> ${escapeHTML(order.phone)}</p>
                <p><strong>Tipo:</strong> ${escapeHTML(order.type)}</p>
                ${order.type === "Domicilio"
                    ? `<p><strong>Dirección:</strong> ${escapeHTML(order.address)}</p>`
                    : ""}
                <p><strong>Pago:</strong> ${escapeHTML(order.payment)}</p>
            </div>

            <div class="section">
                <div class="section-title">DETALLE DEL PEDIDO</div>
                ${productRows}
            </div>

            <div class="section">
                <p><strong>Subtotal productos:</strong> ${money(order.subtotal)}</p>
                <p><strong>Empaques (${order.quantity} × ${money(PACKAGING_FEE)}):</strong> ${money(order.packagingTotal)}</p>
                ${order.originalDeliveryFee > 0
                    ? `<p><strong>Domicilio:</strong> ${money(order.originalDeliveryFee)}</p>`
                    : ""}
                ${prizeRows}
            </div>

            <div class="total">
                <span>TOTAL</span>
                <span>${money(order.total)}</span>
            </div>

            <div class="section">
                <strong>OBSERVACIONES</strong>
                <p>${escapeHTML(order.notes)}</p>
            </div>

            <div class="footer">
                <strong>¡GRACIAS POR ELEGIR JP BURGER!</strong>
                <p>Calidad y sabor que te hacen volver.</p>
            </div>
        </body>
        </html>
    `);

    ticket.document.close();
    ticket.onload = () => ticket.print();
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
$("printOrder").addEventListener("click",printOrder);
$("clearCart").addEventListener("click",clear);
$("clearCartTop").addEventListener("click",clear);

$("orderType").addEventListener("change",()=>{
    $("addressWrap").style.display =
        $("orderType").value === "Domicilio" ? "grid" : "none";

    renderCart();
});

// ==========================================
// INICIAR SISTEMA
// ==========================================

$("addressWrap").style.display =
    $("orderType").value === "Domicilio" ? "grid" : "none";

renderCategories();
renderProducts();
renderCart();
