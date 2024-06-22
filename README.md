# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose
This document details the requirements for the "Lost & Found" website for the university, outlining its functionality, performance, and interface requirements.

### 1.2 Scope
The website will allow university students, staff, and faculty to report lost and found items efficiently, facilitating the submission, management, and retrieval of these reports.

### 1.3 Definitions
- **Admin**: Administrator managing the website.
- **User**: Student, staff, or faculty member using the website.
- **Report**: Submission regarding a lost or found item.
- **Database**: Repository for storing reports and user data.

### 1.4 References
- University web development guidelines.
- Existing lost and found systems.
- Web accessibility standards.

## 2. Overall Description

### 2.1 Product Perspective
A standalone application accessible through the university's main website, integrated with the university's authentication system.

### 2.2 Product Functions
- User Registration and Authentication
- Reporting Lost Items
- Reporting Found Items
- Browsing Reports
- Searching Reports
- Admin Management

### 2.3 User Classes
- **Students, Staff, Faculty**: Report and search for lost and found items.
- **Admin**: Manage user accounts, oversee reports, ensure compliance.

### 2.4 Operating Environment
- Web-based application for modern web browsers (Chrome, Firefox, Safari, Edge).
- Compatible with mobile and desktop devices.
- Integrated with the university's authentication system.

### 2.5 Design Constraints
- Adherence to university's web guidelines.
- Compliance with web accessibility standards.
- Secure handling of data.

### 2.6 Assumptions
- Users have internet access and a modern web browser.
- University's authentication system is operational.
- Users are familiar with basic web navigation.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 User Registration and Authentication
- Log in using university credentials.
- Authenticate via the university's system.

#### 3.1.2 Reporting Lost Items
- Submit a report with item description, date lost, location lost, contact info.
- Upload a photo of the lost item.

#### 3.1.3 Reporting Found Items
- Submit a report with item description, date found, location found, contact info.
- Upload a photo of the found item.

#### 3.1.4 Browsing Reports
- Browse lost and found reports.
- Sort reports by date, location, item type.

#### 3.1.5 Searching Reports
- Search for items using keywords, dates, and locations.
- Quick and relevant search results.

#### 3.1.6 Admin Management
- Manage user accounts.
- Review and approve/reject reports.
- Generate lost and found statistics.

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance
- Handle up to 1000 concurrent users.
- Return search results within 2 seconds.

#### 3.2.2 Security
- Encrypt data during transmission and storage.
- Restrict access to authenticated users.
- Log admin actions for audits.

#### 3.2.3 Usability
- User-friendly and intuitive interface.
- Accessible to users with disabilities (WCAG 2.1).

#### 3.2.4 Reliability
- Uptime of 99.9%.
- Backup and recovery processes in place.

### 3.3 Interface Requirements

#### 3.3.1 User Interface
- Clean, modern design consistent with university branding.
- Simple forms for report submissions.

#### 3.3.2 Software Interface
- Integrate with university's authentication system.
- Use a relational database for storage.

## 4. Appendices

### 4.1 Glossary
- **Item Description**: Detailed explanation of the lost or found item.
- **Contact Information**: User's contact details (e.g., email, phone).

### 4.2 Analysis Models
- Diagrams and models to be provided during the design phase.

### 4.3 Issues
- Data privacy and user compliance issues to be addressed during development.

## Demo Website Pages

### 1. Home Page
- **Header**: University Logo, Navigation Menu
- **Main Content**: Welcome message, quick links, recent items list
- **Footer**: Contact Information, Privacy Policy, Terms of Service

### 2. Report Lost Item Page
- **Form Fields**: Item Description, Date Lost, Location Lost, Upload Photo, Contact Information, Submit Button
- **Confirmation Message**: "Your report has been submitted successfully."

### 3. Report Found Item Page
- **Form Fields**: Item Description, Date Found, Location Found, Upload Photo, Contact Information, Submit Button
- **Confirmation Message**: "Your report has been submitted successfully."

### 4. Browse Reports Page
- **Search Bar**: Keywords, Date, Location
- **Filter Options**: Lost/Found, Date, Location, Item Type
- **Report List**: Item Description, Date Lost/Found, Location Lost/Found, Thumbnail Image, Contact Information

### 5. Admin Dashboard
- **Navigation Menu**: User Management, Report Management, Statistics, Settings
- **Main Content**: 
  - **User Management**: Add/Edit/Delete Users
  - **Report Management**: Approve/Reject Reports
  - **Statistics**: Graphs and charts of lost and found items
  - **Settings**: System settings and preferences

test