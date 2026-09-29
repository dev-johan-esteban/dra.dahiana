// import React, { useState, useEffect } from 'react';
// import { ShoppingCart, Menu, X, ArrowRight, Plus, Minus, Trash2, Crown, Sparkles, Check, Gem, Zap, Flame } from 'lucide-react';

// // --- DATA: CLOTHING (FRONTEO / HIGH-END URBAN) ---
// const CLOTHING_PRODUCTS = [
//   {
//     id: 'c1', type: 'clothing',
//     name: 'Oversized Signature Hoodie', price: '$185.00',
//     image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
//     description: 'Hoodie de corte oversized en algodón pesado de 450gsm. La pieza definitiva para destacar en la calle. Puro fronteo con detalles que brillan en la oscuridad.',
//     category: 'Premium Hoodies', rating: 5.0, isFeatured: true, badge: 'VIP EXCLUSIVE'
//   },
//   {
//     id: 'c2', type: 'clothing',
//     name: 'Tactical Cargo Pant 2.0', price: '$210.00',
//     image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=800&q=80',
//     description: 'Sarga italiana reforzada con herrajes de titanio negro. Bolsillos tácticos diseñados para los que manejan el negocio.',
//     category: 'Heavy Bottoms', rating: 4.9, isFeatured: true, badge: 'LIMITED DROP'
//   },
//   {
//     id: 'c3', type: 'clothing',
//     name: 'Heavyweight Boxy Tee', price: '$95.00',
//     image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
//     description: 'No es una camiseta, es una armadura de algodón. Bordado en hilo de plata 925 en el pecho.',
//     category: 'T-Shirts', rating: 4.8, isFeatured: true, badge: 'MOST WANTED'
//   },
//   {
//     id: 'c4', type: 'clothing',
//     name: 'Phantom Trainers X-1', price: '$380.00',
//     image: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&w=800&q=80',
//     description: 'Pisa fuerte. Diseño arquitectónico con cápsula de aire visible y detalles en cian reflectante. Imposible pasar desapercibido.',
//     category: 'Footwear', rating: 5.0, isFeatured: true, badge: 'SOLD OUT SOON'
//   },
//   {
//     id: 'c5', type: 'clothing',
//     name: 'Armored Puffer Vest', price: '$250.00',
//     image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80',
//     description: 'Chaleco nivel VIP. Acabado mate balístico, estructura imponente que ensancha la espalda. Para los jefes.',
//     category: 'Outerwear', rating: 4.7, isFeatured: false, badge: 'VIP'
//   },
//   {
//     id: 'c6', type: 'clothing',
//     name: 'Nylon Tech Windbreaker', price: '$215.00',
//     image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80',
//     description: 'Cortavientos con tecnología aeroespacial. Costuras termoselladas y un brillo metálico sutil a la luz de los faroles.',
//     category: 'Outerwear', rating: 4.8, isFeatured: false, badge: 'STREET'
//   },
//   {
//     id: 'c7', type: 'clothing',
//     name: 'Monogram Snapback', price: '$85.00',
//     image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
//     description: 'La corona de la calle. Gorra estructurada con el diamante JOYA en placa de metal oscuro en el frente.',
//     category: 'Accessories', rating: 4.9, isFeatured: false, badge: 'ESSENTIAL'
//   }
// ];

// // --- DATA: BARBER SERVICES (Luxury Untouched) ---
// const BARBER_SERVICES = [
//   {
//     id: 'b1', type: 'service',
//     name: 'Corte Diamante LA JOYA', price: '$45.00',
//     image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
//     description: 'La experiencia definitiva. Asesoría de imagen, corte de precisión, lavado premium, y peinado con productos de alta gama.',
//     category: 'Cortes', rating: 5.0, duration: '45 min'
//   },
//   {
//     id: 'b2', type: 'service',
//     name: 'Perfilado Zafiro (Barba)', price: '$30.00',
//     image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
//     description: 'Ritual tradicional con toalla caliente, aromaterapia, perfilado con navaja e hidratación con aceites esenciales.',
//     category: 'Barba', rating: 4.9, duration: '30 min'
//   },
//   {
//     id: 'b3', type: 'service',
//     name: 'Ritual Platino (Corte + Barba)', price: '$70.00',
//     image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
//     description: 'El servicio completo para el caballero moderno. Incluye el Corte Diamante, Perfilado Zafiro y una mascarilla purificante.',
//     category: 'Paquetes', rating: 5.0, duration: '1h 20 min'
//   },
//   {
//     id: 'b4', type: 'service',
//     name: 'Camuflaje Premium', price: '$55.00',
//     image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
//     description: 'Tinte sutil para barba o cabello que cubre las canas manteniendo un aspecto 100% natural y elegante.',
//     category: 'Colorimetría', rating: 4.8, duration: '40 min'
//   }
// ];

// const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

