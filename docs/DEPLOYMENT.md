# Hari's Playbook: static deployment

The website is plain HTML, CSS, JavaScript, images, and PDFs. It does not need a Node server, database, npm installation, or framework build.

## Vercel

GitHub lists [hari-playbook.vercel.app](https://hari-playbook.vercel.app) as the repository homepage. This guide does not claim its current availability has been verified.

For a Vercel project connected to this repository:

1. Use the repository root as the root directory.
2. Select **Other** as the framework preset.
3. Use no build command and no dependency installation command.
4. Serve the repository root as the static output.
5. Use `main` for production and review branch/PR previews before release.

Inspect Vercel's deployment result to confirm the live source commit. If your project already has custom settings, reconcile them with the static layout before changing them.

## GitHub Pages

[static.yml](../.github/workflows/static.yml) is the single Pages publisher. The previous Jekyll workflow is redundant because the repository contains no Jekyll source.

1. Open repository **Settings > Pages**.
2. Select **GitHub Actions** as the publishing source.
3. Push a reviewed change to `main`, or run **Deploy static content to Pages** manually from Actions.
4. Wait for the workflow to succeed and use its deployment URL.

The workflow stages `index.html`, the three CSS files, `script.js`, and `assets/` in a dedicated `_site/` directory. It excludes macOS metadata and does not publish Git history, contribution templates, or internal documentation as website files.

The expected default project URL is `https://hari-aditya-003.github.io/Hari.Playbook/`, unless a custom domain or account setting changes it. Treat it as an expected address until a successful deployment confirms the URL.

See GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). If Pages reports that the site cannot be found, confirm the publishing source and repository Actions/Pages permissions.

## Contact form readiness

The current HTML references the EmailJS SDK, but does not load the repository's `script.js`. The integration source also uses unquoted identifiers for the public key, service ID, and template ID. Consequently, publishing the existing static files does not make the contact form operational.

Before advertising form submissions:

1. Load the application script after the EmailJS SDK and after the form is available.
2. Supply the public key, service ID, and template ID as JavaScript strings from your own EmailJS setup.
3. Match the template fields to `from_name`, `email_id`, `phone`, and `message`.
4. Configure allowed origins and abuse controls in EmailJS.
5. Send a test message, verify receipt, and exercise a failure case.

Client-side EmailJS configuration is visible to visitors. Never put private account keys or server-side credentials in static JavaScript. The email and LinkedIn links remain available while the form integration is being completed.

## Release checks

- Serve the checkout locally with `python3 -m http.server 8000 --bind 127.0.0.1`.
- Open the page at desktop and narrow mobile widths.
- Check navigation targets, project links, stylesheet loading, image paths, and alt text.
- Open the CV download and confirm the intended PDF is served.
- Inspect the browser console and Network panel.
- Test EmailJS separately if enabling the form.
- Repeat the checks at the deployed URL, including under the Pages project subpath.

There is no automated application test suite in this repository. A successful publishing workflow confirms artifact upload/deployment, not every interaction on the page.

## Rollback

Retain the last known good commit SHA. On Vercel, promote an earlier successful deployment or revert the faulty source change. On GitHub Pages, revert the change on `main` and allow the workflow to publish again. Confirm the live deployment's commit and rerun the release checks.
