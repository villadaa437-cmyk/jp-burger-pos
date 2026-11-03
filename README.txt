# JP Burger POS

## Cómo abrirlo
1. Descarga y descomprime `jp_burger_pos.zip`.
2. Abre la carpeta `jp_burger_pos`.
3. Haz doble clic en `index.html` para abrir el sistema en Chrome, Edge o Firefox.
4. Agrega productos al pedido, completa los datos y pulsa **Enviar pedido por WhatsApp**.
5. WhatsApp Web o la aplicación abrirá el mensaje preparado. El usuario debe confirmar el envío.

## Número de WhatsApp
El proyecto está configurado para `+57 310 311 4145`.
En `app.js`, cambia `WHATSAPP_NUMBER` si el número cambia. Debe escribirse con código de país, solo números. Colombia: 57 + número.

## Archivos
- `index.html`: estructura de la aplicación.
- `styles.css`: diseño adaptable a computador, tablet y celular.
- `app.js`: catálogo, carrito, totales y generación del mensaje de WhatsApp.

## Editar productos y precios
En `app.js`, modifica el arreglo `products`. Cada producto usa:
`["Categoría", "Nombre", precio_en_pesos, "Descripción", "Emoji"]`

## Importante
- Esta es una primera versión local: no tiene usuarios, base de datos, inventario persistente ni sincronización entre dispositivos.
- Los pedidos se envían mediante un enlace oficial `wa.me` con texto precargado. No se envían solos; WhatsApp requiere que la persona pulse Enviar.
- Verifica los precios del catálogo contra tu carta impresa antes de empezar a vender. Los precios fueron transcritos de la carta y algunos textos pequeños pueden requerir confirmación.
- Para usarlo desde varios dispositivos y guardar ventas/inventario, se debe añadir backend y base de datos, y publicarlo en un hosting.
