# 📚 Book Store Application

A modern, full-stack book store application built with React and Node.js, featuring a beautiful UI for browsing, managing, and purchasing books.

## 🚀 Features

### Frontend Features
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Book Browsing**: Browse books by categories with filtering capabilities
- **Book Details**: Detailed view of individual books with descriptions
- **Admin Dashboard**: Complete book management system for administrators
- **Book Upload**: Add new books with comprehensive metadata
- **Book Editing**: Update existing book information
- **Navigation**: Intuitive navigation with React Router
- **Modern UI Components**: Built with Flowbite React components

### Backend Features
- **RESTful API**: Complete CRUD operations for books
- **MongoDB Integration**: Scalable database solution
- **File Upload Support**: Handle book PDFs and images
- **Category Filtering**: Filter books by categories
- **Data Validation**: Robust data handling and validation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - UI component library
- **React Icons** - Icon library
- **Swiper** - Touch slider component
- **LocalForage** - Offline storage
- **Match Sorter** - Fuzzy search functionality

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **MongoDB Driver** - Official MongoDB driver for Node.js
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload middleware
- **PDF-lib** - PDF manipulation library
- **Nodemon** - Development server with auto-restart

## 📁 Project Structure

```
book-store/
├── Backend/                 # Node.js backend server
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── uploads/            # File upload directory
├── my-project/             # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── dashboard/      # Admin dashboard components
│   │   ├── home/          # Home page components
│   │   ├── Shop/          # Shop/browse components
│   │   ├── routers/       # Routing configuration
│   │   └── assets/        # Static assets (images)
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-store
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../my-project
   npm install
   ```

4. **Configure MongoDB**
   - Update the MongoDB connection string in `Backend/index.js`
   - Replace the placeholder URI with your MongoDB connection string

5. **Start the Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```
   The backend will run on `http://localhost:3000`

6. **Start the Frontend Development Server**
   ```bash
   cd my-project
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📖 Usage

### For Users
1. **Browse Books**: Visit the home page to see featured books
2. **Shop**: Navigate to the shop page to browse all available books
3. **Book Details**: Click on any book to view detailed information
4. **Categories**: Filter books by different categories

### For Administrators
1. **Access Dashboard**: Navigate to `/admin/dashboard`
2. **Upload Books**: Use the upload form to add new books
3. **Edit Books**: Modify existing book information
4. **Manage Inventory**: View and manage all books in the system

## 🔧 API Endpoints

### Books
- `GET /all-books` - Get all books (with optional category filter)
- `GET /book/:id` - Get a specific book by ID
- `POST /upload-book` - Upload a new book
- `PATCH /book/:id` - Update a book
- `DELETE /book/:id` - Delete a book

### Query Parameters
- `?category=<category>` - Filter books by category

## 🎨 UI Components

The application uses a modern design system with:
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Card-based Design**: Clean book cards with hover effects
- **Navigation**: Sticky navbar with smooth transitions
- **Forms**: User-friendly forms with validation
- **Dashboard**: Admin interface with sidebar navigation

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Security Features

- CORS configuration for secure API access
- Input validation and sanitization
- Secure file upload handling
- MongoDB injection protection

## 🚀 Deployment

### Frontend Deployment
```bash
cd my-project
npm run build
```
The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Backend Deployment
```bash
cd Backend
npm start
```
The backend can be deployed to platforms like Heroku, Railway, or any Node.js hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ for book lovers and developers.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy Reading! 📚✨**
