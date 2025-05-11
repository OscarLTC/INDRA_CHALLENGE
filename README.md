# Frontend Challenge

Desafío técnico de Indra

## Tecnologías y bibliotecas utilizadas

* **React & Vite**: desarrollo ágil con Hot Module Replacement.
* **TypeScript**: tipado estático y detección temprana de errores.
* **Zustand**: estado global ligero para login y planes.
* **React Router v7**: navegación declarativa y protección de rutas.
* **React Hook Form + Zod**: validación de formularios basada en esquemas.
* **PrimeReact**: componentes accesibles (Dropdown, InputMask, Button, ProgressBar, Checkbox).
* **Tailwind CSS**: utilidades de estilo para rapidez y coherencia.
* **Vitest + Testing Library + JSDOM**: pruebas unitarias de utilitarios, hooks y componentes.

## Estructura del proyecto

```
src/
├── api/          # servicios API (fetchPlans, fetchUser)
├── shared/       # componentes reutilizables (DocumentField, CustomCheckBox, StepIndicator, RequireAuth)
├── features/     # lógica de dominio: login y planes
│   ├── login/    # formulario, store persistente y validaciones Zod
│   └── plans/    # fetch, filtrado, carousel y resumen de planes
├── layout/       # layouts globales (Header, Footer, WizardLayout)
├── config/       # rutas y configuración de PrimeReact
└── hooks/        # hooks genéricos (useCarousel, usePlans)
```

## Cómo levantar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPO>
   cd frontend-challenge
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Configurar variable de entorno:

   * Crear archivo `.env` con:

     ```env
     VITE_API_URL=https://.../api
     ```
4. Levantar servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Testing

* Ejecutar todas las pruebas unitarias:

  ```bash
  npm run test
  ```
* Incluye tests de:

  * Utilitarios (`applyDiscount`, `computeUserAge`)
  * Hooks (`useCarousel`)
  * Componentes (`DocumentField`, `RequireAuth`, `StepIndicator`)

