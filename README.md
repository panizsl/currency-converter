# Currency Converter (USD ↔ IRR)

A simple currency converter built with **React**, **TypeScript**, and **Tailwind CSS**.

This application converts **US Dollars (USD)** to **Iranian Rials (IRR)** and vice versa. The exchange rate is entered manually by the user, based on the task requirements.

---

## Features

* Convert **USD → IRR**
* Convert **IRR → USD**
* User-defined exchange rate
* Built with **React** and **TypeScript**
* Uses `useMemo` to avoid unnecessary recalculations
* Simple and responsive user interface
* Number formatting using `toLocaleString()`

---

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* Vite

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/currency-converter.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## How It Works

1. Enter the current exchange rate of **1 USD** in **Iranian Rial (IRR)**.
2. Enter the amount you want to convert.
3. Select the conversion direction:

   * USD → IRR
   * IRR → USD
4. The converted value is calculated automatically and displayed on the screen.

---

## Project Structure

```text
src/
 ├── App.tsx
 ├── main.tsx
 ├── index.css
 └── ...
```

---

## Implementation Details

* React Hooks (`useState`) are used to manage user inputs.
* `useMemo` is used to calculate the conversion result only when one of the dependencies changes:

  * Exchange Rate
  * Amount
  * Conversion Direction
* TypeScript is used for better type safety through the `ConversionDirection` type.

---

## Assumptions

* The exchange rate is entered manually by the user.
* The application works with **Iranian Rial (IRR)**, not Toman.
* No external exchange rate API is used.

---

## Resources

* React Documentation
* TypeScript Documentation
* Tailwind CSS Documentation
* Vite Documentation
