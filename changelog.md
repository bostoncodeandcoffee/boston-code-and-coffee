# Change Log
All notable changes to this project will be documented in this file.

The versions below include released and unreleased changes along with their respective tasks. Released versions contain a link to the changes released. Tasks contain a link to the issue resolved. To view the current unreleased changes, check out [Unreleased Changes].


<!--
Follow the same format when checking in your changes. See the example below:

---

## [MAJOR.MINOR.PATCH] - YYYY-MM-DD

### Added
- [ISSUE-#](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/#) Issue description

### Updated
N/A

### Removed
N/A

-->
---

## [1.1.4] - 2024-04-04
 
### Added
N/A

### Updated
- Updated organizer's API

### Removed
N/A

---
## [1.1.3] - 2023-10-24
 
### Added
- Added .env file with Notion API key and Notion database key variables
- Added .env file to gitignore file
- Added fetchDataFromNotion async function to get the data from Notion and sort the array to the separate file at /app/service/notion/NotionService


### Updated
- Updated Organizers function


### Removed
- removed the hardcoded array of team members

---
## [1.1.0] - 2023-09-06
 
### Added
- Added transparent shadows to EventAlbum text
- Clicking on gallery image now opens it in full-screen

### Updated
- Cover image for EventAlbum is now takem from the Photo album instead of the poster
- For events with only cover images, stock image is chosen as the cover


## [1.1.2] - 2023-09-08
 
### Added
- Added 2 new team members
- Linked the new components in pastEvents pages

### Updated
- Updated Anton's and Brian's pictures in Organizers page
- Updated everyone's roles to reflect the new structure
- Updated the variables to reflect the new roles

### Removed
- Removed David Venegas
- Removed h2 'Meet Our Volunteers!' 
---
## [1.1.3] - 2023-10-09
### Added
- Instructions in README to install Next.js

## [1.1.2] - 2023-09-16
### Added
- New Feedback button and Social media buttons for X and Meetup
### Updated
- Reordered main page buttons 


## [1.1.1] - 2023-08-24
### Updated
- Updated Nicole Lyu's picture in Organizers page

## [1.1.0] - 2023-08-20
 
### Added
- [ISSUE-22](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/22) Add and Populate the "About Section"
- [ISSUE-17](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/17) Add Social Media Buttons community

### Updated
- [ISSUE-23](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/23) Update the Organizers Page
- [ISSUE-16](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/16) Update the 'Past Events' page (Frontend) 
- [ISSUE-15](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/15) Update the 'Past Events' page (Backend) website 
- [ISSUE-4](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/4) Update the CC Chapters page website team

### Removed
N/A

---

## 1.0.7 - 2023-08-18
 
### Added
- Added two new components EventAlbum and Gallery
- Linked the new components in pastEvents pages

### Updated
- Updated styles and formatting in app/(routes)/pastEvents/page.tsx according to design spec
- Updated styles and formatting in app/(routes)/pastEvents/[eventId]/photoAlbum/page.tsx according to design spec

### Removed
N/A

---

## 1.0.6 - 2023-08-08
 
### Added
- Add more team members to team array in organizers/page.tsx
- Add links for LinkedIn profiles to images.

### Updated
- Update ul className to grid

### Removed
N/A

---

## 1.0.5 - 2023-08-03
 
### Added
- Add UpcomingMeetupEvent component
- Add DateTime utils
- Add CodeCoffeeChapter
- Add GroupUpcomingEventsFragment
- Add SettingsService
- Add Chapters page

### Updated
- Update RequestUtil
- Update MeetupGroup
- Update MeetupEvent
- Update Configuration
- Update MeetupService
- Catch error response in SettingsService

### Removed
N/A

---

### Added
- Added three subpages to the About Section
- Added Navigation to the About subpages (links back to About main page)
### Updated
- Updated About Main Page to include subpages
- Updated root layout to use fragment instead of div
- Change the color of the About button on the home page

---

## 1.0.4 - 2023-07-28
 
### Added
Add RequestUtil
Add MeetupService
Add query fragments
Add domain types
Add config constants
Add 'Photos from past events' page
Add event photo album sub-page
Fix build errors

### Updated
N/A

### Removed
N/A

---

## 1.0.3 - 2023-07-25
 
### Added
Discord and LinkedIn logos in the assets/images folder

### Updated
- Updated the page.tsx file to add Social media buttons

### Removed
N/A

---

## 1.0.2 - 2023-07-22
 
### Added
N/A

### Updated
- Update workflows/mail.yml to check for failed app build
- Update app/(routes)/features/page.tsx to fix unescaped quotes

### Removed
N/A

---

## 1.0.1 - 2023-07-22
 
### Added
- Add github action to check for CHANGELOG.md update

### Updated
N/A
### Removed
N/A

---

## [1.0.0] - 2023-07-14
 
### Added
N/A

### Updated
- [ISSUE-5](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/3) UX/UI Improvements
- [ISSUE-3](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/3) Update the Organizers page
- [ISSUE-2](https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/issues/2) Update the Feature Sign Up page

### Removed
N/A

<!-- LINKS -->

[Unreleased Changes]: https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/compare/v1.1.0...HEAD

<!-- Add the links to released versions below and update the Unreleased link above accordingly. -->

[1.1.0]: https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee/releases/tag/v0.1.0
