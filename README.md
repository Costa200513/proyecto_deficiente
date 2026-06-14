# Proyecto Deficiente — Auditoría Digital (Ejemplo con errores intencionales)

> ⚠️ **AVISO PEDAGÓGICO:** Este proyecto fue creado intencionalmente con errores académicos,
> técnicos y éticos para ser usado como material de análisis en clase.
> El objetivo es que los estudiantes identifiquen qué está mal y por qué.
> No representa un modelo a seguir.

---

## ¿Qué errores contiene este proyecto?

### ❌ Errores éticos (los más importantes)

**1. Pide datos innecesarios sin justificación**
El formulario pide nombre y correo electrónico "para enviar el resultado", pero el simulador
funciona 100% en el navegador y no envía nada a ningún lado. Recolectar datos que no se usan
es una mala práctica ética y técnica.

**2. El aviso de privacidad es contradictorio**
El código JavaScript muestra en el resultado: "Gracias por dejar tu correo: [correo]. Te mandamos
el resultado! (en realidad no mandamos nada...)" — esto genera confusión y desconfianza.

**3. No se explica qué hace el proyecto con los datos**
No hay política de privacidad ni aclaración clara. Un usuario no puede saber qué pasará con su
nombre y correo.

---

### ❌ Errores técnicos

**4. Variables con nombres sin sentido**
Las variables se llaman `a`, `b`, `c`, `d`, `n` — es imposible saber qué representan sin
leer el contexto completo.

**5. Multiplicación de strings**
El campo `horas de celular` es de tipo `text`, no `number`. Si el usuario escribe "4", la
operación `"4" * 3` da 12 por coerción de tipo implícita en JavaScript, pero es una
práctica incorrecta y puede producir `NaN` en otros casos.

**6. Falta el nivel medio**
El cálculo solo contempla "BAJO" y "ALTO". Se olvidó el nivel "MEDIO". El comentario
`// falta el nivel medio, se olvido` quedó en el código.

**7. Sin validación de números negativos ni rangos**
Se puede ingresar -100 horas de celular y el simulador lo acepta.

**8. Coeficientes sin fundamento explicado**
Los factores de cálculo (`* 3`, `* 5`, `* 2`) no tienen ninguna base documentada.

---

### ❌ Errores conceptuales

**9. Confusión entre huella de carbono y privacidad**
El texto informativo dice "La privacidad de datos es diferente a la huella de carbono pero igual
las ponemos juntas porque son dos temas de tecnologia". Esto no es una integración conceptual,
es una yuxtaposición superficial.

**10. Información imprecisa o incorrecta**
Frases como "tampoco hay que exagerar porque tampoco es tanto comparado con otras cosas" restan
seriedad al problema ambiental sin datos que lo respalden.

**11. Campaña sin estructura ni datos concretos**
Los mensajes de campaña son frases sueltas sin cifras, fuentes ni llamados a la acción claros.

---

### ❌ Errores de diseño

**12. Paleta de colores inaccesible**
Texto amarillo sobre fondo verde y fondo amarillo general dificultan la lectura.
El contraste no cumple con los estándares mínimos de accesibilidad.

**13. Fuente Comic Sans en un proyecto formal**
La elección tipográfica no es apropiada para un proyecto académico-técnico.

**14. Sin estructura HTML semántica**
Se usan `<div>` genéricos para todo en lugar de `<header>`, `<main>`, `<section>`, `<footer>`, etc.

**15. Sin diseño responsive**
La página no funciona bien en pantallas pequeñas.

---

## Para trabajar en clase

**Preguntas para el análisis:**
- ¿Qué errores te parecen más graves? ¿Por qué?
- ¿Cuáles son fáciles de corregir y cuáles requieren repensar el proyecto?
- ¿Cómo mejorarías la parte ética sin cambiar el funcionamiento del simulador?
- ¿Qué criterios de evaluación usarías para diferenciar este proyecto del intermedio y el excelente?

---

*Este archivo forma parte del material de ejemplares anclados para clase de Didáctica.*
