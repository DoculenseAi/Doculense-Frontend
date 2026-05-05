# DocuLense.AI — Translation Key Reference

## Key Naming Convention
- **Format**: `section.subsection.element`
- **Case**: lowercase with dots
- **Interpolation**: `{variable}` syntax (e.g., `"Welcome back, {name}"`)

## Rules
1. ALL static UI text must use translation keys — zero hardcoded strings
2. Same keys in every language file — only values change
3. User-generated content is NEVER translated (project names, file names, doc titles)
4. System-generated AI outputs remain in English

## Key Categories

### Navigation (`nav.*`)
```
nav.dashboard, nav.projects, nav.documents, nav.generate,
nav.reviews, nav.settings, nav.admin, nav.users, nav.usage,
nav.logout, nav.help
```

### Auth (`auth.*`)
```
auth.login, auth.register, auth.email, auth.password,
auth.forgot, auth.reset, auth.confirm_email, auth.welcome,
auth.or_continue_with, auth.terms_agree
```

### Dashboard (`dashboard.*`)
```
dashboard.title, dashboard.welcome, dashboard.recent_projects,
dashboard.quick_actions, dashboard.activity, dashboard.stats.*
```

### Projects (`project.*`)
```
project.create, project.name, project.description, project.delete,
project.empty, project.documents_tab, project.generated_tab,
project.activity_tab, project.updated_at, project.doc_count
```

### Documents (`document.*`)
```
document.upload, document.drag_drop, document.processing,
document.ready, document.error, document.download, document.share,
document.delete, document.version, document.metadata, document.viewer
```

### Generation (`generation.*`)
```
generation.title, generation.select_type, generation.configure,
generation.generate, generation.streaming, generation.complete,
generation.edit, generation.download, generation.submit_review
```

### Reviews (`review.*`)
```
review.pending, review.approve, review.request_changes,
review.comment, review.timeline, review.completed, review.submit
```

### Landing Page (`landing.*`)
```
landing.hero.title, landing.hero.subtitle, landing.cta,
landing.features.title, landing.features.*, landing.pricing.*,
landing.testimonials.*, landing.footer.*
```

### Common (`common.*`)
```
common.save, common.cancel, common.delete, common.edit,
common.search, common.loading, common.error, common.retry,
common.confirm, common.back, common.next, common.previous,
common.view_all, common.no_results, common.required
```

### Errors (`error.*`)
```
error.generic, error.network, error.unauthorized, error.forbidden,
error.not_found, error.validation, error.upload_failed,
error.generation_failed, error.file_too_large, error.invalid_type
```
