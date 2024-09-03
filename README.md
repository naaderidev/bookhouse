# BookHouse :book: :books:

Persian-language Book Store for Bookish People and Book Shops

**Next | TailwindCss | MongoDB**

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is an online bookstore built with Next.js 14 using the app router method and MongoDB for the database. It features three main sections: the marketplace, user panel, and admin management panel.

Key functionalities include:

**Authentication:** Users can log in via email or SMS for both the user and admin panels.

**Communication:** The design incorporates multiple communication channels, including a contact page, ticket submission through the user panel, and a dedicated book exchange request form.

**Book Organization:** The bookstore page offers thematic and price-based categorization of books, along with a search feature in the header for easy navigation.

**Responsive Design:** The project is fully responsive, ensuring usability across laptops, tablets, and mobile devices.

Styling is achieved using Tailwind CSS, and custom modals, pagination, various card designs and dark mode enhance the user experience.

**This version is deployed hear: https://bookhouse.liara.run/**

I have to change insert product API in deploy version because of creating a bucket for uploading images, so i installed multer and aws-sdk in deployment version, if you have any question feel free to ask me!

## Technologies Used

- ReactJs
- NextJs
- App Router
- TailwindCSS
- Axios
- bcryptjs
- jsonwebtoken
- swiper
- typewriter-effect
- aos
- clsx
- mongoose
- Yup
- Formik
- Rect-Hook-Form

## Features

- Responsive Design
- SMS Login + Email Login
- Dark and Light mode
- Marketplace + User-Panel + Admin-Panel
- Modularity and Reusability
- Component-based architecture
- Custom Modals, Pagination and Tabel Filtering

## Installation

create a database in mongodb compass and name it **book-house** then extract bookhouse-db and import all the collections to it!

## Usage

- install moduls

```
npm install
```

- then run project

```
npm run dev
```

## Contributing

This project is **open-source**, and we believe that the more people who contribute, the stronger it will become. So, if you're excited about what we're building and want to be a part of it, please feel free to **fork** the repository and submit your pull requests.

## License

This project is released under the **MIT License**, a flexible and widely-used open-source license that grants you the freedom to use, modify, and distribute the code as you see fit.