// export default function App() {
//   const [activeView, setActiveView] = useState('ropa'); // 'ropa' or 'barberia'
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('L');
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   useEffect(() => {
//     if (selectedItem || isCartOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [selectedItem, isCartOpen]);

//   const handleAddToCart = () => {
//     if (!selectedItem) return;

//     setCartItems(prev => {
//       const isService = selectedItem.type === 'service';
//       const existingItem = prev.find(item => 
//         item.data.id === selectedItem.id && (isService || item.size === selectedSize)
//       );

//       if (existingItem) {
//         return prev.map(item => 
//           item.data.id === selectedItem.id && (isService || item.size === selectedSize)
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { 
//         data: selectedItem, 
//         size: isService ? null : selectedSize, 
//         quantity: 1, 
//         cartId: Date.now() 
//       }];
//     });

//     setAddedToCart(true);
//     setTimeout(() => {
//       setAddedToCart(false);
//       setSelectedItem(null);
//       setIsCartOpen(true);
//     }, 600);
//   };

//   const updateQuantity = (cartId, delta) => {
//     setCartItems(prev => prev.map(item => {
//       if (item.cartId === cartId) {
//         const newQuantity = Math.max(1, item.quantity + delta);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     }));
//   };

//   const removeFromCart = (cartId) => {
//     setCartItems(prev => prev.filter(item => item.cartId !== cartId));
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce((total, item) => {
//       const price = parseFloat(item.data.price.replace('$', ''));
//       return total + (price * item.quantity);
//     }, 0);
//   };

//   const handleCheckout = () => {
//     if (cartItems.length === 0) return;
//     let message = "💎 *NUEVO PEDIDO / RESERVA - LA JOYA VIP* 💎\n\nHola, quiero solicitar lo siguiente:\n\n";
//     const clothes = cartItems.filter(i => i.data.type === 'clothing');
//     const services = cartItems.filter(i => i.data.type === 'service');

//     if (clothes.length > 0) {
//       message += "👕 *COLECCIÓN EXCLUSIVA:*\n";
//       clothes.forEach(item => {
//         const priceStr = parseFloat(item.data.price.replace('$', ''));
//         message += `▪ ${item.quantity}x ${item.data.name} (Talla: *${item.size}*) - $${(priceStr * item.quantity).toFixed(2)}\n`;
//       });
//       message += "\n";
//     }

//     if (services.length > 0) {
//       message += "💈 *BARBERÍA PREMIUM:*\n";
//       services.forEach(item => {
//         const priceStr = parseFloat(item.data.price.replace('$', ''));
//         message += `▪ ${item.quantity}x ${item.data.name} - $${(priceStr * item.quantity).toFixed(2)}\n`;
//       });
//       message += "\n";
//     }
    
//     message += `*Total estimado: $${getCartTotal().toFixed(2)}*\n\nQuedo atento para confirmar el pago. ¡Gracias!`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappNumber = "573000000000"; 
//     window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden">
      
//       {/* Navigation */}
//       <nav className="fixed w-full z-50 top-0 left-0 bg-neutral-950/80 backdrop-blur-xl border-b border-cyan-900/40 shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
//               <img 
//                 src="image_0d8ce0.jpg" 
//                 alt="LA JOYA Logo" 
//                 className="h-12 w-12 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
//               />
//               <span className="font-black text-2xl tracking-[0.2em] text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
//                 LA <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">JOYA</span>
//               </span>
//             </div>

//             {/* View Switcher (Center) */}
//             <div className="hidden md:flex gap-6 items-center">
//               <button 
//                 onClick={() => setActiveView('ropa')}
//                 className={`px-6 py-2 uppercase tracking-[0.2em] font-black text-xs transition-all duration-300 rounded-sm flex items-center gap-2 ${
//                   activeView === 'ropa' 
//                     ? 'bg-gradient-to-r from-cyan-600 to-blue-900 text-white shadow-[0_0_20px_rgba(34,211,238,0.6)] border border-cyan-400' 
//                     : 'text-neutral-500 border border-transparent hover:text-cyan-400'
//                 }`}
//               >
//                 <Flame size={16} className={activeView === 'ropa' ? 'text-white' : 'hidden'} />
//                 Streetwear VIP
//               </button>
//               <button 
//                 onClick={() => setActiveView('barberia')}
//                 className={`px-6 py-2 rounded-full font-serif font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 ${
//                   activeView === 'barberia' 
//                     ? 'bg-gradient-to-r from-cyan-600 via-cyan-300 to-cyan-600 text-black shadow-[0_0_15px_rgba(103,232,249,0.4)]' 
//                     : 'text-neutral-500 border border-transparent hover:text-cyan-300'
//                 }`}
//               >
//                 <Gem size={14} className={activeView === 'barberia' ? 'text-black' : 'text-neutral-500'} />
//                 Barbería Premium
//               </button>
//             </div>

//             {/* Icons */}
//             <div className="flex items-center space-x-6">
//               <button 
//                 className="text-white hover:text-cyan-400 transition-colors relative group"
//                 onClick={() => setIsCartOpen(true)}
//               >
//                 <ShoppingCart size={26} strokeWidth={2} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
//                 {cartItems.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-[11px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.8)]">
//                     {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//                   </span>
//                 )}
//               </button>
              
//               <button 
//                 className="md:hidden text-white hover:text-cyan-400 transition-colors"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-cyan-900/50 absolute w-full z-50">
//             <div className="flex flex-col p-4 gap-4">
//               <button 
//                 onClick={() => { setActiveView('ropa'); setIsMobileMenuOpen(false); }}
//                 className={`w-full py-4 text-center uppercase font-black tracking-[0.2em] text-sm border ${
//                   activeView === 'ropa' ? 'bg-cyan-900/30 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'border-neutral-800 text-neutral-500'
//                 }`}
//               >
//                 Streetwear VIP
//               </button>
//               <button 
//                 onClick={() => { setActiveView('barberia'); setIsMobileMenuOpen(false); }}
//                 className={`w-full py-4 rounded-full text-center font-serif font-bold uppercase tracking-widest text-sm flex justify-center items-center gap-2 border ${
//                   activeView === 'barberia' ? 'bg-cyan-900/30 border-cyan-300 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'border-neutral-800 text-neutral-500'
//                 }`}
//               >
//                 <Gem size={16} /> Barbería Premium
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {activeView === 'ropa' && (
//         <div className="animate-in fade-in duration-700 bg-neutral-950 min-h-screen mt-20 relative z-20">
          
//           {/* Ropa Hero - SUPERCAR / LUXURY DRIP & FULL VIBRANT BACKGROUND */}
//           <section className="relative h-[88vh] flex flex-col items-center justify-center overflow-hidden border-b-4 border-cyan-400/50 shadow-[0_15px_50px_rgba(34,211,238,0.3)]">
            
//             {/* Vivid Background Image - High-end supercar in cyan neon urban atmosphere */}
//             <div className="absolute inset-0 z-0 overflow-hidden">
//               <img 
//                 src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2070&q=80" 
//                 alt="Exotic Supercar Luxury Night Vibe" 
//                 className="w-full h-full object-cover object-center filter contrast-125 saturate-125 scale-105"
//               />
//               {/* Subtle top & bottom edge blend without blacking out the center */}
//               <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/25 to-black/60"></div>
//               {/* Radial Cyan Glow for the Brand Diamond Vibe */}
//               <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
//             </div>
            
//             <div className="relative z-10 w-full px-4 text-center flex flex-col items-center mt-6">
              
//               {/* Floating Glowing Badge */}
//               <div className="inline-flex items-center gap-3 px-8 py-3 border-2 border-cyan-300 bg-black/60 backdrop-blur-md text-cyan-200 font-black tracking-[0.3em] text-sm md:text-base mb-6 rounded-sm shadow-[0_0_35px_rgba(34,211,238,0.9)] animate-pulse">
//                 <Crown size={20} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" /> 
//                 <span className="drop-shadow-[0_0_10px_rgba(34,211,238,1)] text-white">SOLO PARA JEFES</span>
//                 <Gem size={18} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
//               </div>
              
//               {/* Massive Title with Heavy Contrast */}
//               <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] uppercase leading-none tracking-tighter mb-4 px-2">
//                 ALTA GAMA
//               </h1>
              
//               {/* Subtext in Glass Pill */}
//               <p className="text-white font-black text-sm md:text-xl uppercase tracking-[0.35em] mb-12 max-w-3xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,1)] bg-black/60 backdrop-blur-md py-3 px-8 rounded-lg border border-cyan-500/40 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
//                 NO ES ROPA. ES ESTATUS. <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">COLECCIÓN EXCLUSIVA.</span>
//               </p>
              
//               {/* Bouncing Animated Button */}
//               <button 
//                 onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
//                 className="group relative overflow-hidden bg-black/80 backdrop-blur-xl text-white font-black uppercase text-base md:text-xl px-14 py-6 tracking-[0.2em] transition-all hover:scale-110 shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_80px_rgba(34,211,238,1)] border-2 border-cyan-400 rounded-sm animate-bounce cursor-pointer"
//               >
//                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite]"></div>
//                 <span className="relative z-10 flex items-center gap-4 drop-shadow-[0_0_15px_rgba(34,211,238,1)] text-cyan-300">
//                   VER LOS DROPS <ArrowRight size={28} className="group-hover:translate-x-4 transition-transform duration-300" />
//                 </span>
//               </button>
//             </div>
//           </section>

//           {/* Ropa Featured Carousel - Premium Glass Cases */}
//           <section className="py-24 relative z-20 bg-neutral-950 overflow-hidden">
//             {/* Neon backglows */}
//             <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px] -translate-y-1/2"></div>
//             <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2"></div>

//             <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//               <div className="mb-16 flex flex-col items-center text-center">
//                 <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
//                   VIP <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">RELEASES</span>
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"></div>
//               </div>

//               <div className="flex overflow-x-auto gap-8 pb-16 pt-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-12">
//                 {CLOTHING_PRODUCTS.filter(p => p.isFeatured).map((product) => (
//                   <div 
//                     key={product.id} 
//                     className="min-w-[300px] md:min-w-[420px] flex-none snap-center group cursor-pointer relative bg-neutral-900/60 backdrop-blur-xl border-2 border-neutral-800 p-4 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] rounded-xl hover:-translate-y-2"
//                     onClick={() => setSelectedItem(product)}
//                   >
//                     {/* Badge */}
//                     <div className="absolute top-6 left-6 z-20 bg-cyan-500 text-black font-black text-[11px] px-4 py-1.5 shadow-[0_0_15px_rgba(34,211,238,1)] uppercase tracking-widest rounded-sm border border-cyan-200">
//                       {product.badge}
//                     </div>

//                     <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-950 mb-6 border border-neutral-800/50 group-hover:border-cyan-500/30 transition-all">
//                       <img 
//                         src={product.image} 
//                         alt={product.name} 
//                         className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                      
//                       <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
//                         <span className="bg-white/10 backdrop-blur-md border border-cyan-400 text-cyan-300 font-bold px-6 py-2 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(34,211,238,0.5)]">
//                           Inspeccionar Pieza
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="text-center px-4 relative z-10">
//                       <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-md">{product.name}</h3>
//                       <p className="text-2xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">{product.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Ropa Full Catalog - Fronteo Grid */}
//           <section id="catalogo" className="py-24 bg-neutral-950 border-t-2 border-neutral-900 relative z-20">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//               <div className="mb-20 flex flex-col items-center text-center">
//                 <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-neutral-300">
//                   TODA LA <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">BÓVEDA</span>
//                 </h2>
//                 <div className="w-16 h-1 bg-neutral-700 mt-4"></div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//                 {CLOTHING_PRODUCTS.map((product) => (
//                   <div key={product.id} className="group cursor-pointer flex flex-col bg-neutral-900/30 border border-neutral-800 hover:border-cyan-500 p-3 rounded-lg hover:bg-neutral-900/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]" onClick={() => setSelectedItem(product)}>
//                     <div className="relative aspect-square overflow-hidden rounded-md bg-black mb-4">
//                       {product.badge && (
//                         <div className="absolute top-3 left-3 z-20 bg-neutral-800 text-cyan-400 font-bold text-[9px] px-2 py-1 uppercase tracking-widest border border-cyan-900 shadow-lg">
//                           {product.badge}
//                         </div>
//                       )}
//                       <img 
//                         src={product.image} 
//                         alt={product.name} 
//                         className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500" 
//                       />
//                       <button className="absolute bottom-4 right-4 bg-cyan-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20">
//                         <Plus size={20} strokeWidth={3} />
//                       </button>
//                     </div>
//                     <div className="flex-grow flex flex-col px-2">
//                       <p className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
//                       <h3 className="text-base font-black text-white uppercase tracking-tight mb-2 line-clamp-1">{product.name}</h3>
//                       <p className="text-lg font-bold text-neutral-300">{product.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Creator Signature */}
//               <div className="mt-32 pt-16 border-t border-neutral-900 flex flex-col items-center justify-center text-center">
//                 <div className="w-10 h-10 border-2 border-cyan-900 bg-cyan-950/30 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
//                   <span className="text-cyan-400 text-lg font-black italic">J</span>
//                 </div>
//                 <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-2 font-bold">
//                   Creador de landing page
//                 </p>
//                 <h3 className="text-xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
//                   Johan Cañola
//                 </h3>
//               </div>
//             </div>
//           </section>
//         </div>
//       )}

//       {activeView === 'barberia' && (
//         <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 bg-black mt-20 relative z-20">
//           <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-cyan-900/30">
//             <div className="absolute inset-0 z-0">
//               <img 
//                 src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1920&q=80" 
//                 alt="Luxury Barber" 
//                 className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black"></div>
//             </div>

//             <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 flex flex-col items-center">
//               <div className="relative inline-flex flex-col items-center justify-center mb-6">
//                 <Crown className="text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] -mb-2 z-10" size={28} />
//                 <Gem className="text-cyan-300 drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]" size={64} />
//               </div>
//               <h2 className="text-cyan-300 font-serif tracking-[0.3em] uppercase text-sm md:text-base mb-4 drop-shadow-[0_0_8px_rgba(103,232,249,0.4)]">
//                 Grooming de Alto Nivel
//               </h2>
//               <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-200 to-cyan-600 mb-6 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(103,232,249,0.2)]">
//                 Club Privado
//               </h1>
//               <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
//                 Más que un corte, un ritual. Experimenta la barbería de lujo donde el detalle y la excelencia son nuestra única norma.
//               </p>
//               <button 
//                 onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
//                 className="border border-cyan-300/50 hover:border-cyan-300 text-cyan-300 hover:text-black hover:bg-cyan-300 font-serif uppercase px-12 py-4 transition-all duration-500 tracking-[0.2em] text-xs shadow-[inset_0_0_20px_rgba(103,232,249,0.1)] hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] rounded-full"
//               >
//                 Ver Servicios
//               </button>
//             </div>
//           </section>

//           <section id="servicios" className="py-24 bg-black relative">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black z-0"></div>
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//               <div className="text-center mb-20">
//                 <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest text-white mb-6">
//                   Menú de <span className="text-cyan-300 italic">Servicios</span>
//                 </h2>
//                 <div className="w-16 h-[1px] bg-cyan-300 mx-auto shadow-[0_0_10px_rgba(103,232,249,0.8)]"></div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 {BARBER_SERVICES.map((service) => (
//                   <div 
//                     key={service.id} 
//                     className="flex flex-col sm:flex-row gap-6 bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-cyan-300/50 transition-all duration-500 group cursor-pointer hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] rounded-xl"
//                     onClick={() => setSelectedItem(service)}
//                   >
//                     <div className="w-full sm:w-1/3 aspect-square sm:aspect-[3/4] overflow-hidden relative border border-white/10 rounded-md">
//                       <img src={service.image} alt={service.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
//                       <div className="absolute bottom-3 left-3 flex items-center gap-1 text-cyan-300 text-xs font-serif tracking-widest uppercase drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]">
//                         <Check size={12} /> {service.duration}
//                       </div>
//                     </div>
                    
//                     <div className="w-full sm:w-2/3 flex flex-col justify-center">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-xl font-serif text-zinc-100 uppercase tracking-wide group-hover:text-cyan-300 transition-colors pr-4">{service.name}</h3>
//                         <span className="text-xl font-serif text-cyan-300 drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]">{service.price}</span>
//                       </div>
//                       <div className="w-full border-b border-cyan-900/30 border-dashed my-3"></div>
//                       <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 font-sans">
//                         {service.description}
//                       </p>
//                       <button className="mt-auto self-start text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-300 flex items-center gap-2 transition-colors font-sans">
//                         Reservar <ArrowRight size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Creator Signature (Barberia) */}
//               <div className="mt-24 pt-12 border-t border-cyan-900/30 flex flex-col items-center justify-center text-center">
//                 <Gem className="text-cyan-300/50 mb-4" size={24} />
//                 <p className="text-cyan-300/60 text-xs tracking-[0.4em] uppercase font-serif mb-3">
//                   Creador de landing page
//                 </p>
//                 <h3 className="text-2xl font-serif text-zinc-300 uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(103,232,249,0.2)]">
//                   Johan Cañola
//                 </h3>
//               </div>
//             </div>
//           </section>
//         </div>
//       )}

//       {selectedItem && (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-black/90">
//           <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)}></div>

//           <div className={`relative w-full max-h-[95vh] overflow-y-auto flex flex-col md:flex-row z-10 overflow-hidden ${
//             selectedItem.type === 'clothing' 
//               ? 'bg-neutral-900 border-2 border-cyan-500/50 max-w-5xl shadow-[0_0_60px_rgba(34,211,238,0.3)] animate-in fade-in zoom-in-95 duration-300 rounded-xl' 
//               : 'bg-zinc-950 border border-cyan-300/30 max-w-5xl shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-xl animate-in fade-in zoom-in-95 duration-300'
//           }`}>
            
//             <button 
//               onClick={() => setSelectedItem(null)}
//               className={`absolute top-4 right-4 z-30 flex items-center justify-center p-2 transition-all ${
//                 selectedItem.type === 'clothing'
//                   ? 'bg-black/60 hover:bg-cyan-500 text-white hover:text-black rounded-full backdrop-blur-md border border-cyan-500/50 shadow-lg'
//                   : 'bg-black/50 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-sm border border-zinc-800'
//               }`}
//             >
//               <X size={20} strokeWidth={2} />
//             </button>

//             {/* Modal Image */}
//             <div className={`w-full md:w-1/2 relative bg-black ${selectedItem.type === 'clothing' ? 'border-r border-cyan-900/50' : 'min-h-[40vh] md:min-h-0'}`}>
//               <img 
//                 src={selectedItem.image} 
//                 alt={selectedItem.name}
//                 className={`absolute inset-0 w-full h-full object-cover ${selectedItem.type === 'service' ? 'grayscale-[0.3]' : 'brightness-90'}`}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
//               <div className={`absolute top-6 left-6 px-4 py-2 ${
//                 selectedItem.type === 'clothing' 
//                   ? 'bg-cyan-500 text-black text-[11px] font-black border border-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-sm' 
//                   : 'bg-black/80 backdrop-blur-md border border-cyan-300/30 rounded-sm text-cyan-300 text-xs'
//               }`}>
//                 <span className={`uppercase tracking-[0.2em] ${selectedItem.type === 'barberia' ? 'font-serif' : ''}`}>
//                   {selectedItem.category}
//                 </span>
//               </div>
//             </div>

//             {/* Modal Info */}
//             <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative ${
//               selectedItem.type === 'clothing' ? 'bg-neutral-950/90 backdrop-blur-xl' : 'bg-[#050505]'
//             }`}>
              
//               {/* Background accent for clothing */}
//               {selectedItem.type === 'clothing' && (
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none"></div>
//               )}

//               <h2 className={`uppercase mb-4 leading-tight relative z-10 ${
//                 selectedItem.type === 'clothing' 
//                   ? 'text-4xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-md' 
//                   : 'text-3xl md:text-4xl font-serif tracking-widest text-zinc-100'
//               }`}>
//                 {selectedItem.name}
//               </h2>
              
//               <p className={`mb-8 relative z-10 ${
//                 selectedItem.type === 'clothing' 
//                   ? 'text-3xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]' 
//                   : 'text-3xl font-serif text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.3)]'
//               }`}>
//                 {selectedItem.price}
//               </p>
              
//               <p className={`mb-10 relative z-10 ${
//                 selectedItem.type === 'clothing' 
//                   ? 'text-neutral-300 font-bold tracking-wide text-sm leading-relaxed border-l-2 border-cyan-500 pl-4 py-1 bg-gradient-to-r from-cyan-900/20 to-transparent' 
//                   : 'text-zinc-400 font-light font-serif tracking-wide text-sm leading-relaxed'
//               }`}>
//                 {selectedItem.description}
//               </p>

//               {/* Size Selector (Clothing Only) */}
//               {selectedItem.type === 'clothing' && (
//                 <div className="mb-12 relative z-10">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Selecciona Talla</span>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {SIZES.map(size => (
//                       <button
//                         key={size}
//                         onClick={() => setSelectedSize(size)}
//                         className={`w-14 h-14 flex items-center justify-center text-sm font-black transition-all border-2 rounded-md shadow-lg ${
//                           selectedSize === size 
//                             ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-110' 
//                             : 'bg-neutral-900/80 border-neutral-700 text-neutral-400 hover:border-cyan-500 hover:text-white hover:bg-neutral-800'
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Service Details (Barberia Only) */}
//               {selectedItem.type === 'service' && (
//                 <div className="mb-10 p-4 border border-cyan-900/30 bg-cyan-950/10 backdrop-blur-sm flex items-center gap-4 rounded-md">
//                   <Gem className="text-cyan-300" />
//                   <div>
//                     <p className="text-xs text-cyan-300/70 uppercase tracking-widest font-serif mb-1">Duración Estimada</p>
//                     <p className="text-zinc-200 font-serif">{selectedItem.duration}</p>
//                   </div>
//                 </div>
//               )}

//               <div className="flex flex-col gap-4 mt-auto relative z-10">
//                 <button 
//                   onClick={handleAddToCart}
//                   disabled={addedToCart}
//                   className={`w-full py-5 uppercase flex items-center justify-center gap-4 transition-all tracking-[0.2em] text-sm rounded-sm ${
//                     addedToCart 
//                       ? 'bg-green-500 text-black font-black shadow-[0_0_20px_rgba(34,197,94,0.6)]' 
//                       : selectedItem.type === 'clothing'
//                         ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] border border-cyan-400'
//                         : 'bg-cyan-300 text-black hover:bg-cyan-200 font-serif font-bold shadow-[0_0_20px_rgba(103,232,249,0.4)] duration-300'
//                   }`}
//                 >
//                   {addedToCart ? (
//                     <>
//                       <Check size={20} strokeWidth={3} /> ¡ASEGURADO!
//                     </>
//                   ) : (
//                     <>
//                       {selectedItem.type === 'clothing' ? <Zap size={20} strokeWidth={2.5} className="fill-current" /> : <Check size={18} />}
//                       {selectedItem.type === 'clothing' ? 'Añadir a la Bóveda' : 'Agregar Reserva'}
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isCartOpen && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] transition-opacity" onClick={() => setIsCartOpen(false)}></div>
//       )}

//       <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-neutral-950 border-l-2 border-cyan-900/50 z-[80] shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-300 ease-out flex flex-col ${
//         isCartOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950 relative overflow-hidden">
//           {/* Subtle cart background glow */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-[50px] pointer-events-none"></div>
          
//           <h2 className="text-base uppercase tracking-[0.3em] flex items-center gap-3 text-white font-black relative z-10">
//             Tu Bóveda
//             <span className="bg-cyan-500 text-black rounded-full h-6 w-6 flex items-center justify-center text-[11px] ml-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]">
//               {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//             </span>
//           </h2>
//           <button onClick={() => setIsCartOpen(false)} className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 rounded-full relative z-10 hover:bg-neutral-900">
//             <X size={24} strokeWidth={2} />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-hide bg-neutral-950">
//           {cartItems.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-neutral-600 space-y-6">
//               <ShoppingCart size={56} strokeWidth={1} className="text-neutral-800 drop-shadow-md" />
//               <p className="uppercase font-bold tracking-[0.2em] text-sm text-neutral-500">Bóveda vacía</p>
//             </div>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.cartId} className={`flex gap-4 p-3 relative group bg-neutral-900/50 backdrop-blur-md rounded-lg ${
//                 item.data.type === 'clothing' 
//                   ? 'border border-neutral-700 hover:border-cyan-500 shadow-md' 
//                   : 'border border-cyan-900/30'
//               }`}>
//                 <div className="relative w-20 h-24 rounded-md overflow-hidden bg-black">
//                   <img src={item.data.image} alt={item.data.name} className={`absolute inset-0 w-full h-full object-cover ${
//                     item.data.type === 'clothing' ? 'brightness-90' : 'grayscale-[0.5]'
//                   }`} />
//                 </div>
                
//                 <div className="flex-1 flex flex-col py-1">
//                   <div className="flex justify-between items-start">
//                     <h3 className={`text-xs pr-8 leading-tight uppercase ${
//                       item.data.type === 'clothing' ? 'font-black text-white tracking-tight' : 'font-serif text-zinc-300 tracking-wider'
//                     }`}>
//                       {item.data.name}
//                     </h3>
//                     <button onClick={() => removeFromCart(item.cartId)} className="absolute top-3 right-3 text-neutral-500 hover:text-red-500 transition-colors bg-neutral-950/80 rounded-full p-1">
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
                  
//                   <p className={`text-sm mt-1 ${item.data.type === 'clothing' ? 'text-cyan-400 font-bold tracking-widest' : 'text-cyan-300 font-serif'}`}>
//                     {item.data.price}
//                   </p>
                  
//                   {item.size && (
//                     <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">
//                       Talla: <span className="text-white bg-neutral-800 px-2 py-0.5 rounded-sm">{item.size}</span>
//                     </p>
//                   )}
//                   {item.data.type === 'service' && (
//                     <p className="text-cyan-300/60 text-[10px] uppercase tracking-widest mt-1 font-serif">
//                       Reserva Barbería
//                     </p>
//                   )}
                  
//                   <div className="mt-auto flex items-center gap-3">
//                     <div className={`flex items-center bg-neutral-950 rounded-md overflow-hidden ${item.data.type === 'clothing' ? 'border border-neutral-700' : 'border border-zinc-800'}`}>
//                       <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2 hover:bg-neutral-800 text-cyan-500 transition-colors"><Minus size={14} strokeWidth={2.5}/></button>
//                       <span className="w-8 text-center text-sm font-black text-white">{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2 hover:bg-neutral-800 text-cyan-500 transition-colors"><Plus size={14} strokeWidth={2.5}/></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div className="p-6 border-t border-neutral-800 bg-neutral-950 relative">
//             <div className="flex justify-between items-end mb-6 relative z-10">
//               <span className="text-neutral-400 font-black uppercase tracking-widest text-xs">Total a Pagar</span>
//               <span className={`text-3xl ${
//                 cartItems.some(i => i.data.type === 'clothing') ? 'text-white font-black tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'font-serif text-cyan-300'
//               }`}>
//                 ${getCartTotal().toFixed(2)}
//               </span>
//             </div>
            
//             <button 
//               onClick={handleCheckout}
//               className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 transition-all text-sm rounded-sm shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] relative z-10"
//             >
//               Pagar por WhatsApp
//             </button>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ArrowRight, Plus, Minus, Trash2, Crown, Sparkles, Check, Gem, Zap, Flame } from 'lucide-react';

// --- DATA: CLOTHING (FRONTEO / HIGH-END URBAN) ---
const CLOTHING_PRODUCTS = [
  {
    id: 'c1', type: 'clothing',
    name: 'Oversized Signature Hoodie', price: '$185.00',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    description: 'Hoodie de corte oversized en algodón pesado de 450gsm. La pieza definitiva para destacar en la calle. Puro fronteo con detalles que brillan en la oscuridad.',
    category: 'Premium Hoodies', rating: 5.0, isFeatured: true, badge: 'VIP EXCLUSIVE'
  },
  {
    id: 'c2', type: 'clothing',
    name: 'Tactical Cargo Pant 2.0', price: '$210.00',
    image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=800&q=80',
    description: 'Sarga italiana reforzada con herrajes de titanio negro. Bolsillos tácticos diseñados para los que manejan el negocio.',
    category: 'Heavy Bottoms', rating: 4.9, isFeatured: true, badge: 'LIMITED DROP'
  },
  {
    id: 'c3', type: 'clothing',
    name: 'Heavyweight Boxy Tee', price: '$95.00',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'No es una camiseta, es una armadura de algodón. Bordado en hilo de plata 925 en el pecho.',
    category: 'T-Shirts', rating: 4.8, isFeatured: true, badge: 'MOST WANTED'
  },
  {
    id: 'c4', type: 'clothing',
    name: 'Phantom Trainers X-1', price: '$380.00',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&w=800&q=80',
    description: 'Pisa fuerte. Diseño arquitectónico con cápsula de aire visible y detalles en cian reflectante. Imposible pasar desapercibido.',
    category: 'Footwear', rating: 5.0, isFeatured: true, badge: 'SOLD OUT SOON'
  },
  {
    id: 'c5', type: 'clothing',
    name: 'Armored Puffer Vest', price: '$250.00',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80',
    description: 'Chaleco nivel VIP. Acabado mate balístico, estructura imponente que ensancha la espalda. Para los jefes.',
    category: 'Outerwear', rating: 4.7, isFeatured: false, badge: 'VIP'
  },
  {
    id: 'c6', type: 'clothing',
    name: 'Nylon Tech Windbreaker', price: '$215.00',
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80',
    description: 'Cortavientos con tecnología aeroespacial. Costuras termoselladas y un brillo metálico sutil a la luz de los faroles.',
    category: 'Outerwear', rating: 4.8, isFeatured: false, badge: 'STREET'
  },
  {
    id: 'c7', type: 'clothing',
    name: 'Monogram Snapback', price: '$85.00',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'La corona de la calle. Gorra estructurada con el diamante JOYA en placa de metal oscuro en el frente.',
    category: 'Accessories', rating: 4.9, isFeatured: false, badge: 'ESSENTIAL'
  }
];

// --- DATA: BARBER SERVICES (Luxury Untouched) ---
const BARBER_SERVICES = [
  {
    id: 'b1', type: 'service',
    name: 'Corte Diamante LA JOYA', price: '$45.00',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    description: 'La experiencia definitiva. Asesoría de imagen, corte de precisión, lavado premium, y peinado con productos de alta gama.',
    category: 'Cortes', rating: 5.0, duration: '45 min'
  },
  {
    id: 'b2', type: 'service',
    name: 'Perfilado Zafiro (Barba)', price: '$30.00',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    description: 'Ritual tradicional con toalla caliente, aromaterapia, perfilado con navaja e hidratación con aceites esenciales.',
    category: 'Barba', rating: 4.9, duration: '30 min'
  },
  {
    id: 'b3', type: 'service',
    name: 'Ritual Platino (Corte + Barba)', price: '$70.00',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'El servicio completo para el caballero moderno. Incluye el Corte Diamante, Perfilado Zafiro y una mascarilla purificante.',
    category: 'Paquetes', rating: 5.0, duration: '1h 20 min'
  },
  {
    id: 'b4', type: 'service',
    name: 'Camuflaje Premium', price: '$55.00',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    description: 'Tinte sutil para barba o cabello que cubre las canas manteniendo un aspecto 100% natural y elegante.',
    category: 'Colorimetría', rating: 4.8, duration: '40 min'
  }
];

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export default function App() {
  const [activeView, setActiveView] = useState('ropa'); // 'ropa' or 'barberia'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (selectedItem || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem, isCartOpen]);

  const handleAddToCart = () => {
    if (!selectedItem) return;

    setCartItems(prev => {
      const isService = selectedItem.type === 'service';
      const existingItem = prev.find(item => 
        item.data.id === selectedItem.id && (isService || item.size === selectedSize)
      );

      if (existingItem) {
        return prev.map(item => 
          item.data.id === selectedItem.id && (isService || item.size === selectedSize)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        data: selectedItem, 
        size: isService ? null : selectedSize, 
        quantity: 1, 
        cartId: Date.now() 
      }];
    });

    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
      setSelectedItem(null);
      setIsCartOpen(true);
    }, 600);
  };

  const updateQuantity = (cartId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.data.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    let message = "💎 *NUEVO PEDIDO / RESERVA - LA JOYA VIP* 💎\n\nHola, quiero solicitar lo siguiente:\n\n";
    const clothes = cartItems.filter(i => i.data.type === 'clothing');
    const services = cartItems.filter(i => i.data.type === 'service');

    if (clothes.length > 0) {
      message += "👕 *COLECCIÓN EXCLUSIVA:*\n";
      clothes.forEach(item => {
        const priceStr = parseFloat(item.data.price.replace('$', ''));
        message += `▪ ${item.quantity}x ${item.data.name} (Talla: *${item.size}*) - $${(priceStr * item.quantity).toFixed(2)}\n`;
      });
      message += "\n";
    }

    if (services.length > 0) {
      message += "💈 *BARBERÍA PREMIUM:*\n";
      services.forEach(item => {
        const priceStr = parseFloat(item.data.price.replace('$', ''));
        message += `▪ ${item.quantity}x ${item.data.name} - $${(priceStr * item.quantity).toFixed(2)}\n`;
      });
      message += "\n";
    }
    
    message += `*Total estimado: $${getCartTotal().toFixed(2)}*\n\nQuedo atento para confirmar el pago. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "573000000000"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-neutral-950/80 backdrop-blur-xl border-b border-cyan-900/40 shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              {/* Fallback diamond icon if image fails to load */}
              <div className="h-12 w-12 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center bg-black">
                <Gem size={24} className="text-cyan-400" />
              </div>
              <span className="font-black text-2xl tracking-[0.2em] text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                LA <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">JOYA</span>
              </span>
            </div>

            {/* View Switcher (Center) */}
            <div className="hidden md:flex gap-6 items-center">
              <button 
                onClick={() => setActiveView('ropa')}
                className={`px-6 py-2 uppercase tracking-[0.2em] font-black text-xs transition-all duration-300 rounded-sm flex items-center gap-2 ${
                  activeView === 'ropa' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-900 text-white shadow-[0_0_20px_rgba(34,211,238,0.6)] border border-cyan-400' 
                    : 'text-neutral-500 border border-transparent hover:text-cyan-400'
                }`}
              >
                <Flame size={16} className={activeView === 'ropa' ? 'text-white' : 'hidden'} />
                Streetwear VIP
              </button>
              <button 
                onClick={() => setActiveView('barberia')}
                className={`px-6 py-2 rounded-full font-serif font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 ${
                  activeView === 'barberia' 
                    ? 'bg-gradient-to-r from-cyan-600 via-cyan-300 to-cyan-600 text-black shadow-[0_0_15px_rgba(103,232,249,0.4)]' 
                    : 'text-neutral-500 border border-transparent hover:text-cyan-300'
                }`}
              >
                <Gem size={14} className={activeView === 'barberia' ? 'text-black' : 'text-neutral-500'} />
                Barbería Premium
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="text-white hover:text-cyan-400 transition-colors relative group"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={26} strokeWidth={2} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-[11px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-cyan-900/50 absolute w-full z-50">
            <div className="flex flex-col p-4 gap-4">
              <button 
                onClick={() => { setActiveView('ropa'); setIsMobileMenuOpen(false); }}
                className={`w-full py-4 text-center uppercase font-black tracking-[0.2em] text-sm border ${
                  activeView === 'ropa' ? 'bg-cyan-900/30 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'border-neutral-800 text-neutral-500'
                }`}
              >
                Streetwear VIP
              </button>
              <button 
                onClick={() => { setActiveView('barberia'); setIsMobileMenuOpen(false); }}
                className={`w-full py-4 rounded-full text-center font-serif font-bold uppercase tracking-widest text-sm flex justify-center items-center gap-2 border ${
                  activeView === 'barberia' ? 'bg-cyan-900/30 border-cyan-300 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'border-neutral-800 text-neutral-500'
                }`}
              >
                <Gem size={16} /> Barbería Premium
              </button>
            </div>
          </div>
        )}
      </nav>

      {}
      {activeView === 'ropa' && (
        <div className="animate-in fade-in duration-700 bg-neutral-950 min-h-screen mt-20 relative z-20">
          
          {/* Ropa Hero - SUPERCAR / LUXURY DRIP & FULL VIBRANT BACKGROUND */}
          <section className="relative h-[88vh] flex flex-col items-center justify-center overflow-hidden border-b-4 border-cyan-400/50 shadow-[0_15px_50px_rgba(34,211,238,0.3)]">
            
            {/* Vivid Background Image - High-end supercar in cyan neon urban atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2070&q=80" 
                alt="Exotic Supercar Luxury Night Vibe" 
                className="w-full h-full object-cover object-center filter contrast-125 saturate-125 scale-105"
              />
              {/* Subtle top & bottom edge blend without blacking out the center */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/25 to-black/60"></div>
              {/* Radial Cyan Glow for the Brand Diamond Vibe */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
            </div>
            
            <div className="relative z-10 w-full px-4 text-center flex flex-col items-center mt-6">
              
              {/* Floating Glowing Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-3 border-2 border-cyan-300 bg-black/60 backdrop-blur-md text-cyan-200 font-black tracking-[0.3em] text-sm md:text-base mb-6 rounded-sm shadow-[0_0_35px_rgba(34,211,238,0.9)] animate-pulse">
                <Crown size={20} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" /> 
                <span className="drop-shadow-[0_0_10px_rgba(34,211,238,1)] text-white">SOLO PARA JEFES</span>
                <Gem size={18} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
              </div>
              
              {/* Massive Title with Heavy Contrast */}
              <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] uppercase leading-none tracking-tighter mb-4 px-2">
                ALTA GAMA
              </h1>
              
              {/* Subtext in Glass Pill */}
              <p className="text-white font-black text-sm md:text-xl uppercase tracking-[0.35em] mb-12 max-w-3xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,1)] bg-black/60 backdrop-blur-md py-3 px-8 rounded-lg border border-cyan-500/40 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                NO ES ROPA. ES ESTATUS. <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">COLECCIÓN EXCLUSIVA.</span>
              </p>
              
              {/* Bouncing Animated Button */}
              <button 
                onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-black/80 backdrop-blur-xl text-white font-black uppercase text-base md:text-xl px-14 py-6 tracking-[0.2em] transition-all hover:scale-110 shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:shadow-[0_0_80px_rgba(34,211,238,1)] border-2 border-cyan-400 rounded-sm animate-bounce cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite]"></div>
                <span className="relative z-10 flex items-center gap-4 drop-shadow-[0_0_15px_rgba(34,211,238,1)] text-cyan-300">
                  VER LOS DROPS <ArrowRight size={28} className="group-hover:translate-x-4 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </section>

          {/* Ropa Featured Carousel - Premium Glass Cases */}
          <section className="py-24 relative z-20 bg-neutral-950 overflow-hidden">
            {/* Neon backglows */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2"></div>

            <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-16 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  VIP <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">RELEASES</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"></div>
              </div>

              <div className="flex overflow-x-auto gap-8 pb-16 pt-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-12">
                {CLOTHING_PRODUCTS.filter(p => p.isFeatured).map((product) => (
                  <div 
                    key={product.id} 
                    className="min-w-[300px] md:min-w-[420px] flex-none snap-center group cursor-pointer relative bg-neutral-900/60 backdrop-blur-xl border-2 border-neutral-800 p-4 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] rounded-xl hover:-translate-y-2"
                    onClick={() => setSelectedItem(product)}
                  >
                    {/* Badge */}
                    <div className="absolute top-6 left-6 z-20 bg-cyan-500 text-black font-black text-[11px] px-4 py-1.5 shadow-[0_0_15px_rgba(34,211,238,1)] uppercase tracking-widest rounded-sm border border-cyan-200">
                      {product.badge}
                    </div>

                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-950 mb-6 border border-neutral-800/50 group-hover:border-cyan-500/30 transition-all">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                      
                      <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                        <span className="bg-white/10 backdrop-blur-md border border-cyan-400 text-cyan-300 font-bold px-6 py-2 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                          Inspeccionar Pieza
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center px-4 relative z-10">
                      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-md">{product.name}</h3>
                      <p className="text-2xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ropa Full Catalog - Fronteo Grid */}
          <section id="catalogo" className="py-24 bg-neutral-950 border-t-2 border-neutral-900 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="mb-20 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-neutral-300">
                  TODA LA <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">BÓVEDA</span>
                </h2>
                <div className="w-16 h-1 bg-neutral-700 mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {CLOTHING_PRODUCTS.map((product) => (
                  <div key={product.id} className="group cursor-pointer flex flex-col bg-neutral-900/30 border border-neutral-800 hover:border-cyan-500 p-3 rounded-lg hover:bg-neutral-900/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]" onClick={() => setSelectedItem(product)}>
                    <div className="relative aspect-square overflow-hidden rounded-md bg-black mb-4">
                      {product.badge && (
                        <div className="absolute top-3 left-3 z-20 bg-neutral-800 text-cyan-400 font-bold text-[9px] px-2 py-1 uppercase tracking-widest border border-cyan-900 shadow-lg">
                          {product.badge}
                        </div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500" 
                      />
                      <button className="absolute bottom-4 right-4 bg-cyan-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20">
                        <Plus size={20} strokeWidth={3} />
                      </button>
                    </div>
                    <div className="flex-grow flex flex-col px-2">
                      <p className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-base font-black text-white uppercase tracking-tight mb-2 line-clamp-1">{product.name}</h3>
                      <p className="text-lg font-bold text-neutral-300">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Creator Signature */}
              <div className="mt-32 pt-16 border-t border-neutral-900 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 border-2 border-cyan-900 bg-cyan-950/30 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <span className="text-cyan-400 text-lg font-black italic">J</span>
                </div>
                <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-2 font-bold">
                  Creador de landing page
                </p>
                <h3 className="text-xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Johan Cañola
                </h3>
              </div>
            </div>
          </section>
        </div>
      )}

      {}
      {activeView === 'barberia' && (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 bg-neutral-950 mt-20 relative z-20">
          
          {/* Barberia Hero - RESTORED IMAGE WITH PROPER VISIBILITY */}
          <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-cyan-900/30">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1920&q=80" 
                alt="Luxury Barber" 
                // Increased opacity to 40-50% so it's clearly visible, kept mix-blend for luxury vibe
                className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125"
              />
              {/* Lighter gradient overlay to ensure the image pops through while text remains readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 flex flex-col items-center">
              <div className="relative inline-flex flex-col items-center justify-center mb-6">
                <Crown className="text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] -mb-2 z-10" size={28} />
                <Gem className="text-cyan-300 drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]" size={64} />
              </div>
              <h2 className="text-cyan-300 font-serif tracking-[0.3em] uppercase text-sm md:text-base mb-4 drop-shadow-[0_0_8px_rgba(103,232,249,0.4)] bg-neutral-950/40 px-4 py-1 rounded-full backdrop-blur-sm">
                Grooming de Alto Nivel
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-200 to-cyan-600 mb-6 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(103,232,249,0.2)]">
                Club Privado
              </h1>
              <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed bg-neutral-950/40 backdrop-blur-md p-4 rounded-lg border border-cyan-900/30">
                Más que un corte, un ritual. Experimenta la barbería de lujo donde el detalle y la excelencia son nuestra única norma.
              </p>
              <button 
                onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 hover:border-cyan-300 text-cyan-300 hover:text-black hover:bg-cyan-300 font-serif uppercase px-12 py-4 transition-all duration-500 tracking-[0.2em] text-xs shadow-[0_0_20px_rgba(103,232,249,0.2)] hover:shadow-[0_0_30px_rgba(103,232,249,0.6)] rounded-full bg-neutral-950/50 backdrop-blur-sm"
              >
                Ver Servicios
              </button>
            </div>
          </section>

          <section id="servicios" className="py-24 bg-neutral-950 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-neutral-950 to-neutral-950 z-0"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest text-white mb-6">
                  Menú de <span className="text-cyan-300 italic">Servicios</span>
                </h2>
                <div className="w-16 h-[1px] bg-cyan-300 mx-auto shadow-[0_0_10px_rgba(103,232,249,0.8)]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {BARBER_SERVICES.map((service) => (
                  <div 
                    key={service.id} 
                    className="flex flex-col sm:flex-row gap-6 bg-white/5 backdrop-blur-md p-6 border border-white/10 hover:border-cyan-300/50 transition-all duration-500 group cursor-pointer hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] rounded-xl"
                    onClick={() => setSelectedItem(service)}
                  >
                    <div className="w-full sm:w-1/3 aspect-square sm:aspect-[3/4] overflow-hidden relative border border-white/10 rounded-md">
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-cyan-300 text-xs font-serif tracking-widest uppercase drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]">
                        <Check size={12} /> {service.duration}
                      </div>
                    </div>
                    
                    <div className="w-full sm:w-2/3 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif text-zinc-100 uppercase tracking-wide group-hover:text-cyan-300 transition-colors pr-4">{service.name}</h3>
                        <span className="text-xl font-serif text-cyan-300 drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]">{service.price}</span>
                      </div>
                      <div className="w-full border-b border-cyan-900/30 border-dashed my-3"></div>
                      <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 font-sans">
                        {service.description}
                      </p>
                      <button className="mt-auto self-start text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-300 flex items-center gap-2 transition-colors font-sans">
                        Reservar <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Creator Signature (Barberia) */}
              <div className="mt-24 pt-12 border-t border-cyan-900/30 flex flex-col items-center justify-center text-center">
                <Gem className="text-cyan-300/50 mb-4" size={24} />
                <p className="text-cyan-300/60 text-xs tracking-[0.4em] uppercase font-serif mb-3">
                  Creador de landing page
                </p>
                <h3 className="text-2xl font-serif text-zinc-300 uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(103,232,249,0.2)]">
                  Johan Cañola
                </h3>
              </div>
            </div>
          </section>
        </div>
      )}

      {}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-black/90">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)}></div>

          <div className={`relative w-full max-h-[95vh] overflow-y-auto flex flex-col md:flex-row z-10 overflow-hidden ${
            selectedItem.type === 'clothing' 
              ? 'bg-neutral-900 border-2 border-cyan-500/50 max-w-5xl shadow-[0_0_60px_rgba(34,211,238,0.3)] animate-in fade-in zoom-in-95 duration-300 rounded-xl' 
              : 'bg-zinc-950 border border-cyan-300/30 max-w-5xl shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-xl animate-in fade-in zoom-in-95 duration-300'
          }`}>
            
            <button 
              onClick={() => setSelectedItem(null)}
              className={`absolute top-4 right-4 z-30 flex items-center justify-center p-2 transition-all ${
                selectedItem.type === 'clothing'
                  ? 'bg-black/60 hover:bg-cyan-500 text-white hover:text-black rounded-full backdrop-blur-md border border-cyan-500/50 shadow-lg'
                  : 'bg-black/50 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-sm border border-zinc-800'
              }`}
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Modal Image */}
            <div className={`w-full md:w-1/2 relative bg-black ${selectedItem.type === 'clothing' ? 'border-r border-cyan-900/50' : 'min-h-[40vh] md:min-h-0'}`}>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name}
                className={`absolute inset-0 w-full h-full object-cover ${selectedItem.type === 'service' ? 'grayscale-[0.3]' : 'brightness-90'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className={`absolute top-6 left-6 px-4 py-2 ${
                selectedItem.type === 'clothing' 
                  ? 'bg-cyan-500 text-black text-[11px] font-black border border-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-sm' 
                  : 'bg-black/80 backdrop-blur-md border border-cyan-300/30 rounded-sm text-cyan-300 text-xs'
              }`}>
                <span className={`uppercase tracking-[0.2em] ${selectedItem.type === 'barberia' ? 'font-serif' : ''}`}>
                  {selectedItem.category}
                </span>
              </div>
            </div>

            {/* Modal Info */}
            <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative ${
              selectedItem.type === 'clothing' ? 'bg-neutral-950/90 backdrop-blur-xl' : 'bg-[#050505]'
            }`}>
              
              {/* Background accent for clothing */}
              {selectedItem.type === 'clothing' && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none"></div>
              )}

              <h2 className={`uppercase mb-4 leading-tight relative z-10 ${
                selectedItem.type === 'clothing' 
                  ? 'text-4xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-md' 
                  : 'text-3xl md:text-4xl font-serif tracking-widest text-zinc-100'
              }`}>
                {selectedItem.name}
              </h2>
              
              <p className={`mb-8 relative z-10 ${
                selectedItem.type === 'clothing' 
                  ? 'text-3xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]' 
                  : 'text-3xl font-serif text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.3)]'
              }`}>
                {selectedItem.price}
              </p>
              
              <p className={`mb-10 relative z-10 ${
                selectedItem.type === 'clothing' 
                  ? 'text-neutral-300 font-bold tracking-wide text-sm leading-relaxed border-l-2 border-cyan-500 pl-4 py-1 bg-gradient-to-r from-cyan-900/20 to-transparent' 
                  : 'text-zinc-400 font-light font-serif tracking-wide text-sm leading-relaxed'
              }`}>
                {selectedItem.description}
              </p>

              {/* Size Selector (Clothing Only) */}
              {selectedItem.type === 'clothing' && (
                <div className="mb-12 relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Selecciona Talla</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {SIZES.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 flex items-center justify-center text-sm font-black transition-all border-2 rounded-md shadow-lg ${
                          selectedSize === size 
                            ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-110' 
                            : 'bg-neutral-900/80 border-neutral-700 text-neutral-400 hover:border-cyan-500 hover:text-white hover:bg-neutral-800'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Details (Barberia Only) */}
              {selectedItem.type === 'service' && (
                <div className="mb-10 p-4 border border-cyan-900/30 bg-cyan-950/10 backdrop-blur-sm flex items-center gap-4 rounded-md">
                  <Gem className="text-cyan-300" />
                  <div>
                    <p className="text-xs text-cyan-300/70 uppercase tracking-widest font-serif mb-1">Duración Estimada</p>
                    <p className="text-zinc-200 font-serif">{selectedItem.duration}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 mt-auto relative z-10">
                <button 
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`w-full py-5 uppercase flex items-center justify-center gap-4 transition-all tracking-[0.2em] text-sm rounded-sm ${
                    addedToCart 
                      ? 'bg-green-500 text-black font-black shadow-[0_0_20px_rgba(34,197,94,0.6)]' 
                      : selectedItem.type === 'clothing'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] border border-cyan-400'
                        : 'bg-cyan-300 text-black hover:bg-cyan-200 font-serif font-bold shadow-[0_0_20px_rgba(103,232,249,0.4)] duration-300'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} strokeWidth={3} /> ¡ASEGURADO!
                    </>
                  ) : (
                    <>
                      {selectedItem.type === 'clothing' ? <Zap size={20} strokeWidth={2.5} className="fill-current" /> : <Check size={18} />}
                      {selectedItem.type === 'clothing' ? 'Añadir a la Bóveda' : 'Agregar Reserva'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] transition-opacity" onClick={() => setIsCartOpen(false)}></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-neutral-950 border-l-2 border-cyan-900/50 z-[80] shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-300 ease-out flex flex-col ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950 relative overflow-hidden">
          {/* Subtle cart background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-[50px] pointer-events-none"></div>
          
          <h2 className="text-base uppercase tracking-[0.3em] flex items-center gap-3 text-white font-black relative z-10">
            Tu Bóveda
            <span className="bg-cyan-500 text-black rounded-full h-6 w-6 flex items-center justify-center text-[11px] ml-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 rounded-full relative z-10 hover:bg-neutral-900">
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-hide bg-neutral-950">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-600 space-y-6">
              <ShoppingCart size={56} strokeWidth={1} className="text-neutral-800 drop-shadow-md" />
              <p className="uppercase font-bold tracking-[0.2em] text-sm text-neutral-500">Bóveda vacía</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.cartId} className={`flex gap-4 p-3 relative group bg-neutral-900/50 backdrop-blur-md rounded-lg ${
                item.data.type === 'clothing' 
                  ? 'border border-neutral-700 hover:border-cyan-500 shadow-md' 
                  : 'border border-cyan-900/30'
              }`}>
                <div className="relative w-20 h-24 rounded-md overflow-hidden bg-black">
                  <img src={item.data.image} alt={item.data.name} className={`absolute inset-0 w-full h-full object-cover ${
                    item.data.type === 'clothing' ? 'brightness-90' : 'grayscale-[0.5]'
                  }`} />
                </div>
                
                <div className="flex-1 flex flex-col py-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xs pr-8 leading-tight uppercase ${
                      item.data.type === 'clothing' ? 'font-black text-white tracking-tight' : 'font-serif text-zinc-300 tracking-wider'
                    }`}>
                      {item.data.name}
                    </h3>
                    <button onClick={() => removeFromCart(item.cartId)} className="absolute top-3 right-3 text-neutral-500 hover:text-red-500 transition-colors bg-neutral-950/80 rounded-full p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <p className={`text-sm mt-1 ${item.data.type === 'clothing' ? 'text-cyan-400 font-bold tracking-widest' : 'text-cyan-300 font-serif'}`}>
                    {item.data.price}
                  </p>
                  
                  {item.size && (
                    <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                      Talla: <span className="text-white bg-neutral-800 px-2 py-0.5 rounded-sm">{item.size}</span>
                    </p>
                  )}
                  {item.data.type === 'service' && (
                    <p className="text-cyan-300/60 text-[10px] uppercase tracking-widest mt-1 font-serif">
                      Reserva Barbería
                    </p>
                  )}
                  
                  <div className="mt-auto flex items-center gap-3">
                    <div className={`flex items-center bg-neutral-950 rounded-md overflow-hidden ${item.data.type === 'clothing' ? 'border border-neutral-700' : 'border border-zinc-800'}`}>
                      <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2 hover:bg-neutral-800 text-cyan-500 transition-colors"><Minus size={14} strokeWidth={2.5}/></button>
                      <span className="w-8 text-center text-sm font-black text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2 hover:bg-neutral-800 text-cyan-500 transition-colors"><Plus size={14} strokeWidth={2.5}/></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 relative">
            <div className="flex justify-between items-end mb-6 relative z-10">
              <span className="text-neutral-400 font-black uppercase tracking-widest text-xs">Total a Pagar</span>
              <span className={`text-3xl ${
                cartItems.some(i => i.data.type === 'clothing') ? 'text-white font-black tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'font-serif text-cyan-300'
              }`}>
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 transition-all text-sm rounded-sm shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] relative z-10"
            >
              Pagar por WhatsApp
            </button>
          </div>
        )}
      </div>

    </div>
  );
}