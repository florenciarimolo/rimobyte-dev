---
title: "WordPress Hackeado: Qué hacer en 5 pasos (Guía 2026)"
description: "Tu WordPress ha sido hackeado? No entres en pánico. Sigue esta guía paso a paso para recuperar tu web de forma segura y evitar que vuelva a pasar."
pubDate: 2026-01-25
tags: ["wordpress", "seguridad", "hacking", "rescate"]
---

# WordPress Hackeado: Qué hacer en 5 pasos

¿Has entrado a tu web y ves contenido extraño, te redirecciona a otras páginas o directamente no carga? Es probable que hayas sido hackeado. Aquí te explico qué hacer.

## ⚠️ PASO 0: NO ENTRES EN PÁNICO

**Lo que NO debes hacer:**
- ❌ Borrar archivos al azar
- ❌ Cambiar contraseñas sin más
- ❌ Reinstalar WordPress sobre la instalación actual
- ❌ Ignorarlo esperando que se solucione solo

**Lo que SÍ debes hacer:**
- ✅ Respirar hondo
- ✅ Seguir esta guía paso a paso
- ✅ Documentar todo lo que ves raro
- ✅ Contactar a un profesional si no te sientes seguro

## Paso 1: Aísla la web inmediatamente

**Objetivo:** Evitar más daño y proteger a tus visitantes.

### Opción A: Modo mantenimiento
Instala un plugin de mantenimiento rápido (si aún tienes acceso al admin):
- WP Maintenance Mode
- Coming Soon & Maintenance Mode

### Opción B: Denegar acceso desde cPanel
1. Accede a tu hosting (cPanel/Plesk)
2. Ve a "Administrador de archivos"
3. Renombra `.htaccess` a `.htaccess.old`
4. Crea nuevo `.htaccess` con:

```apache
Order deny,allow
Deny from all
Allow from TU_IP
```

Reemplaza `TU_IP` con tu IP actual (busca en Google "cuál es mi IP").

## Paso 2: Haz backup de TODO (incluso infectado)

**¿Por qué hacer backup de algo infectado?**
Porque puede contener archivos o datos importantes para la recuperación.

### Cómo hacer el backup:
1. Desde cPanel > "Backups" > "Generar backup completo"
2. O descarga todo vía FTP
3. Guarda en un lugar seguro FUERA del servidor

## Paso 3: Identifica el tipo de hack

### Señales comunes por tipo:

**Malware de redirección:**
- Te redirecciona a sitios de spam/apuestas
- Archivos sospechosos en `wp-includes` o `wp-content/uploads`

**Inyección de enlaces spam:**
- Enlaces ocultos en el HTML
- Contenido en idiomas extraños
- Archivos `.htaccess` modificados

**Backdoor admin:**
- Usuarios admin que no conoces
- Archivos PHP sospechosos en cualquier carpeta

**Pharma hack:**
- Páginas de farmacia/viagra en tu sitio
- Miles de páginas indexadas en Google que no creaste

## Paso 4: Limpieza profunda

### Opción 1: Plugin de seguridad (si tienes acceso admin)

1. Instala **Wordfence Security** o **Sucuri Security**
2. Ejecuta escaneo completo
3. Revisa y elimina lo que marquen como malicioso
4. **Importante:** Revisa antes de eliminar, pueden haber falsos positivos

### Opción 2: Limpieza manual (más efectivo)

**Paso 4.1: Core WordPress limpio**
1. Descarga WordPress limpio de wordpress.org (MISMA versión)
2. Sube y sobrescribe carpetas `wp-admin` y `wp-includes`
3. **NO toques** `wp-content` ni `wp-config.php`

**Paso 4.2: Revisar manualmente**
Archivos a revisar en busca de código malicioso:

```
wp-config.php
.htaccess
wp-content/themes/[tu-tema]/*.php
wp-content/plugins/[activos]/*.php
wp-content/uploads/*.php (no debería haber archivos PHP aquí)
```

**Código sospechoso a buscar:**
- `eval(base64_decode(`
- `gzinflate(`
- `preg_replace` con `/e` modifier
- URLs extrañas hardcodeadas

**Paso 4.3: Base de datos**
Busca en `wp_options` y `wp_posts`:
- Scripts maliciosos inyectados
- Usuarios admin desconocidos en `wp_users`

```sql
SELECT * FROM wp_users WHERE user_status = 0;
SELECT * FROM wp_options WHERE option_value LIKE '%base64%';
```

## Paso 5: Reforzar seguridad

Una vez limpio, **nunca** vuelvas a dejar tu WordPress sin estas protecciones:

### 5.1 Actualizar TODO
- WordPress core (última versión)
- Todos los plugins
- Todos los temas

### 5.2 Contraseñas fuertes
Cambia contraseñas de:
- Todos los usuarios WordPress
- Base de datos
- FTP/SFTP
- cPanel/Hosting

**Usa generador de contraseñas:** min. 16 caracteres, letras, números, símbolos.

### 5.3 Configuración de seguridad

**wp-config.php** - Añade:
```php
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true); // opcional, pero más seguro
```

**.htaccess** - Protege archivos sensibles:
```apache
<Files wp-config.php>
  order allow,deny
  deny from all
</Files>
```

### 5.4 Plugins de seguridad

Instala y configura:
- **Wordfence** o **Sucuri Security**
- **iThemes Security**
- **Limit Login Attempts Reloaded**

### 5.5 Backups automáticos

Configura backups diarios:
- **UpdraftPlus** (free)
- **BackWPup** (free)
- O servicio de tu hosting

## ¿Cómo evitar ser hackeado en el futuro?

1. **Mantén todo actualizado** - Activa actualizaciones automáticas
2. **Solo plugins de confianza** - Del repositorio oficial con buenas reseñas
3. **Limita intentos de login** - Plugin de límite de intentos
4. **Hosting seguro** - Evita hosting muy baratos
5. **SSL/HTTPS** - Obligatorio en 2026
6. **Backups regulares** - Diarios si es posible
7. **Monitoreo** - Plugins de seguridad con escaneos programados

## ¿Necesitas ayuda profesional?

Si este proceso te supera o quieres asegurarte al 100%, puedo ayudarte:

**[Servicio de rescate WordPress urgente](/es/rescate-wordpress-urgente)**
- Respuesta en 2 horas
- Limpieza completa garantizada
- Hardening de seguridad incluido
- Desde 200€

[Contactar por WhatsApp](https://wa.me/34684713743?text=Hola,%20mi%20WordPress%20ha%20sido%20hackeado)

---

*Última actualización: Enero 2026*
