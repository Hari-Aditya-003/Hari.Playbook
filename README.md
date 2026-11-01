# Hari's Playbook

[![GitHub stars](https://img.shields.io/github/stars/Hari-Aditya-003/Hari.Playbook?style=flat-square)](https://github.com/Hari-Aditya-003/Hari.Playbook/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Hari-Aditya-003/Hari.Playbook?style=flat-square)](https://github.com/Hari-Aditya-003/Hari.Playbook/forks)
[![Default branch](https://img.shields.io/badge/branch-main-2563eb?style=flat-square)](https://github.com/Hari-Aditya-003/Hari.Playbook/branches)

Hari Aditya's developer portfolio, showcasing full-stack web development, game development, machine learning, and robotics projects.

[Portfolio URL configured in GitHub](https://hari-playbook.vercel.app) · [GitHub profile](https://github.com/Hari-Aditya-003) · [LinkedIn](https://www.linkedin.com/in/aditya-hari-32767a243/)

## Stack and features

The portfolio itself is a static **HTML, CSS, and JavaScript** website. It has responsive layouts, project cards, experience and education sections, resume downloads, and contact information. EmailJS is referenced for contact-form integration and needs verification before relying on submissions.

Python, Flask, Unity, and machine-learning tools describe projects showcased by the portfolio; they are not server dependencies for this website.

## Run locally

Requires Git and Python 3 for a simple local HTTP server. No npm install or build step is required.

```bash
git clone https://github.com/Hari-Aditya-003/Hari.Playbook.git
cd Hari.Playbook
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://localhost:8000). Stop the server with Control-C.

## Featured repositories

| Project | Focus |
| --- | --- |
| [Apple Detection](https://github.com/Hari-Aditya-003/aam-ebca-fm-kwconv) | Computer vision research, apple detection, depth, and tracking |
| [Snap HUB](https://github.com/Hari-Aditya-003/Snap-HUB) | Full-stack event photo and video platform |
| [FrameCut for iPad](https://github.com/Hari-Aditya-003/FrameCut-iPad) | Native SwiftUI playback and trimming |
| [Solar Bot](https://github.com/Hari-Aditya-003/Solar_bot-) | Robotics, coverage planning, and embedded control |
| [Hari's Playbook](https://github.com/Hari-Aditya-003/Hari.Playbook) | This developer portfolio |

## Project structure

```text
index.html                    Page content, navigation, and project cards
style.css                     Main styles
mediaqueries.css              Responsive styles
final_style_mobile_fixed.css  Additional stylesheet; check references before editing
script.js                     Navigation and EmailJS integration source
assets/                       Project images, icons, and resume PDFs
.github/workflows/static.yml  Static GitHub Pages publishing workflow
docs/DEPLOYMENT.md            Hosting, release checks, and rollback
CONTRIBUTING.md               Contribution workflow
```

## Customize the portfolio

1. Update profile, experience, project links, and contact information in `index.html`.
2. Add optimized images in `assets/` and update their relative paths and alt text.
3. Replace `assets/resume-example.pdf` with the intended resume, or update the download link.
4. Check desktop and mobile layouts after editing either stylesheet.
5. Verify contact-form script loading and EmailJS configuration before accepting submissions; see [deployment checks](docs/DEPLOYMENT.md#contact-form-readiness).

## Deployment

The repository homepage points to Vercel. GitHub Pages is an alternative static host supported by the single [Pages workflow](.github/workflows/static.yml). The workflow publishes an explicit site folder instead of the entire repository. See [deployment instructions](docs/DEPLOYMENT.md) for host configuration, verification, and rollback.

A committed workflow does not by itself confirm a successful deployment; check its Actions run and deployment URL.

## Contribute and follow the project

Read [CONTRIBUTING.md](CONTRIBUTING.md), report an issue, or fork the repository and propose a pull request against `main`. Stars and forks badges update from GitHub. Browse [branches](https://github.com/Hari-Aditya-003/Hari.Playbook/branches); `try-Ui` is an existing experimental branch, while `main` is the default branch.
